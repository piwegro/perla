'use client'
import Button from '../../common/Button'
import { messageInput } from '../../../styles/pages/user/Messages.module.scss'
import { useRef } from 'react'

/** Message input component for messages page */
const MessageInput = () => {
    const handleSubmit = e => {
        e.preventDefault()
        //    TODO: wysyłanie requesta do API
    }

    const messageField = useRef(null)

    return (
        <form className={messageInput} onSubmit={handleSubmit}>
            <input type='text' ref={messageField} />
            <Button element={'button'}>Wyślij</Button>
        </form>
    )
}

export default MessageInput
