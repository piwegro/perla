import Hero from '../../../../../components/common/Hero'
import Loader from '../../../../../components/common/Loader'
import { container } from '../../../../../styles/common/Grid.module.scss'
import ReviewForm from '../../../../../components/user/ReviewForm'

/** Fetch user data from API */
const getUser = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)

        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    } catch (e) {
        return {
            error: true,
        }
    }
}

const Page = async ({ params }) => {
    const id = params.id // Get user ID from params
    const user = await getUser(id) // Get user data from API

    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Dodaj opinię o użytkowniku {user?.name}</h2>
            </Hero>
            <div className={container}>
                <ReviewForm targetUser={id} />
            </div>
        </>
    )
}

export default Page
