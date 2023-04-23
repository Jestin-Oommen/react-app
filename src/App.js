// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light');//to check whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#03171d';
      showAlert("Dark mode is enabled", "success");
      // document.title="Basics - Dark Mode";
      // setInterval=(()=>{
      //   document.title="Basics is amazing";
      // },2000);
      // setInterval=(()=>{
      //   document.title="Install Basics now";
      // },1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enabled", "success");
      // document.title="Basics - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Basics" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* /users--> Component 1
/users/home--> Component 2 */}
    {/* <Switch>
          <Route exact path="/about"> */}
            
          {/* </Route>
          <Route exact path="/">  */}
            <TextForm showAlert={showAlert} heading="Try Basics - WordCounter CharacterCounter "mode={mode}/>
          {/* </Route>
        </Switch> */}
        <About mode={mode} />
    </div>
    {/* </Router>  */}
    {/* container brings entire content in the center */}
   </>
  );
}

export default App;
