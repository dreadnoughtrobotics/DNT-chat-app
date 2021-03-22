import React from 'react';
import './messageBar.css';
import MessageInput from './messageInput/messageInput.js';
import Grid from '@material-ui/core/Grid';

function MessageBar(props){
        return <Grid item className="d-flex p-0 MessageBar" md={8}>
                <span className="mb-auto mx-auto"> Messages </span>
                <MessageInput />

            </Grid>;
}

export default MessageBar;
