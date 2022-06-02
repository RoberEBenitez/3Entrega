import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import {BrouserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (

    <div>
      <h1>Esta es la funcion App, llamando a NavBar</h1>
      <NavBar />
      <ItemListContainer cantidad="03"/>
    </div>
  ); 

}

export default App;
