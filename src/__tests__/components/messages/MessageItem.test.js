import { render, screen } from '@testing-library/react'
import MessageItem from '../../../components/user/messages/MessageItem'

test('should render single message', () => {
    render(<MessageItem>test message</MessageItem>)
    const msgElement = screen.getByText('test message')
    expect(msgElement).toBeInTheDocument()
})
