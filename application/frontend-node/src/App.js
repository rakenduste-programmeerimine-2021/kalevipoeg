import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Taskbar from './components/Taskbar';
import LandingPage from './pages/LandingPage';
import StoreFront from './pages/StoreFront';
import CreateListing from './pages/CreateListing';
import MyRent from './pages/MyRent';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={ Taskbar }/>
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/rent" component={ StoreFront }/>
          <Route exact path="/createlisting" component={ CreateListing }/>
          <Route exact path="/user" component={ MyRent }/>
          <Route exact path="/login" component={ Login }/>
          <Route exact path="/register" component={ Register }/>
          <Route exact path="/contact" component={ Contact }/>
          <Route/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
