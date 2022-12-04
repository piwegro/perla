import DefaultTags from '../../defaultTags'

export default async function Head({ params }) {
    return (
        <>
            <DefaultTags />
            <title>Piwegro.lol - Wyszukiwanie {decodeURI(params.query)}</title>
        </>
    )
}
