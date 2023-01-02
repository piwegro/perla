import styles from '../../../styles/pages/user/Messages.module.scss'
import ConversationsList from './ConversationsList'
import MessageItem from './MessageItem'
import Button from '../../common/Button'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessagesBox = ({ conversations, selected }) => {
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
