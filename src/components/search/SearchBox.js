'use client'

import Button from '../common/Button'
import styles from '../../styles/search/SearchBox.module.scss'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
    const inputEl = useRef()
    const router = useRouter()

    const handleSubmit = () => {
        if (inputEl.current.value.length > 0)
            router.push(`/search/${encodeURI(inputEl.current.value)}`)
    }

    const handleBoxClick = () => {
        inputEl.current.focus()
    }

    return (
        <div className={styles.searchBox} onClick={handleBoxClick}>
            <input ref={inputEl} type='text' placeholder={'Czego szukasz?'} />
            <Button element={'button'} onClick={handleSubmit}>
                Szukaj!
            </Button>
        </div>
    )
}

export default SearchBox
