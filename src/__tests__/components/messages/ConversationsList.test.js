import { render, screen } from '@testing-library/react'
import ConversationsList from '../../../components/user/messages/ConversationsList'

test('should render conversations list with one item', () => {
    const conv = [
        {
            accepted_currencies: [
                {
                    name: 'Harnaś',
                    symbol: 'HAR',
                    value: 1.0,
                },
            ],
            name: 'Piwegro',
            uid: 'aaa',
        },
    ]
    render(<ConversationsList conversations={conv} selected={'a'} />)
    const convElement = screen.getByText('Piwegro')
    expect(convElement).toBeInTheDocument()
})
