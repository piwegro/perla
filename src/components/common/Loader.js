'use client'

import styles from '../../styles/common/Loader.module.scss'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Loader = () => {
    initFirebase()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)

    const router = useRouter()

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
