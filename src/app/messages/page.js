import Hero from '../../components/common/Hero'
import { container } from '../../styles/common/Grid.module.scss'
import styles from '../../styles/pages/user/Messages.module.scss'
import Loader from '../../components/common/Loader'
import MessagesBox from '../../components/user/messages/MessagesBox'

// TODO: get conversations from API
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

const Page = async () => {
    const conversations = await getConversations()

    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Wiadomości</h2>
            </Hero>
            <div className={container}>
                <MessagesBox conversations={conversations} />
            </div>
        </>
    )
}

export default Page
