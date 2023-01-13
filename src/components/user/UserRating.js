import { Star } from 'tabler-icons-react'
import { userRating, starFull, starHalf, gradient } from '../../styles/pages/Offer.module.scss'

// TODO: dokończyć/sprawdzić czy działa
const UserRating = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const halfStar = Math.ceil(rating % 1)

    const stars = []

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <div className={starFull} key={`f-${i}`}>
                <Star color={'#ffe229'} />
            </div>
        )
    }

    if (halfStar) {
        stars.push(
            <div className={starHalf} key={'half'}>
                <Star color={'#ffe229'} />
            </div>
        )
    }

    for (let i = 0; i < 5 - (fullStars + halfStar); i++) {
        stars.push(
            <div key={`ns-${i}`}>
                <Star color={'#ffe229'} />
            </div>
        )
    }

    return (
        <div className={userRating}>
            <svg aria-hidden={'true'} focusable={'false'} className={gradient}>
                <linearGradient id={'half-gradient'} x2={'1'} y2={'0'}>
                    <stop offset={'0%'} stopColor={'#ffe229'} />
                    <stop offset={`${(rating % 1) * 100}%`} stopColor={'#ffe229'} />
                    <stop offset={`${(rating % 1) * 100 + 1}%`} stopColor={'#ffffff'} />
                    <stop offset={'100%'} stopColor={'#ffffff'} />
                </linearGradient>
            </svg>
            {stars.map(el => el)}
        </div>
    )
}

export default UserRating
