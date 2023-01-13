'use client'

import Button from '../common/Button'
import styles from '../../styles/search/SearchBox.module.scss'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

/** SearchBox component */
const SearchBox = () => {
    const inputEl = useRef()
    const router = useRouter()

    // Handles form submit
    const handleSubmit = e => {
        e.preventDefault()

        if (inputEl.current.value.length > 0)
            router.push(`/search/${encodeURI(inputEl.current.value)}`) // Redirect to search page with query
    }

    // Focus on input field when user clicks on the search box
    const handleBoxClick = () => {
        inputEl.current.focus()
    }

    return (
        <div className={styles.searchBox} onClick={handleBoxClick}>
            <form>
                <input ref={inputEl} type='text' placeholder={'Czego szukasz?'} />
                <Button element={'button'} onClick={handleSubmit} type={'submit'}>
                    Szukaj!
                </Button>
            </form>
        </div>
    )
}

export default SearchBox
