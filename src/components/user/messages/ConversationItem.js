import styles from '../../../styles/pages/user/Messages.module.scss'

const ConversationItem = ({ conversation }) => {
    const received_date = new Date(conversation.sent_at)
    return (
        <div className={styles.conversation}>
            <img src='/user_avatar.png' alt='User avatar' className={styles.conversationAvatar} />
            <div className={styles.conversationContent}>
                <span className={styles.conversationSender}>{conversation.sender.name}</span>
                <span className={styles.conversationContent}>
                    {conversation.content.slice(0, 20)}
                    {conversation.content.length > 20 ? '...' : ''}
                </span>
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
    )
}
export default ConversationItem
