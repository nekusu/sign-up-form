import Form from './components/Form';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h2>Get started in the crypto world.</h2>
        <Form />
        <p>Already have an account? <span className="link">Log in</span></p>
      </main>
    </div>
  );
}

export default App;
