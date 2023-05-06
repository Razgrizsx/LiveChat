import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
            projectId='3064ffe7-e9fe-436c-bf28-388996c001bc'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
    )
}
    
export default ChatPage