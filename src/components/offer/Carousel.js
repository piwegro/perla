'use client'

import styles from '../../styles/pages/Offer.module.scss'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { useState } from 'react'

/** Carousel component for offer page */
const Carousel = props => {
    const { offerData } = props // Get offer data from props

    const [currentImage, setCurrentImage] = useState(0)

    /** Sets carousel image to the next one */
    const nextImage = () => {
        const imageCount = offerData.images.length

        if (currentImage + 1 > imageCount - 1) setCurrentImage(0)
        else {
            setCurrentImage(v => v + 1)
        }
    }

    /** Sets carousel image to the previous one */
    const previousImage = () => {
        const imageCount = offerData.images.length

        if (currentImage - 1 < 0) setCurrentImage(imageCount - 1)
        else {
            setCurrentImage(v => v - 1)
        }
    }

    /** Set carousel image to the one chosen by user */
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
                        offerData?.images[currentImage]?.original ??
                        'https://via.placeholder.com/1920x1080'
                    }`}
                    alt={`Zdjęcie ${currentImage}`}
                    className={styles.mainImage}
                />
            </div>
            <div className={styles.previews}>
                {offerData.images.map((image, i) => {
                    return (
                        <img
                            src={`${image?.preview ?? 'https://via.placeholder.com/1920x1080'}`}
                            alt={'Miniaturka'}
                            className={styles.previewImage}
                            key={image.image_id}
                            data-active={currentImage === i}
                            onClick={() => {
                                choseImage(i)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
