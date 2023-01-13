import { render, screen } from '@testing-library/react'
import AcceptedCurrencies from '../../../components/user/AcceptedCurrencies'

test('should render list of accepted currencies', () => {
    const accepted = [
        {
            name: 'Harnaś',
            symbol: 'HAR',
            value: 1.0,
        },
    ]

    render(<AcceptedCurrencies currencies={accepted} />)
    const listElement = screen.getByText('HAR')
    expect(listElement).toBeInTheDocument()
})
