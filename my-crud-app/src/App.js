// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes ,Route,Link,  } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
     {/* <h5> React CRUD app operation using PHP and MySQL </h5> */}
      <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="user/create"> create List</Link>
          </li>
        </ul>
      </nav> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <Link class="navbar-brand"to="/">List</Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link"to="/"> List <span className="sr-only"></span></Link>
      </li>
     
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link"to="user/create">create List <span className="sr-only"></span></Link>
      </li>
     
    </ul>
  </div>
</nav>
      <Routes>
        <Route index element={<List/>}></Route>
        <Route path='user/create' element={<Create/>}></Route>
        <Route path='user/:id/edit' element={<Edit/>}></Route>


      </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
