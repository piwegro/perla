'use client'

import React, { useEffect, useRef, useState } from 'react'
import { initFirebase } from '../../../../utils/firebase'
import { getAuth } from 'firebase/auth'
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth'
import Button from '../../../../components/common/Button'
import stylesCommon from '../../../../styles/pages/auth/AuthCommon.module.scss'
import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/navigation'
import Notification from '../../../../components/auth/Notification'
import convertFirebaseError from '../../../../utils/firebaseErrorConverter'

function Page() {
    // Initialize Firebase
    initFirebase()
    // Get auth instance
    const auth = getAuth()
    // Create states
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, , updateError] = useUpdateProfile(auth)
    const [dbAddError, setDbAddError] = useState(false)
    const [user2, loading2, error2] = useAuthState(auth)
    const [fieldsError, setFieldsError] = useState(false)

    // Get router
    const router = useRouter()

    // Redirect to home page if user is logged in
    useEffect(() => {
        if (error || error2 || updateError || dbAddError) return

        if (!loading && (user || user2)) router.push('/')
    }, [loading, loading2])

    // Create refs
    const usernameField = useRef(null)
    const emailField = useRef(null)
    const passwordField = useRef(null)

    /** Handles form submit */
    const handleSubmit = e => {
        e.preventDefault() // prevent default behaviour

        // Check if fields are empty
        const [username, email, password] = [
            usernameField.current.value,
            emailField.current.value,
            passwordField.current.value,
        ]

        if (!(username && email && password)) {
            setFieldsError(true)
            return
        } else {
            setFieldsError(false)
        }

        // Create user
        createUserWithEmailAndPassword(emailField.current.value, passwordField.current.value).then(
            userData => {
                if (userData)
                    // Update user profile to include username
                    updateProfile({ displayName: username }).then(() => {
                        addUserToDatabase(userData.user)
                    })
            }
        )
    }

    /** Adds user to database */
    const addUserToDatabase = user => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${user.uid}`, {
            method: 'PUT',
        })
            .then(res => {
                if (!res.ok) {
                    setDbAddError(true)
                    console.log('API ERROR', res.statusText)
                }
                return res.json()
            })
            .catch(() => {
                console.log('DB ERROR')
                setDbAddError(true)
            })
    }

    return (
        <div className={stylesCommon.wrapper}>
            <div className={stylesCommon.content}>
                <div className={stylesCommon.authBox}>
                    <h2>Rejestracja</h2>
                    {error ? (
                        <Notification type={'error'}>{convertFirebaseError(error)}</Notification>
                    ) : null}
                    {updateError ? (
                        <Notification type={'error'}>
                            Wystąpił błąd podczas aktualizowania danych użytkownika. Skontaktuj się
                            z administratorem strony.
                        </Notification>
                    ) : null}
                    {dbAddError ? (
                        <Notification type={'error'}>
                            Wystąpił błąd podczas dodawania użytkownika do bazy danych. Skontaktuj
                            się z administratorem strony.
                        </Notification>
                    ) : null}
                    {fieldsError ? (
                        <Notification type={'error'}>
                            Do założenia konta konieczne jest wypełnienie wszystkich pól.
                        </Notification>
                    ) : null}
                    <form onSubmit={handleSubmit}>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='username'>Nazwa użytkownika</label>
                            <input
                                type={'text'}
                                id={'username'}
                                ref={usernameField}
                                required={true}
                            />
                        </div>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='email'>Adres e-mail</label>
                            <input type={'email'} id={'email'} ref={emailField} required={true} />
                        </div>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='password'>Hasło</label>
                            <input
                                type={'password'}
                                id={'password'}
                                ref={passwordField}
                                required={true}
                            />
                        </div>
                        <Button element={'button'} type={'submit'}>
                            Zarejestruj się
                        </Button>
                    </form>
                    <p className={stylesCommon.bottomText}>
                        Masz już konto? <Link href={'/user/auth/signin'}>Zaloguj się!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page
