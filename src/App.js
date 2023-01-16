import Navbar from './Navbar';
import Home from './Home';
import Lists from './lists/Lists';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Lists />
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
