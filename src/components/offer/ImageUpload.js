'use client'

import styles from '../../styles/pages/OfferAdd.module.scss'
import { useState } from 'react'

/** Component for uploading user's photos */
const UploadBox = ({ id, passData }) => {
    const [imageURL, setImageURL] = useState('')

    // Handles file read
    const handleFileRead = e => {
        const content = e.target.result
        setImageURL(content)
        passData(id, content) // passes data to the form
    }

    /** Handles event when user picks image */
    const handleFileChosen = e => {
        const fileReader = new window.FileReader()

        const file = e.target.files[0]
        try {
            // Reads file and invokes handleFileRead when done
            fileReader.onloadend = handleFileRead
            fileReader.readAsDataURL(file)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <label htmlFor={`up-${id}`} key={id}>
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
