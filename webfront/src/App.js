import logo from './logo.svg';
import './App.css';
import LeftBar from './components/leftBar/leftBar.js'
import MessageBar from './components/messageBar/messageBar.js'
import StatusBar from './components/statusBar/statusBar.js'
import Grid from '@material-ui/core/Grid';

function App(){
        return <div className="App">
                <Grid container className="bar">
                        <LeftBar />
                        <MessageBar />
                        <StatusBar />    
                </Grid>
            </div>;
}

export default App;
