import React from 'react';
import './messageInput.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function MessageInput(props){
        return <div className="stick mt-auto">
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
}

export default MessageInput;

