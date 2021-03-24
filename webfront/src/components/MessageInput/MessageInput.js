import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import InputAdornment from '@material-ui/core/InputAdornment';
import Picker from 'emoji-picker-react';

import './MessageInput.css';

const MessageInput = () => {

  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");
        
    return(
      <div className={ showPicker?"stick stick-trans":"stick"} >
        {showPicker?
            <div className="picker">
                <Picker
                  onEmojiClick = {(e,emoji) => setMessage(message+emoji.emoji)} 
                />
            </div> :""
        }
        <Grid container>
          <Grid item md={12} className="input__container">
            <FormControl fullWidth>
              <TextField id="message"
                variant="outlined"
                size="small"
                placeholder="Enter message..."
                InputProps = {{
                  endAdornment :
                    <InputAdornment position="end">
                        <IconButton id="button" onClick={()=> setShowPicker(!showPicker)}>
                          <EmojiEmotionsIcon />
                        </IconButton>
                        <IconButton id="button">
                          <SendIcon />
                        </IconButton>
                    </InputAdornment>
                }}
                value = {message}
                onChange = {(e) => setMessage(e.target.value)}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
}

export default MessageInput;

