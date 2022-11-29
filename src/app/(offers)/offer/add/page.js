'use client'

import Hero from '../../../../components/common/Hero'
import { container } from '../../../../styles/common/Grid.module.scss'
import styles from '../../../../styles/pages/OfferAdd.module.scss'
import Button from '../../../../components/common/Button'
import UploadBox from '../../../../components/offer/ImageUpload'

const Page = ({ params }) => {
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log([...data.entries()])
    }
    return (
        <>
            <Hero center={true}>
                <h2>Dodaj ogłoszenie</h2>
            </Hero>
            <div className={container}>
                <div className={styles.box}>
                    <form action='' onSubmit={handleSubmit}>
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
                                {[...Array(4).keys()].map(i => (
                                    <UploadBox id={i} />
                                ))}
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

export default Page
