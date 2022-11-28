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

function Page(props) {
    initFirebase()
    const auth = getAuth()
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [dbAddError, setDbAddError] = useState(false)
    const [user2, loading2, error2] = useAuthState(auth)

    const router = useRouter()

    useEffect(() => {
        if (user || user2) router.push('/')
    }, [user, loading, user2, loading2])

    const usernameField = useRef(null)
    const emailField = useRef(null)
    const passwordField = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        const [username, email, password] = [
            usernameField.current.value,
            emailField.current.value,
            passwordField.current.value,
        ]

        if (!(username && email && password)) {
            // TODO: add error, empty field
            return
        }

        createUserWithEmailAndPassword(emailField.current.value, passwordField.current.value).then(
            userData => {
                if (!loading && !error)
                    updateProfile({ displayName: username }).then(() => {
                        addUserToDatabase(userData.user)
                    })
            }
        )
    }

    const addUserToDatabase = user => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${user.uid}`, {
            method: 'PUT',
        })
            .then(res => {
                if (!res.ok) setDbAddError(true)
                return res.json()
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                setDbAddError(true)
            })
    }

    // Firebase error codes
    // auth/email-already-exists - Email already exists
    // auth/invalid-email - email is invalid
    // auth/weak-password - (min 6 characters)

    // TODO: add errors for creating user (error), updating user (updateError), adding to database (dbAddError)

    return (
        <div className={stylesCommon.wrapper}>
            <div className={stylesCommon.content}>
                <div className={stylesCommon.authBox}>
                    <h2>Rejestracja</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='username'>Nazwa użytkownika</label>
                            <input type={'text'} id={'username'} ref={usernameField} />
                        </div>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='email'>Adres e-mail</label>
                            <input type={'email'} id={'email'} ref={emailField} />
                        </div>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='password'>Hasło</label>
                            <input type={'password'} id={'password'} ref={passwordField} />
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
