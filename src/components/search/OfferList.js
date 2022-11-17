import OfferListing from './OfferListing'
import styles from '../../styles/search/OfferList.module.scss'

const OfferList = () => {
    const offers = [
        // TODO: This is only a placeholder. Final version should get items from props
        {
            id: '123',
            name: 'Czajnik elektryczny',
            description: 'Oddam czajnik',
            photo: 'https://place-hold.it/96',
            price: '0',
            currency: 'beer',
        },
        {
            id: '123',
            name: 'Czajnik elektryczny',
            description: 'Oddam czajnik',
            photo: 'https://place-hold.it/96',
            price: '0',
            currency: 'beer',
        },
        {
            id: '123',
            name: 'Czajnik elektryczny',
            description: 'Oddam czajnik',
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
