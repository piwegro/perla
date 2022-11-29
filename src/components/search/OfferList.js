import OfferListing from './OfferListing'
import styles from '../../styles/search/OfferList.module.scss'

const OfferList = offers => {
    offers = offers?.offers ?? [
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
                return <OfferListing data={offer} key={offer.offer_id} />
            })}
        </div>
    )
}

export default OfferList
