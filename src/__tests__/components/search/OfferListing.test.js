import { render, screen } from '@testing-library/react'
import OfferListing from '../../../components/search/OfferListing'

test('should render one offer with no data', () => {
    const offerData = {
        created_at: '2022-10-31T18:32:19',
        description: 'Description',
        images: [
            {
                image_id: 1,
                original:
                    'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_original.jpg',
                preview:
                    'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_preview.jpg',
                thumbnail:
                    'https://api.piwegro.lol/image/cb1a6d25-403d-4b96-aef2-29eef9d84c60_thumbnail.jpg',
            },
        ],
        offer_id: 0,
        price: [
            {
                amount: 0,
                currency: {
                    name: '-',
                    symbol: '-',
                    value: 1.0,
                },
            },
        ],
        title: 'Test',
    }
    render(<OfferListing data={offerData} />)
    const offerElement = screen.getByText(`Test`)
    expect(offerElement).toBeInTheDocument()
})
