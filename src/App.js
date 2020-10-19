import React,{useState} from 'react';

import './App.css';
import Header from './component/Header/index';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import Main from './component/body/main';


function App() {
  const [dark,setDark] = useState(false);
  const theme = createMuiTheme({
    palette:
    {
      type: dark ? 'dark': 'light',
    }
  })
  const [count,setCount] =useState(0)
  const sendIT = ()=>{
    setCount(count+1)
  }
  
  const themeChanger = () =>{
    setDark(!dark)
  }
  const [value,setValue] = useState([100,1000])
  const priceChanger = (event,newValue)=>{
    setValue(newValue)
  }
  const [fillterdPrice,setFillterdPrice] = useState([0,1000])
  const fillterPrice = () =>{
    setFillterdPrice(value)
      
      
  }
  return ( 
     <ThemeProvider theme={theme}>
       <Paper style={{height:'fitContent' ,minHeight:'100vh'}}>
      <div className="App">
    <Header onPriceChange={priceChanger}  value={value} onFillter={fillterPrice}  onThemeChange={themeChanger} dark={dark} count={count}/>     
    <Main fillterdPrice ={fillterdPrice} sendToStore={sendIT}/>
    
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
