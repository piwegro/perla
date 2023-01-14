'use client'

import styles from '../../../styles/pages/user/Messages.module.scss'
import ConversationItem from './ConversationItem'

/** Component containing list of user's conversations */
const ConversationsList = ({ conversations, selected }) => {
    return (
        <div className={styles.conversations}>
            {conversations.length > 0
                ? conversations.map((conversation, i) => (
                      <ConversationItem conversation={conversation} key={i} selected={selected} />
                  ))
                : 'Brak rozmów'}
        </div>
    )
}

export default ConversationsList
