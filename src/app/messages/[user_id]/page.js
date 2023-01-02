import Hero from '../../../components/common/Hero'
import { container } from '../../../styles/common/Grid.module.scss'
import styles from '../../../styles/pages/user/Messages.module.scss'
import Loader from '../../../components/common/Loader'
import MessagesBox from '../../../components/user/messages/MessagesBox'

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

const getMessages = async id => {
    let messages = [
        {
            content: 'Treść wiadomości 1',
            is_sent: true,
            message_id: 1,
            receiver: {
                accepted_currencies: [
                    {
                        name: 'Harnaś',
                        symbol: 'HAR',
                    },
                ],
                name: 'Piwegro',
                uid: 'ojsCm4icLKXwQQEvNGOemmuYg2w1',
            },
            sender: {
                accepted_currencies: [
                    {
                        name: 'Harnaś',
                        symbol: 'HAR',
                    },
                ],
                name: 'Test',
                uid: 'yzp7G2zUEMXtm3OzuVdHUjBo2To2',
            },
            sent_at: '2021-08-01T20:00:00.000Z',
        },
        {
            content: 'Treść wiadomości 2',
            is_sent: true,
            message_id: 2,
            receiver: {
                accepted_currencies: [
                    {
                        name: 'Harnaś',
                        symbol: 'HAR',
                    },
                ],
                name: 'Piwegro',
                uid: 'ojsCm4icLKXwQQEvNGOemmuYg2w1',
            },
            sender: {
                accepted_currencies: [
                    {
                        name: 'Harnaś',
                        symbol: 'HAR',
                    },
                ],
                name: 'Test',
                uid: 'yzp7G2zUEMXtm3OzuVdHUjBo2To2',
            },
            sent_at: '2021-08-01T20:01:00.000Z',
        },
        {
            content: 'Treść odpowiedzi',
            is_sent: true,
            message_id: 3,
            receiver: {
                accepted_currencies: [
                    {
                        name: 'Harnaś',
                        symbol: 'HAR',
                    },
                ],
                name: 'Test',
                uid: 'yzp7G2zUEMXtm3OzuVdHUjBo2To2',
            },
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
            sent_at: '2021-08-01T20:02:00.000Z',
        },
    ]

    return messages.sort((a, b) => {
        return new Date(b.sent_at) - new Date(a.sent_at)
    })
}
// todo: trzeba przenieść fetchowanie do client componenta, bo potrzebuję ID użytkownika
const Page = async ({ params }) => {
    const conversations = await getConversations()
    const messages = await getMessages(params.user_id)

    // console.log(messages)

    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Wiadomości</h2>
            </Hero>
            <div className={container}>
                {/*TODO: change selected to something useful*/}
                <MessagesBox conversations={conversations} selected={'1'} />
            </div>
        </>
    )
}

export default Page
