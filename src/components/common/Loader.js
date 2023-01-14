'use client'

import styles from '../../styles/common/Loader.module.scss'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** Loader component */
const Loader = () => {
    // Initialize Firebase
    initFirebase()
    // Get auth instance
    const auth = getAuth()
    // Set states
    const [user, loading] = useAuthState(auth)

    // Get router
    const router = useRouter()

    // Redirect to home page if user is not logged in
    useEffect(() => {
        if (!loading && !user) {
            router.push('/user/auth/signin')
        }
    }, [user, loading])

    return loading ? (
        <div className={styles.loader}>
            <div>
                <div className={styles.spinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>Ładowanie...</span>
            </div>
        </div>
    ) : null
}

export default Loader
