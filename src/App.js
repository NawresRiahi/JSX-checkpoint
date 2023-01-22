import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import { Address } from './Component/Profile/Address';
import Image from './Component/Profile/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
               <FullName name="Amira Ben Salah"/>  
        <Address name="Gabes"/> 
        <image ><img src='https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp' alt='nopicture'></img>
</image>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
