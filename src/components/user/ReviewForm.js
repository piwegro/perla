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
    // Get user
    const [user, loading] = useAuthState(auth)
    // Set ref
    const reviewField = useRef()

    // Set states
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // Get router
    const router = useRouter()

    // Handle form submit
    const handleSubmit = e => {
        e.preventDefault() // Prevent default behaviour

        // reset states
        setSuccess(false)
        setError(false)

        if (!reviewField.current.value) {
            // Set error state if review field is empty
            setError(true)
            return
        }

        // Send review to the server
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
                    // Set error state if server returns error
                    setError(true)
                    throw new Error(data.error)
                }

                // Set success state
                setError(false)
                setSuccess(true)

                router.push(`/user/${targetUser}/reviews`)
            })
            .catch(e => {
                // Set error state if error occurs
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
