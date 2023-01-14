'use client'

import styles from '../../styles/pages/user/Reviews.module.scss'
import Button from '../common/Button'
import { useRef, useState } from 'react'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import fetch from 'node-fetch'
import { useRouter } from 'next/navigation'
import Notification from '../auth/Notification'

const reviewForm = ({ targetUser }) => {
    // Initialize firebase
    initFirebase()
    // Get auth instance
    const auth = getAuth()
    const [user, loading] = useAuthState(auth)
    const reviewField = useRef()

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const router = useRouter()

    const handleSubmit = e => {
        e.preventDefault()

        setSuccess(false)
        setError(false)

        if (!reviewField.current.value) {
            setError(true)
            return
        }

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reviewee_id: targetUser,
                review: reviewField.current.value,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(data => {
                if (data?.error) {
                    setError(true)
                    throw new Error(data.error)
                }

                setError(false)
                setSuccess(true)

                router.push(`/user/${targetUser}/reviews`)
            })
            .catch(e => {
                setError(true)
            })
    }

    return (
        <div className={styles.addBox}>
            {error ? (
                <Notification type={'error'}>Wystąpił błąd podczas dodawania opinii.</Notification>
            ) : null}

            {success ? (
                <Notification type={'success'}>
                    Dodano opinię o użytkowniku. Za chwilę nastąpi przekierowanie.
                </Notification>
            ) : null}
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor={'description'}>Treść opinii</label>
                    <textarea id={'description'} ref={reviewField} required={true} />
                </div>
                <Button type={'submit'} element={'button'} disabled={loading}>
                    Dodaj opinię
                </Button>
            </form>
        </div>
    )
}

export default reviewForm
