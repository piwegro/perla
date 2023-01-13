'use client'

import styles from '../../../styles/pages/user/Messages.module.scss'
import ConversationsList from './ConversationsList'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { initFirebase } from '../../../utils/firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'

/** Component containing conversations list and conversation box */
const MessagesBox = ({ selected }) => {
    // Initialize Firebase
    initFirebase()
    const auth = getAuth()
    const [user, loading, error] = useAuthState(auth)
    const [conversations, setConversations] = useState([])
    const [conversationsLoaded, setConversationsLoaded] = useState(false)

    // Fetch user's conversations
    useEffect(() => {
        if (user) {
            console.log(`${process.env.NEXT_PUBLIC_API_URL}/messages/${user.uid}`)
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/${user.uid}`)
                .then(res => {
                    if (!res.ok) {
                        console.log('API ERROR', res.statusText)
                    }
                    return res.json()
                })
                .then(data => {
                    setConversations(data)
                    setConversationsLoaded(true)
                })
        }
    }, [user])

    return (
        <div className={styles.box}>
            <div className={styles.conversationsColumn}>
                <h3>Ostatnie rozmowy</h3>
                <ConversationsList conversations={conversations} />
            </div>
            {selected ? (
                <div className={styles.messagesColumn}>
                    <div className={styles.messagesScrollBox}>
                        <Messages />
                    </div>
                    <div>
                        <MessageInput />
                    </div>
                </div>
            ) : (
                <div className={`${styles.messagesColumn} ${styles.noConversation}`}>
                    <h3>Wybierz konwersację, aby zobaczyć rozmowę.</h3>
                </div>
            )}
        </div>
    )
}

export default MessagesBox
