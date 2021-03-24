import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Message.css';

const Message = ({message, isYours}) => {

    if(isYours){
        return (
            <div className="message__container message__right">
                <div className="message__details">
                    <div className="message__extras">
                        You<br />
                        {message.time}<br />
                    </div>
                    {message.message}
                </div>
                <div className="message__avatar">
                    <Avatar alt={message.from.slice(0,1)} src="/static/images/avatar/1.jpg" />
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="message__container message__left">
                <div className="message__avatar">
                    <Avatar alt={message.from.slice(0,1)} src="/static/images/avatar/1.jpg" />
                </div>
                <div className="message__details">
                    <div className="message__extras">
                        {message.from}<br />
                        {message.time}<br />
                    </div>
                    {message.message}
                </div>
            </div>
        );
    }
}

export default Message;