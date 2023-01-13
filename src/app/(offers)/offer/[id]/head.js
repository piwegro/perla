import DefaultTags from '../../../defaultTags'

/** Gets the details of the offer with specified ID */
const getOffer = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offer/${id}`)

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

export default async function Head({ params }) {
    const data = await getOffer(params.id)

    return (
        <>
            <DefaultTags />
            <title>{`Piwegro.lol - ` + data?.title.substring(0, 20)}</title>
        </>
    )
}
