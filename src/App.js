import Parallax from './components/Parallax';
import Form from './components/Form';
import GithubButton from './components/GithubButton';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <aside>
        <Parallax />
        <h1>A blockchain designed to evolve.</h1>
        <p>Security focused. Upgradeable. Built to last.</p>
      </aside>
      <main>
        <h2>Get started in the crypto world.</h2>
        <Form />
        <p>Already have an account? <span className="link">Log in</span></p>
      </main>
      <footer>
        <GithubButton username="nekusu" />
      </footer>
    </div>
  );
}

export default App;
