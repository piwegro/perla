'use client'
import Button from '../../common/Button'
import { messageInput } from '../../../styles/pages/user/Messages.module.scss'
import { useRef } from 'react'
const MessageInput = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(messageField.current.value)
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
