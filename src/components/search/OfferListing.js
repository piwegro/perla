import Button from '../common/Button'
import styles from '../../styles/search/OfferListing.module.scss'

/** Offer listing component */
const OfferListing = props => {
    let { data, type } = props // get props

    return (
        <div className={type === 'user' ? styles.userOfferListing : styles.offerListing} {...props}>
            <div className={styles.offerDesc}>
                <img src={data?.images[0]?.thumbnail ?? 'https://place-hold.it/96'} alt='' />
                <div>
                    <b>{data?.title ?? '-'}</b>
                    <span>
                        {data?.description.substring(0, 60) +
                            (data?.description.length > 60 ? '...' : '') ?? '-'}
                    </span>
                </div>
            </div>
            <div className={styles.offerRight}>
                <div className={styles.price}>
                    {data?.price[0]?.amount ?? '-'} {data?.price[0]?.currency?.symbol}
                </div>
                <Button element={'anchor'} href={`/offer/${data?.offer_id ?? 1}`}>
                    Zobacz ogłoszenie
                </Button>
            </div>
        </div>
    )
}

export default OfferListing
