'use client'
import { Heart } from 'tabler-icons-react'
import { useEffect, useState } from 'react'
import { favouriteButton, favouriteButtonAdded } from '../../styles/pages/Offer.module.scss'
import fetch from 'node-fetch'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

/** Favourite button component - adds offer to user's favourites */
const FavouriteButton = ({ offerID }) => {
    // Initialize Firebase
    initFirebase()
    const auth = getAuth()
    // Get the user
    const [user] = useAuthState(auth)
    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        if (user) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error()
                    }
                    return res.json()
                })
                .then(data => {
                    for (let offer of data) {
                        console.log(offer.offer_id, offerID)
                        console.log(offer)
                        if (offer.offer_id == offerID) {
                            setIsFavourite(true)
                            return
                        }
                    }
                })
                .catch(e => {
                    console.error(e)
                })
        }
    }, [user])

    /** Toggles favourite button */
    const toggle = async () => {
        if (user)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${offerID}`, {
                method: isFavourite ? 'DELETE' : 'PUT',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error()
                    }
                    return res.json()
                })
                .then(data => {
                    if (data)
                        setIsFavourite(p => {
                            return !p
                        })
                })
                .catch(e => {
                    console.error(e)
                })
    }

    return user ? (
        <div className={`${isFavourite ? favouriteButtonAdded : favouriteButton}`} onClick={toggle}>
            <Heart />
        </div>
    ) : null
}

export default FavouriteButton
