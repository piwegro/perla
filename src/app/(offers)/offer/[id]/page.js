import Hero from '../../../../components/common/Hero'

const getOffer = async id => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offer/${id}`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const Page = async ({ params }) => {
    const { id } = params
    const offerData = await getOffer(id)

    return (
        <>
            <Hero center={true}>
                <h2>{offerData.title}</h2>
            </Hero>
        </>
    )
}

export default Page
