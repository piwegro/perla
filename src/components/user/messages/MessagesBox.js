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
    const [user] = useAuthState(auth)
    const [conversations, setConversations] = useState([])
    const [refresh, setRefresh] = useState(false)

    // Fetch user's conversations
    useEffect(() => {
        if (user) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/users`, {
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
                    setConversations(data)
                })
                .catch(e => {
                    console.error('aaa', e)
                })
        }
    }, [user])

    const refreshCallback = () => {
        // Refresh messages
        setRefresh(p => !p)
    }

    return (
        <div className={styles.box}>
            <div className={styles.conversationsColumn}>
                <h3>Ostatnie rozmowy</h3>
                <ConversationsList conversations={conversations} selected={selected} />
            </div>
            {selected ? (
                user ? (
                    <div className={styles.messagesColumn}>
                        <div className={styles.messagesScrollBox}>
                            <Messages user={user} selected={selected} refresh={refresh} />
                        </div>
                        <div>
                            <MessageInput
                                user={user}
                                receiver={selected}
                                refresh={refreshCallback}
                            />
                        </div>
                    </div>
                ) : null
            ) : (
                <div className={`${styles.messagesColumn} ${styles.noConversation}`}>
                    <h3>Wybierz konwersację, aby zobaczyć rozmowę.</h3>
                </div>
            )}
        </div>
    )
}

export default MessagesBox
