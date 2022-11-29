'use client'

import styles from '../../styles/pages/OfferAdd.module.scss'
import { useState } from 'react'

const UploadBox = ({ id }) => {
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const handleFileRead = e => {
        const content = e.target.result
        setImageURL(content)
        console.log(content)
        // TODO: fetch do API
        // TODO: zmiana z readera na wysyłanie postem?
    }

    const handleFileChosen = e => {
        const fileReader = new window.FileReader()

        const file = e.target.files[0]
        try {
            fileReader.onloadend = handleFileRead
            fileReader.readAsDataURL(file)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <label htmlFor={`up-${id}`}>
            <div className={styles.uploadBox}>
                <input
                    type={'file'}
                    accept={'image/jpeg, image/png, image/heic'}
                    id={`up-${id}`}
                    onChange={handleFileChosen}
                />
                {imageURL ? (
                    <img src={imageURL} alt={'photo'} />
                ) : (
                    <>
                        <span>Dodaj zdjęcie</span>
                        <small>Obsługiwane formaty: jpeg, png</small>
                    </>
                )}
            </div>
        </label>
    )
}

export default UploadBox
