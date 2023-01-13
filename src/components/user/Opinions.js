import Button from '../common/Button'
import styles from '../../styles/pages/user/OpinionsBox.module.scss'

/** User opinions */
const Opinions = ({ id }) => {
    return (
        <div className={styles.opinions}>
            <span className={styles}>Brak opinii o użytkowniku.</span>
            <Button element={'anchor'} href={`/user/${id}/opinions`}>
                Dodaj opinię o użytkowniku
            </Button>
        </div>
    )
}

export default Opinions
