'use client'

import React, { useEffect, useRef } from 'react'
import { initFirebase } from '../../../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import stylesCommon from '../../../../styles/pages/auth/AuthCommon.module.scss'
import Button from '../../../../components/common/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Notification from '../../../../components/auth/Notification'
import convertFirebaseError from '../../../../utils/firebaseErrorConverter'

function Page() {
    // Initialize Firebase
    initFirebase()
    // Get auth instance
    const auth = getAuth()
    // Create states
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [user2, loading2] = useAuthState(auth)

    // Create refs
    const emailField = useRef(null)
    const passwordField = useRef(null)

    // Get router
    const router = useRouter()

    /** Handles form submit */
    const handleSubmit = e => {
        e.preventDefault() // prevent default behaviour
        signInWithEmailAndPassword(emailField.current.value, passwordField.current.value) // sign in
    }

    /** Redirects to home page if user is logged in */
    useEffect(() => {
        if (!loading2 && user2) router.push('/')
    }, [user2, loading2, user, loading])

    return (
        <div className={stylesCommon.wrapper}>
            <div className={stylesCommon.content}>
                <div className={stylesCommon.authBox}>
                    <h2>Logowanie</h2>
                    {error ? (
                        <Notification type={'error'}>{convertFirebaseError(error)}</Notification>
                    ) : null}

                    <form onSubmit={handleSubmit}>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='email'>Adres e-mail</label>
                            <input type={'email'} id={'email'} ref={emailField} />
                        </div>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='password'>Hasło</label>
                            <input type={'password'} id={'password'} ref={passwordField} />
                        </div>
                        <Link
                            href={'/user/auth/passwordreset'}
                            className={stylesCommon.forgotPassword}>
                            Nie pamiętam hasła
                        </Link>
                        <Button element={'button'} type={'submit'}>
                            Zaloguj się
                        </Button>
                    </form>
                    <p className={stylesCommon.bottomText}>
                        Nie masz konta? <Link href={'/user/auth/signup'}>Zarejestruj się!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page
