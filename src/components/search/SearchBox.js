'use client'

import Button from '../common/Button'
import styles from '../../styles/search/SearchBox.module.scss'
import { useRef } from 'react'

const SearchBox = () => {
    const inputEl = useRef()

    const handleBoxClick = () => {
        inputEl.current.focus()
    }

    return (
        <div className={styles.searchBox} onClick={handleBoxClick}>
            <input ref={inputEl} type='text' placeholder={'Czego szukasz?'} />
            <Button element={'button'}>Szukaj!</Button>
        </div>
    )
}

export default SearchBox
