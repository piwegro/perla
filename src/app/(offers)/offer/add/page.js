import Hero from '../../../../components/common/Hero'
import { container } from '../../../../styles/common/Grid.module.scss'
import styles from '../../../../styles/pages/OfferAdd.module.scss'
import Button from '../../../../components/common/Button'

const Page = ({ params }) => {
    return (
        <>
            <Hero center={true}>
                <h2>Dodaj ogłoszenie</h2>
            </Hero>
            <div className={container}>
                <div className={styles.box}>
                    <form action=''>
                        <div className={styles.formGroup}>
                            <label htmlFor={'title'}>Tytuł</label>
                            <input type={'text'} id={'title'} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor={'description'}>Opis ogłoszenia</label>
                            <textarea id={'description'} />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Dodaj zdjęcia</label>
                            <div className={styles.uploadBoxList}>
                                {[...Array(4).keys()].map(i => UploadBox(i))}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor='location'>Lokalizacja ogłoszenia</label>
                            <input type={'text'} id={'location'} />
                        </div>
                        <Button type={'submit'} element={'button'}>
                            Dodaj ogłoszenie
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

const UploadBox = id => {
    return (
        <label htmlFor={`up-${id}`}>
            <div className={styles.uploadBox}>
                <input type='file' id={`up-${id}`} />
                TEst
            </div>
        </label>
    )
}

export default Page
