import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import './App.css';
function App() {
  return (
   <>
   
   
   <Navbar title="textChanger" about="About"/>
   <div className="container  my-3">
<Textform heading="Enter your text to Analyze"/>

{/* <button className="btn btn-primary">Convert to UpperCase</button> 
<button className="btn btn-primary">Convert to LowerCase</button> */}
</div>
  </>
  );
}

export default App;
