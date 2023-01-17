import Hero from '../../components/common/Hero'
import { container } from '../../styles/common/Grid.module.scss'
import Loader from '../../components/common/Loader'
import MessagesBox from '../../components/user/messages/MessagesBox'

const Page = async () => {
    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Wiadomości</h2>
            </Hero>
            <div className={container}>
                <MessagesBox />
            </div>
        </>
    )
}

export default Page
