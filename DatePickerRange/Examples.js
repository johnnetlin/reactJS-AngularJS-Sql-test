import 'bootstrap-daterangepicker/daterangepicker.css';

import React from 'react';
import Grid from 'react-bootstrap';

import DateRangePicker from './DateRangePicker';
import PredefinedRanges from './PredefinedRanges';

class Examples extends React.Component {

  render() {
    return (
      <Grid>
        <h2>Examples</h2>
        <hr/>
        <form className="form-horizontal form-bordered">
          <div className="form-body">  
             <DateRangePicker/>
             <PredefinedRanges/>        
</div>
        </form>
      </Grid>

    );
  }
}

export default Examples;
