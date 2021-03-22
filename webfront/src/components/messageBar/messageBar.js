import React from 'react';
import Grid from '@material-ui/core/Grid';
import MessageInput from '../MessageInput/MessageInput.js';
import Message from '../Messsage/Message';

import './MessageBar.css';

const MessageBar = ({messages}) => {
        const user = "user2";
        const message_components = messages.map((message,id) => <Message key={id} message={message} isYours={message.from===user} />);
        return( 
                <Grid item className="MessageBar" md={8}>
                        <div className="messages__container">
                                {message_components}
                        </div>
                        <MessageInput />
                </Grid>
        );
}

export default MessageBar;
