import styles from '../../../styles/pages/user/Messages.module.scss'

/** Single message sent/received from/by the user */
const MessageItem = props => {
    return props?.type === 'sender' ? (
        <div className={`${styles.message} ${styles.messageSent}`}>
            <img src='/user_avatar.png' alt='' />
            <div className={styles.messageContent}>
                <span>{props.children}</span>
            </div>
        </div>
    ) : (
        <div className={styles.message}>
            <img src='/user_avatar.png' alt='' />
            <div className={styles.messageContent}>
                <span>{props.children}</span>
            </div>
        </div>
    )
}

export default MessageItem
