import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import InputAdornment from '@material-ui/core/InputAdornment';

import './MessageInput.css';

const MessageInput = () => {
        
    return(
      <div className="stick">
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
                        <IconButton id="button">
                          <EmojiEmotionsIcon />
                        </IconButton>
                        <IconButton id="button">
                          <SendIcon />
                        </IconButton>
                    </InputAdornment>
                }}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
}

export default MessageInput;

