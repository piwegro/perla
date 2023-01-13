import Button from '../common/Button'
import styles from '../../styles/pages/user/OpinionsBox.module.scss'

/** User opinions */
const Opinions = async ({ id }) => {
    return (
        <div className={styles.opinions}>
            <Button element={'anchor'} href={`/user/${id}/reviews`} type={'light'}>
                Lista opinii
            </Button>
            <Button element={'anchor'} href={`/user/${id}/reviews/add`}>
                Dodaj opinię o użytkowniku
            </Button>
        </div>
    )
}

export default Opinions
