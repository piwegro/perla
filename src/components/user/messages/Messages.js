import MessageItem from './MessageItem'

const Messages = () => {
    return (
        <>
            {/*TODO: kolejność wiadomości musi być odwrócona, bo jest column-reversed albo dodać warappera reversed */}
            <MessageItem>Wiadomość otrzymana</MessageItem>
            <MessageItem type={'sender'}>Wiadomość wysłana</MessageItem>
            <MessageItem>Wiadomość otrzymana 2</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem>Wiadomość otrzymana 3</MessageItem>
            <MessageItem type={'sender'}>Wiadomość wysłana 2</MessageItem>
        </>
    )
}

export default Messages
