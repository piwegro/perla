'use client'
import { Heart } from 'tabler-icons-react'
import { useState } from 'react'
import { favouriteButton, favouriteButtonAdded } from '../../styles/pages/Offer.module.scss'

/** Favourite button component - adds offer to user's favourites */
const FavouriteButton = () => {
    const [isFavourite, setIsFavourite] = useState(false)

    /** Toggles favourite button */
    const toggle = () => {
        setIsFavourite(p => {
            return !p
        })
        //    TODO: wysyłanie requesta do API, na razie nie ma endpointa
    }

    return (
        <div className={`${isFavourite ? favouriteButtonAdded : favouriteButton}`} onClick={toggle}>
            <Heart />
        </div>
    )
}

export default FavouriteButton
