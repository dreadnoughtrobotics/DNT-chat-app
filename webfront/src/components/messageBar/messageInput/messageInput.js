import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './MessageInput.css';

const MessageInput = () => {
        
    return(
      <div className="stick mt-auto">
        <Grid container>
          <Grid item md={11}>
            <FormControl fullWidth>
              <TextField id="message"
                variant="outlined"
                size="small"
                />
            </FormControl>
          </Grid>
          <Grid item md={1}>
            <Button id="button" variant="outlined">Send</Button>
          </Grid>
        </Grid>
      </div>
    );
}

export default MessageInput;

