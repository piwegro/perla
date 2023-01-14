import { render, screen } from '@testing-library/react'
import MessageInput from '../../../components/user/messages/MessageInput'

test('should render message input field', () => {
    render(<MessageInput />)
    const msgInputElement = screen.getByRole('textbox')
    expect(msgInputElement).toBeInTheDocument()
})
