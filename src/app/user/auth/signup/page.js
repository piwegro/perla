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
    initFirebase()
    const auth = getAuth()
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [dbAddError, setDbAddError] = useState(false)
    const [user2, loading2, error2] = useAuthState(auth)
    const [fieldsError, setFieldsError] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (error || error2 || updateError || dbAddError) return

        if (!loading && (user || user2)) router.push('/')
    }, [loading, loading2])

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
            setFieldsError(true)
            return
        } else {
            setFieldsError(false)
        }

        createUserWithEmailAndPassword(emailField.current.value, passwordField.current.value).then(
            userData => {
                if (userData)
                    updateProfile({ displayName: username }).then(() => {
                        addUserToDatabase(userData.user)
                    })
            }
        )
    }

    const addUserToDatabase = user => {
        console.log('Adding user', user)
        console.log('API', `${process.env.NEXT_PUBLIC_API_URL}/user/${user.uid}`)

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
            .then(data => {
                console.log('API RESP', data)
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
                            Wyst??pi?? b????d podczas aktualizowania danych u??ytkownika. Skontaktuj si??
                            z administratorem strony.
                        </Notification>
                    ) : null}
                    {dbAddError ? (
                        <Notification type={'error'}>
                            Wyst??pi?? b????d podczas dodawania u??ytkownika do bazy danych. Skontaktuj
                            si?? z administratorem strony.
                        </Notification>
                    ) : null}
                    {fieldsError ? (
                        <Notification type={'error'}>
                            Do za??o??enia konta konieczne jest wype??nienie wszystkich p??l.
                        </Notification>
                    ) : null}
                    <form onSubmit={handleSubmit}>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='username'>Nazwa u??ytkownika</label>
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
                            <label htmlFor='password'>Has??o</label>
                            <input
                                type={'password'}
                                id={'password'}
                                ref={passwordField}
                                required={true}
                            />
                        </div>
                        <Button element={'button'} type={'submit'}>
                            Zarejestruj si??
                        </Button>
                    </form>
                    <p className={stylesCommon.bottomText}>
                        Masz ju?? konto? <Link href={'/user/auth/signin'}>Zaloguj si??!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page
