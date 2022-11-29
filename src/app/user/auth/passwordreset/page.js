'use client'

import React, { useRef, useState } from 'react'
import { initFirebase } from '../../../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import stylesCommon from '../../../../styles/pages/auth/AuthCommon.module.scss'
import Button from '../../../../components/common/Button'
import Notification from '../../../../components/auth/Notification'
import convertFirebaseError from '../../../../utils/firebaseErrorConverter'

function Page(props) {
    initFirebase()
    const auth = getAuth()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
    const [success, setSuccess] = useState(false)

    const emailField = useRef(null)

    const handleSubmit = async () => {
        const response = await sendPasswordResetEmail(emailField.current.value)
        if (response) setSuccess(true)
    }

    // Firebase error codes
    // auth/user-not-found
    // auth/invalid-email

    return (
        <div className={stylesCommon.wrapper}>
            <div className={stylesCommon.content}>
                <div className={stylesCommon.authBox}>
                    <h2>Resetowanie hasła</h2>
                    {success ? (
                        <Notification type={'success'}>Wysłano link do zresetowania hasła.</Notification>
                    ) : null}
                    {error ? (
                        <Notification type={'error'}>{convertFirebaseError(error)}</Notification>
                    ) : null}
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                        <div className={stylesCommon.formGroup}>
                            <label htmlFor='email'>Adres e-mail</label>
                            <input type={'email'} id={'email'} ref={emailField} />
                        </div>
                        <Button element={'button'} type={'submit'}>
                            Zresetuj hasło
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page
