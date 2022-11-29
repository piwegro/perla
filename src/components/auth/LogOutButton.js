'use client'

import { getAuth, signOut } from 'firebase/auth'
import { initFirebase } from '../../utils/firebase'
import Button from '../common/Button'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

const LogOutButton = () => {
    initFirebase()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)

    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) router.push('/user/auth/signin')
    }, [user, loading, error])

    const logOut = () => {
        signOut(auth)
        router.push('/user/auth/signin')
    }

    return (
        <Button element={'button'} onClick={logOut}>
            Wyloguj się
        </Button>
    )
}

export default LogOutButton
