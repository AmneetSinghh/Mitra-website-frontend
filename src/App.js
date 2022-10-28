import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import AppRoute from './routes';

function App() {
  return (
  <>
   <Header/>
   <AppRoute />
  </>
  );
}

export default App;

