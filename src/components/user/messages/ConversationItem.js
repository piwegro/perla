'use client'

import styles from '../../../styles/pages/user/Messages.module.scss'
import Link from 'next/link'

/** Conversation item visible on the user's conversations list */
const ConversationItem = ({ conversation, selected }) => {
    return (
        <Link href={`/messages/${conversation.uid}`}>
            <div
                className={`${styles.conversation} ${
                    selected == conversation.uid ? styles.active : ''
                }`}>
                <img
                    src='/user_avatar.png'
                    alt='User avatar'
                    className={styles.conversationAvatar}
                />
                <div className={styles.conversationContent}>
                    <span className={styles.conversationSender}>{conversation.name}</span>
                </div>
            </div>
        </Link>
    )
}
export default ConversationItem
