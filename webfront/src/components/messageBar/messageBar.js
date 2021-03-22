import React from 'react';
import MessageInput from './MessageInput/MessageInput.js';
import Grid from '@material-ui/core/Grid';

import './MessageBar.css';

const MessageBar = () => {
        return( 
                <Grid item className="d-flex p-0 MessageBar" md={8}>
                        <span className="mb-auto mx-auto"> Messages </span>
                        <MessageInput />
                </Grid>
        );
}

export default MessageBar;
