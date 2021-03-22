import React from 'react';
import LeftBar from '../../components/LeftBar/LeftBar';
import MessageBar from '../../components/MessageBar/MessageBar';
import StatusBar from '../../components/StatusBar/StatusBar';
import Grid from '@material-ui/core/Grid';

import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main__container">
            <Grid container className="bar">
                <LeftBar />
                <MessageBar />
                <StatusBar />
            </Grid>
        </div>
    )
}

export default MainPage;