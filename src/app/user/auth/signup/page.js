'use client'

import React, { useRef } from 'react'
import { initFirebase } from '../../../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import Button from '../../../../components/common/Button'
import stylesCommon from '../../../../styles/pages/auth/AuthCommon.module.scss'
import Link from 'next/link'

function Page(props) {
    initFirebase()
    const auth = getAuth()
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth)

    const emailField = useRef(null)
    const passwordField = useRef(null)

    const handleSubmit = () => {
        console.log(emailField.current.value, passwordField.current.value)
        createUserWithEmailAndPassword(emailField.current.value, passwordField.current.value)
    }

    // Firebase error codes
    // auth/email-already-exists - Email already exists
    // auth/invalid-email - email is invalid
    // auth/weak-password - (min 6 characters)

    return (
        <div className={stylesCommon.wrapper}>
            <div className={stylesCommon.content}>
                <div className={stylesCommon.authBox}>
                    <h2>Rejestracja</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
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
