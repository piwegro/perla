import Hero from '../../../../components/common/Hero'
import { container } from '../../../../styles/common/Grid.module.scss'
import styles from '../../../../styles/pages/user/Reviews.module.scss'
import Button from '../../../../components/common/Button'

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

/** Fetches reviews from API */
const getReviews = async id => {
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

const Page = async ({ params }) => {
    const id = params.id // Get user ID from params
    const userReviews = await getReviews(id) // Get user reviews from API
    const user = await getUser(id) // Get user data from API

    return (
        <>
            {user?.name ? (
                <>
                    <Hero center={true}>
                        <h2>Opinie o użytkowniku {user?.name}</h2>
                    </Hero>
                    <div className={container}>
                        <div className={styles.content}>
                            <div className={styles.titleRow}>
                                <h2>Lista opinii</h2>
                                <Button element={'anchor'} href={`/user/${id}/reviews/add`}>
                                    Dodaj opinię
                                </Button>
                            </div>
                            {userReviews.length > 0 ? (
                                <div className={styles.reviews}>
                                    {userReviews.map((review, i) => {
                                        return (
                                            <div
                                                key={`${review.reviewer_id}-${i}`}
                                                className={styles.review}>
                                                {review.review}
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <span>Brak opinii</span>
                            )}
                        </div>
                    </div>
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
