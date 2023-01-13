'use client'
import OfferListing from './OfferListing'
import styles from '../../styles/search/OfferList.module.scss'

/** Component displaying list of offers from provided list */
const OfferList = props => {
    // Add placeholder if there is no offers
    const offers = props?.offers ?? [
        {
            offer_id: '0',
            title: 'Brak ofert',
            description: '',
            photo: 'https://place-hold.it/96',
            price: '0',
            currency: 'beer',
        },
    ]
    return (
        <div className={styles.offerList}>
            {offers.length < 1 ? <h3>Nie znaleziono ogłoszeń</h3> : null}
            {offers.map(offer => {
                return <OfferListing data={offer} key={offer.offer_id} type={props.type} />
            })}
        </div>
    )
}

export default OfferList
