import Button from '../common/Button'
import styles from '../../styles/search/OfferListing.module.scss'

const OfferListing = props => {
    let { data } = props

    // TODO: Make the component responsive

    return (
        <div className={styles.offerListing} {...props}>
            <div className={styles.offerDesc}>
                <img src={data?.photo ?? 'https://place-hold.it/96'} alt='' />
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
