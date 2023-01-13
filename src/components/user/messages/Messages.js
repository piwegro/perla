'use client'

import MessageItem from './MessageItem'
import { useEffect, useState } from 'react'

/** List of messages in conversation */
const Messages = ({ user, selected, refresh }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/${selected}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            })
                .then(res => {
                    if (!res.ok) {
                        console.log('API ERROR', res.statusText)
                    }
                    return res.json()
                })
                .then(data => {
                    if (!data?.error) setMessages(data)
                })
                .catch(e => {
                    console.error('aaa', e)
                })
        }
    }, [user, refresh])
    return (
        <>
            {messages.length > 0
                ? messages
                      .slice(0)
                      .reverse()
                      .map(message => {
                          return (
                              <MessageItem
                                  type={message.sender_id === user.uid ? 'sender' : ''}
                                  key={message.message_id}>
                                  {message.content}
                              </MessageItem>
                          )
                      })
                : null}
        </>
    )
}

export default Messages
