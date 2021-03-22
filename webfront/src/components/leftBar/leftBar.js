import React from 'react';
import Grid from '@material-ui/core/Grid';

import './LeftBar.css';

const LeftBar = () => {

    return (
        <Grid item className="d-flex LeftBar bar" md={2}>
            <span className="mb-auto mx-auto"> Navigation </span>
        </Grid>
    );
}

export default LeftBar;
