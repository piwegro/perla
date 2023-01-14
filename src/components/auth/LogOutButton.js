'use client'

import { getAuth, signOut } from 'firebase/auth'
import { initFirebase } from '../../utils/firebase'
import Button from '../common/Button'
import { useRouter } from 'next/navigation'

/** Logout button component */
const LogOutButton = () => {
    // Initialize Firebase
    initFirebase()
    // Get auth instance
    const auth = getAuth()

    // Get router
    const router = useRouter()

    /** Logs out the user */
    const logOut = () => {
        // Sign out
        signOut(auth).then(() => {
            router.push('/user/auth/signin')
        })
    }

    return (
        <Button element={'button'} onClick={logOut}>
            Wyloguj się
        </Button>
    )
}

export default LogOutButton
