import styles from '../../../styles/pages/user/Messages.module.scss'
import ConversationItem from './ConversationItem'

const ConversationsList = ({ conversations }) => {
    return (
        <div className={styles.conversations}>
            {conversations.map((conversation, i) => (
                <ConversationItem conversation={conversation} key={i} />
            ))}
        </div>
    )
}

export default ConversationsList
