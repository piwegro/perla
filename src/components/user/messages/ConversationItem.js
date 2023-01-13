'use client'

import styles from '../../../styles/pages/user/Messages.module.scss'
import Link from 'next/link'

/** Conversation item visible on the user's conversations list */
const ConversationItem = ({ conversation, selected }) => {
    const received_date = new Date(conversation.sent_at) // Convert string to JS date object
    return (
        <Link href={`/messages/${conversation.sender_id}`}>
            {/*TODO: dodaj active jak będzie endpoint*/}
            <div className={`${styles.conversation}`}>
                <img
                    src='/user_avatar.png'
                    alt='User avatar'
                    className={styles.conversationAvatar}
                />
                <div className={styles.conversationContent}>
                    a
                    {/*<span className={styles.conversationSender}>{conversation.sender.name}</span>*/}
                    {/*<span className={styles.conversationContent}>*/}
                    {/*    {conversation.content.slice(0, 20)}*/}
                    {/*    {conversation.content.length > 20 ? '...' : ''}*/}
                    {/*</span>*/}
                </div>
                <div className={styles.conversationDate}>
                    <span>
                        {received_date.toLocaleDateString('pl-PL', {
                            day: '2-digit',
                            month: '2-digit',
                        })}
                    </span>
                    <span>
                        {received_date.toLocaleTimeString('pl-PL', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </span>
                </div>
            </div>
        </Link>
    )
}
export default ConversationItem
