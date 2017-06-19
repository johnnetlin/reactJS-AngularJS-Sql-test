import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import Grid from 'react-bootstrap';

import DateRangePicker from './DateRangePicker';
import PredefinedRanges from './PredefinedRanges';


class App extends Component {
  render() {
    return (

      <div className="App">
        	<h2>Examples</h2>
                <form className="form-horizontal form-bordered">
          <div className="form-body">  
             
             <PredefinedRanges/>        
</div>
        </form>
     </div>

	


        

    );
  }
}

export default App;
