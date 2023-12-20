// import './App.css';
import Home from './Home';
 import Navbar from './Navbar';
 import Task from './Task';
 import BlogList from './BlogList';


function App() {
  return(
   <div className="App">
    <Navbar />
    {/* <Home />  */}
   <Task />
   <BlogList />
    <div className="content">
      {/* <h1>Home</h1> */}
    </div>
   </div>
  );
}

export default App;
