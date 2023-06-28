import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import './App.css';
import {useState} from "react";
function App() {

const[mode,setMode] =useState('light');
const toggleMode=()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor= 'grey';
  }else{
    setMode('light');
    document.body.style.backgroundColor= 'white';

  }
}

  return (
   <>

   <Navbar title="textChanger" about="About" mode={mode} toggleMode={toggleMode}/>
   <div className="container  my-3">
<Textform heading="Enter your text to Analyze"mode={mode}/>
{/* <About/> */}
{/* <button className="btn btn-primary">Convert to UpperCase</button> 
<button className="btn btn-primary">Convert to LowerCase</button> */}
</div>
  </>
  );
}

export default App;
