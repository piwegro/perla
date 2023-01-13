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
    console.log(userOpinions)
    return <>test</>
}

export default Page
