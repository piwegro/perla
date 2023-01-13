import OfferList from '../../../components/search/OfferList'
import Hero from '../../../components/common/Hero'
import { container } from '../../../styles/common/Grid.module.scss'
import styles from '../../../styles/pages/Search.module.scss'

/** Get search results from API */
const getSearchResults = async query => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/search/${query}/0`)

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

/** Preload search results to make the load time shorter */
export const preload = id => {
    void getSearchResults(id)
}

// TODO: liczba stron i paginacja
const Page = async ({ params }) => {
    const searchResults = await getSearchResults(params.query) // Get search results
    const searchQuery = decodeURI(params.query) // Get search query

    return (
        <>
            <Hero center={true}>
                <div>
                    <h2>Wyniki wyszukiwania</h2>
                    <span>{!searchResults ? searchQuery : null}</span>
                </div>
            </Hero>
            {!searchResults?.error ? (
                <div className={styles.wrapper}>
                    <div className={container}>
                        <OfferList offers={searchResults} />
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Page
