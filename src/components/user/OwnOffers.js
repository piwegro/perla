'use client'

import { useEffect, useState } from 'react'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import OfferList from '../search/OfferList'

/** User's own offers */
const OwnOffers = () => {
    // Initialize Firebase
    initFirebase()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)
    const [offers, setOffers] = useState([])

    // Fetch user's offers from API
    useEffect(() => {
        if (user)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${user.uid}/offers`)
                .then(res => {
                    if (!res.ok) {
                        console.log('API ERROR', res.statusText)
                    }
                    return res.json()
                })
                .then(data => {
                    setOffers(data)
                })
    }, [user])

    return <>{offers ? <OfferList offers={offers} type={'user'} /> : null}</>
}

export default OwnOffers
