
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      
  }
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled","success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#084849";
      showAlert("Dark Mode has been Enabled","success")
    }
  }
  return (
    <>
    
  {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  
  <div className="container my-3">
    
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/>
            </Route>
        </Switch>  
  </div>
  </Router>

  </>
  );
}

export default App;
