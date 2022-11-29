'use client'

import styles from '../../styles/pages/OfferAdd.module.scss'
import UploadBox from './ImageUpload'
import Button from '../common/Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initFirebase } from '../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import fetch from 'node-fetch'
import Notification from '../auth/Notification'
import convertFirebaseError from '../../utils/firebaseErrorConverter'

const AddForm = ({ currencies }) => {
    initFirebase()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()

    const titleField = useRef(null)
    const descriptionField = useRef(null)
    const priceField = useRef(null)
    const currencyField = useRef(null)
    const locationField = useRef(null)
    // TODO: photos

    const [addError, setAddError] = useState(false)
    const [fieldsError, setFieldsError] = useState(false)

    useEffect(() => {
        if (error) return

        if (!loading && !user) router.push('/user/auth/signin')
    }, [loading])

    const getValueFromRef = ref => ref.current.value

    const handleSubmit = e => {
        e.preventDefault()
        if (
            !(
                getValueFromRef(titleField) &&
                getValueFromRef(descriptionField) &&
                getValueFromRef(priceField) &&
                getValueFromRef(currencyField) &&
                getValueFromRef(locationField)
            )
        ) {
            setFieldsError(true)
        }
        addOfferToDB()
    }

    const addOfferToDB = () => {
        const postData = {
            seller_id: user.uid,
            currency: getValueFromRef(currencyField),
            price: parseInt(getValueFromRef(priceField)),
            title: getValueFromRef(titleField),
            description: getValueFromRef(descriptionField),
            location: getValueFromRef(locationField),
            images: [
                {
                    image_id: 1,
                    original: 'https://cdn.piwegro.lol/images/13/original.png',
                    preview: 'https://cdn.piwegro.lol/images/13/preview.png',
                    thumbnail: 'https://cdn.piwegro.lol/images/13/thumbnail.png',
                },
            ],
        }

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/offer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(data => {
                if (data?.error) {
                    setAddError(true)
                    throw new Error(data.error)
                }

                router.push(`/offer/${data.offer_id}`)
            })
            .catch(e => {
                setAddError(true)
            })
    }

    return (
        <form action='' onSubmit={handleSubmit}>
            {addError ? (
                <Notification type={'error'}>
                    Wystąpił błąd podczas dodawania ogłoszenia.
                </Notification>
            ) : null}
            {fieldsError ? (
                <Notification type={'error'}>
                    Wypełnij wszystkie pola przed utworzeniem ogłoszenia.
                </Notification>
            ) : null}
            <div className={styles.formGroup}>
                <label htmlFor={'title'}>Tytuł</label>
                <input type={'text'} id={'title'} ref={titleField} required={true} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor={'description'}>Opis ogłoszenia</label>
                <textarea id={'description'} ref={descriptionField} required={true} />
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
                <input type={'text'} id={'location'} ref={locationField} required={true} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='price'>Cena</label>
                <input type={'number'} id={'price'} ref={priceField} required={true} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='currency'>Waluta</label>
                <select id={'currency'} disabled={!currencies} ref={currencyField}>
                    {!currencies ? <option value={'none'}>Trwa ładowanie walut...</option> : null}
                    {currencies
                        ? currencies.map(currency => (
                              <option value={currency.symbol} key={currency.symbol}>
                                  {currency.name}
                              </option>
                          ))
                        : null}
                </select>
            </div>

            <Button type={'submit'} element={'button'} disabled={loading}>
                Dodaj ogłoszenie
            </Button>
        </form>
    )
}

export default AddForm
