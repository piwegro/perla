'use client'

import { getAuth, signOut } from 'firebase/auth'
import { initFirebase } from '../../utils/firebase'
import Button from '../common/Button'
import { useRouter } from 'next/navigation'

const LogOutButton = () => {
    initFirebase()
    const auth = getAuth()

    const router = useRouter()

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
