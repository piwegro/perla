'use client'

import MessageItem from './MessageItem'
import { useEffect, useState } from 'react'

/** List of messages in conversation */
const Messages = ({ user, selected }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (user) {
            console.log('id', user.uid)
            console.log(selected)

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
                    console.log(data)
                    if (!data?.error) setMessages(data)
                })
                .catch(e => {
                    console.error('aaa', e)
                })
        }
    }, [user])
    return (
        <>
            {/*TODO: kolejność wiadomości musi być odwrócona, bo jest column-reversed albo dodać warappera reversed */}
            {/*{content: 'Test 12345', message_id: 9, receiver_id: 'TXbKwxFPr5YJ8WG8nxYpgmTVshG2', sender_id: 'ojsCm4icLKXwQQEvNGOemmuYg2w1', sent_at: '2023-01-13T22:52:21.127042'}*/}
            {messages.length > 0
                ? messages.map(message => {
                      return (
                          <MessageItem type={message.sender_id === user.uid ? 'sender' : ''}>
                              {message.content}
                          </MessageItem>
                      )
                  })
                : null}
            {/*<MessageItem>Wiadomość otrzymana</MessageItem>*/}
            {/*<MessageItem type={'sender'}>Wiadomość wysłana</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 2</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem>Wiadomość otrzymana 3</MessageItem>*/}
            {/*<MessageItem type={'sender'}>Wiadomość wysłana 2</MessageItem>*/}
        </>
    )
}

export default Messages
