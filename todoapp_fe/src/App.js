import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main'
import Register from './pages/register';
import Login from './pages/login';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NoteBook from './pages/notes';
import CreateNewNote from './pages/createNewNote';
import UpdateUser from './pages/updateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" ><MainPage/></Route>
          <Route path="/pages/register"> <Register/></Route>
          <Route path="/pages/login">< Login /></Route>
          <Route path="/pages/notes" > <NoteBook/> </Route>
          <Route path="/pages/createNewNote" > <CreateNewNote/> </Route>
          <Route path="/pages/updateUser" > <UpdateUser/> </Route>
        </Switch>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
