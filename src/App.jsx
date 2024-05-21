import './App.css';
import LoginForm from './Components/loginForm';
import Logo from './Components/logo'

function App () {
  return (
    <div>
      <div className='logo'>
        <Logo/>
      </div>
      <div className='app-container'>
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;
