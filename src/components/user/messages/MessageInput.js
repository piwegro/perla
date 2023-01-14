'use client'
import Button from '../../common/Button'
import { messageInput } from '../../../styles/pages/user/Messages.module.scss'
import { useRef } from 'react'
import fetch from 'node-fetch'

/** Message input component for messages page */
const MessageInput = ({ user, receiver, refresh }) => {
    const handleSubmit = e => {
        e.preventDefault() // Prevent default behaviour
        // Send message to the server
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                receiver_id: receiver,
                content: messageField.current.value,
            }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error()
                }
                refresh()
                messageField.current.value = ''
                return res.json()
            })
            .catch(e => {
                console.error(e)
            })
    }

    const messageField = useRef(null) // Set ref

    return (
        <form className={messageInput} onSubmit={handleSubmit}>
            <input type='text' ref={messageField} required={true} />
            <Button element={'button'}>Wyślij</Button>
        </form>
    )
}

export default MessageInput
