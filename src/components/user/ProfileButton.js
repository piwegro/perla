'use client'
import Button from '../common/Button'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

/** Button redirecting to public user's profile */
const ProfileButton = () => {
    // Initialize Firebase
    initFirebase()
    // Get auth
    const auth = getAuth()
    // Get user
    const [user] = useAuthState(auth)

    return (
        <>
            {user ? (
                <Button element={'anchor'} href={`/user/${user.uid}`} type={'light'}>
                    Zobacz swój profil
                </Button>
            ) : null}
        </>
    )
}

export default ProfileButton
