import { Suspense } from 'react'
import OfferList from '../search/OfferList'

const getUserOffers = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}/offers`)

        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    } catch (e) {
        return []
    }
}

const UserOffers = async ({ id }) => {
    const userOffers = await getUserOffers(id)

    return (
        <>
            <Suspense fallback={<div>Ładowanie ogłoszeń użytkownika...</div>}>
                <OfferList offers={userOffers} />
            </Suspense>
        </>
    )
}

export default UserOffers
