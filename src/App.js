import './App.css';
import peopleImg from './assets/People collaborating remotely.svg';
import { Signup } from './components/Signup';


function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
        <Signup />

         
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={peopleImg} alt=""/>
        </div>
      </div>  
    </div>
  );
}

export default App;
