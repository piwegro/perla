import styles from '../../../styles/pages/user/Messages.module.scss'
import ConversationItem from './ConversationItem'
import ConversationsList from './ConversationsList'

const MessagesBox = ({ conversations }) => {
    return (
        <div className={styles.box}>
            <div className={styles.conversationsColumn}>
                <h3>Ostatnie wiadomości</h3>
                <ConversationsList conversations={conversations} />
            </div>
            <div className={`${styles.messagesColumn} ${styles.noConversation}`}>
                <h3>Wybierz konwersację, aby zobaczyć rozmowę.</h3>
            </div>
        </div>
    )
}

export default MessagesBox
