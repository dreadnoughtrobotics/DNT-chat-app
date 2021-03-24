import React from 'react';
import Grid from '@material-ui/core/Grid';

import './StatusBar.css';

const StatusBar = () => {
    
    return ( 
        <Grid item className="d-flex StatusBar" md={2}>
            <span className="mb-auto mx-auto"> Status </span>
        </Grid>
    );
}

export default StatusBar;
