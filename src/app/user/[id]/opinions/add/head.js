import DefaultTags from '../../defaultTags'

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

export default async function Head({ params }) {
    const user = await getUser(params.id)
    return (
        <>
            <DefaultTags />
            <title>{`Piwegro.lol - Dodaj opinię o użytkowniku ` + user?.name}</title>
        </>
    )
}
