import { render, screen } from '@testing-library/react'
import OfferList from '../../../components/search/OfferList'

test('should render one offer with no data', () => {
    render(<OfferList />)
    const offerElement = screen.getByText(`Brak ofert`)
    expect(offerElement).toBeInTheDocument()
})
