import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import './App.css';
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', "success");

    }
  }

  return (

    <Router>
      <Navbar title="textChanger" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container  my-3">
        <Routes>
        <Route path="/about" element={<About  mode={mode}/>} >
          </Route>
          <Route path="/" element={<Textform heading="Enter your text to Analyze" mode={mode} showAlert={showAlert} />} >
            
          </Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
