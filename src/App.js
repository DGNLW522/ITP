import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ManagePharmacy from './components/pages/managePharmacy';
import AddMadicine from "./components/create";
import MadicineList from "./components/madicine-list";
import Navbar from "./components/navbar";
import EditPatient from "./components/editpatient";

import AddPatient from "./components/create-patient";


function App() {
  return (
    <>
    <Router>
      
      <Navbar />
    
      <br/>
      <Route path='/managePharmacy' component={ManagePharmacy} />
      <Route path="/create" component={AddMadicine} />
      <Route path="/madicine-list" exact component={MadicineList} />
      <Route  path="/editpatient" component={EditPatient} />
      
      <Route path="/create-patient" component={AddPatient} />
  
      
    </Router>
    </>
  );
}

export default App;
