import InputShortener from './components/InputShortener';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import LinkResults from './components/LinkResults';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
    
    <InputShortener setInputValue = {setInputValue}/>     
    <BackgroundAnimation />
    <LinkResults inputValue={inputValue}/>
    </div>
  );
}

export default App;
