import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="81a00cd6-4a11-4861-b319-07f520526296"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
}

export default App;
