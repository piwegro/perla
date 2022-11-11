import Button from '../common/Button'
import styles from '../../styles/search/OfferListing.module.scss'

function OfferListing(props) {
    let { data } = props

    return (
        <div className={styles.offerListing} {...props}>
            <div className={styles.offerDesc}>
                <img src={data?.photo} alt='' />
                <div>
                    <b>{data?.name}</b>
                    <span>{data?.description}</span>
                </div>
            </div>
            <div className={styles.offerRight}>
                <div className={styles.price}>{data?.price === '0' ? 'Za darmo' : '?'}</div>
                <Button element={'anchor'} href={`/offer/${data?.id}`}>
                    Zobacz ogłoszenie
                </Button>
            </div>
        </div>
    )
}

export default OfferListing
