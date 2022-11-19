import OfferListing from './OfferListing'
import styles from '../../styles/search/OfferList.module.scss'

const OfferList = offers => {
    offers = offers?.offers ?? [
        {
            id: '0',
            title: 'Brak ofert',
            description: '',
            photo: 'https://place-hold.it/96',
            price: '0',
            currency: 'beer',
        },
    ]
    return (
        <div className={styles.offerList}>
            {offers.map(offer => {
                return <OfferListing data={offer} key={offer.id} />
            })}
        </div>
    )
}

export default OfferList
