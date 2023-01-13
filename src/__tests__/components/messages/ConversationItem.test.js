import { render, screen } from '@testing-library/react'
import ConversationItem from '../../../components/user/messages/ConversationItem'

test('should render conversation item', () => {
    const conv = {
        accepted_currencies: [
            {
                name: 'Harnaś',
                symbol: 'HAR',
                value: 1.0,
            },
        ],
        name: 'Piwegro',
        uid: 'aaa',
    }
    render(<ConversationItem conversation={conv} />)
    const convElement = screen.getByText('Piwegro')
    expect(convElement).toBeInTheDocument()
})
