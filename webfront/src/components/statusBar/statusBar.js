import React from 'react';
import './statusBar.css';
import Grid from '@material-ui/core/Grid';

function StatusBar(props){
    return <Grid item className="d-flex StatusBar" md={2}>
        <span className="mb-auto mx-auto"> Status </span>
        </Grid>;
}

export default StatusBar;
