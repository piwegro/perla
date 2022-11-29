import Button from '../common/Button'
import styles from '../../styles/search/OfferListing.module.scss'

const OfferListing = props => {
    let { data } = props

    return (
        <div className={styles.offerListing} {...props}>
            <div className={styles.offerDesc}>
                <img src={data?.images[0].thumbnail ?? 'https://place-hold.it/96'} alt='' />
                <div>
                    <b>{data?.title ?? '-'}</b>
                    <span>{data?.description ?? '-'}</span>
                </div>
            </div>
            <div className={styles.offerRight}>
                <div className={styles.price}>
                    {data?.price?.amount ?? '-'} {data?.price?.currency?.symbol}
                </div>
                <Button element={'anchor'} href={`/offer/${data?.id ?? 1}`}>
                    Zobacz ogłoszenie
                </Button>
            </div>
        </div>
    )
}

export default OfferListing
