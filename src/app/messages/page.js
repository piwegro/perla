import Hero from '../../components/common/Hero'
import { container } from '../../styles/common/Grid.module.scss'
import styles from '../../styles/pages/user/Messages.module.scss'

const getConversations = async () => {
    const conv = {
        conversation_id: 1,
        sender: {
            accepted_currencies: [
                {
                    name: 'Harnaś',
                    symbol: 'HAR',
                },
            ],
            name: 'Piwegro',
            uid: 'ojsCm4icLKXwQQEvNGOemmuYg2w1',
        },
        content: 'Testowa treść',
        is_sent: true,
        sent_at: '2021-08-01T20:00:00.000Z',
    }
    return [...Array(4).keys()].map(() => conv)
}

const getMessages = async () => {
    return []
}

const Page = async () => {
    const conversations = await getConversations()
    // console.log(await getConversations())
    // TODO: lista wiadomości
    return (
        <>
            <Hero center={true}>
                <h2>Wiadomości</h2>
            </Hero>
            <div className={container}>
                <div className={styles.box}>
                    <div className={styles.conversationsColumn}>
                        <h3>Ostatnie wiadomości</h3>
                        <div className={styles.conversations}>
                            {conversations.map((conversation, i) => (
                                <Conversation conversation={conversation} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.messagesColumn} ${styles.noConversation}`}>
                        <h3>Wybierz konwersację, aby zobaczyć rozmowę.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

const Conversation = ({ conversation }) => {
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

export default Page
