'use client'
import { Heart } from 'tabler-icons-react'
import { useState } from 'react'
import { favouriteButton, favouriteButtonAdded } from '../../styles/pages/Offer.module.scss'

const FavouriteButton = () => {
    const [isFavourite, setIsFavourite] = useState(false)

    const toggle = () => {
        setIsFavourite(p => {
            return !p
        })
    }

    return (
        <div className={`${isFavourite ? favouriteButtonAdded : favouriteButton}`} onClick={toggle}>
            <Heart />
        </div>
    )
}

export default FavouriteButton
