import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  const[Mode,setMode] = useState('light'); //Whether dark mode is enabled or not 
  const[alert,setAlert] =useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);

  }


  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled",'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled",'success');

  }
}
  return (
    <>
      <Navbar title = "Textutils"  mode ={Mode} aboutText="About" toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes>
            
      
      </div>
      
 
      
    </>
  );
}
export default App;
