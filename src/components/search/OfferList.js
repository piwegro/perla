'use client'
import OfferListing from './OfferListing'
import styles from '../../styles/search/OfferList.module.scss'

/** Component displaying list of offers from provided list */
const OfferList = props => {
    // Add placeholder if there is no offers
    const offers = props?.offers ?? [
        {
            created_at: '2022-10-31T18:32:19',
            description: 'Brak ofert',
            images: [
                {
                    image_id: 1,
                    original:
                        'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_original.jpg',
                    preview:
                        'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_preview.jpg',
                    thumbnail:
                        'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_thumbnail.jpg',
                },
            ],
            offer_id: 0,
            price: [
                {
                    amount: 0,
                    currency: {
                        name: '-',
                        symbol: '-',
                        value: 1.0,
                    },
                },
            ],
            title: '',
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
