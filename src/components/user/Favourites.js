'use client'

import { useEffect, useState } from 'react'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import OfferList from '../search/OfferList'

/** User's favourite offers */
const Favourites = () => {
    // Initialize Firebase
    initFirebase()
    const auth = getAuth()
    const [user] = useAuthState(auth)
    const [offers, setOffers] = useState([])

    // Fetch user's offers from API
    useEffect(() => {
        if (user)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    if (!res.ok) {
                        console.log('API ERROR', res.statusText)
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setOffers(data)
                })
    }, [user])

    return <>{offers.length > 0 ? <OfferList offers={offers} type={'user'} /> : null}</>
}

export default Favourites
