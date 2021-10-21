import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/auth';
import styles from './styles/App.module.scss';

export function App() {
  const { token, user } = useContext(AuthContext);
  return (
    <main
      className={`${styles.contentWrapper} ${
        !!token ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!token ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
