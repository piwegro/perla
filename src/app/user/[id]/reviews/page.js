import Loader from '../../../../components/common/Loader'
import Hero from '../../../../components/common/Hero'
import { container } from '../../../../styles/common/Grid.module.scss'
import styles from '../../../../styles/pages/user/Reviews.module.scss'
import Favourites from '../../../../components/user/Favourites'

/** Fetch user info from API */
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

/** Fetches opinions from API */
const getOpinions = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${id}`)

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

// TODO: wyświetlanie tych opinii
// [
//     {
//         review: 'testowa opinia',
//         reviewee_id: 'TXbKwxFPr5YJ8WG8nxYpgmTVshG2',
//         reviewer_id: 'ojsCm4icLKXwQQEvNGOemmuYg2w1'
//     }
// ]

const Page = async ({ params }) => {
    const id = params.id
    const userOpinions = await getOpinions(id)
    const user = await getUser(id)

    console.log(userOpinions)
    return (
        <>
            <Loader />
            {user?.name ? (
                <>
                    <Hero center={true}>
                        <h2>Opinie o użytkowniku {user?.name}</h2>
                    </Hero>
                    <div className={container}>
                        <div className={styles.content}>
                            <h2>Lista ogłoszeń</h2>
                        </div>
                    </div>{' '}
                </>
            ) : (
                <Hero center={true}>
                    <h2>Nie znaleziono użytkownika</h2>
                </Hero>
            )}
        </>
    )
}

export default Page
