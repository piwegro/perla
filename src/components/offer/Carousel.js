'use client'

import styles from '../../styles/pages/Offer.module.scss'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { useState } from 'react'

const Carousel = props => {
    const { offerData } = props

    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = () => {
        const imageCount = offerData.images.length

        if (currentImage + 1 > imageCount - 1) setCurrentImage(0)
        else {
            setCurrentImage(v => v + 1)
        }
    }

    const previousImage = () => {
        const imageCount = offerData.images.length

        if (currentImage - 1 < 0) setCurrentImage(imageCount - 1)
        else {
            setCurrentImage(v => v - 1)
        }
    }

    const choseImage = id => {
        setCurrentImage(id)
    }

    return (
        <div className={styles.images}>
            <div className={styles.mainImageBox}>
                <div className={styles.controls}>
                    <button className={styles.controlButton}>
                        <ChevronLeft size={30} onClick={previousImage} />
                    </button>
                    <button className={styles.controlButton} onClick={nextImage}>
                        <ChevronRight size={30} />
                    </button>
                </div>
                <img
                    src={`${
                        offerData?.images[currentImage].original ??
                        'https://via.placeholder.com/1920x1080'
                    }`}
                    alt={`Zdjęcie ${currentImage}`}
                    className={styles.mainImage}
                />
            </div>
            <div className={styles.previews}>
                {offerData.images.map(image => {
                    return (
                        <img
                            src={`${image.preview ?? 'https://via.placeholder.com/1920x1080'}`}
                            alt={'Miniaturka'}
                            className={styles.previewImage}
                            key={image.image_id}
                            data-active={currentImage === image.image_id}
                            onClick={() => {
                                choseImage(image.image_id)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
