import React, { useState } from 'react';
import { AppBar, Badge, Button, createMuiTheme, Divider, Drawer, IconButton, List, ListItem, makeStyles, Paper, Slider, Switch, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyle = makeStyles((theme)=>({
    root:{
        flexGrow:'1'
    },
   
    store: {
        flexGrow: '1'
    }
    ,
    
    list:{
        padding:"20px 30px",
        width:300,
        justifyContent:'center',
        flexDirection:'column'
    },
    
    arrow:{
        display:'flex',
        justifyContent:'flex-end'
    },
    list_money_range:{
       alignItems:"start"
    }
}))

const Header = ({onThemeChange,dark,count,onPriceChange,value,onFillter}) => {
    const classes = useStyle()
    const [open,setOpen] =useState(false)
    const openDrawer = () =>{
        setOpen(true)
    }
    const closeDrawer = () =>{
        setOpen(false)
    }
    const minPrice = 0;
    const maxPrice = 1000;
    
   
    const marks =[{value:minPrice,label:`${minPrice}$`},{
        value:maxPrice,label:`${maxPrice}$`
    },{
        value:500,label:'500$'
    }
]

  
    return ( 
        
            
            <AppBar position="sticky" color='primary' className={classes.root} >
                <Toolbar>
                    
                <IconButton color="inherit" onClick={openDrawer}>
                    <MenuIcon />
                    
                </IconButton>
                
                <Drawer className={classes.holyShit} anchor="left" open={open}>
                   <div className={classes.arrow}>
                    <IconButton onClick={closeDrawer}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    </div>
                     <Divider/>
                     <List  >
                         <ListItem button className={classes.list}>
                             Home
                         </ListItem>
                         <ListItem button className={classes.list}>Contact</ListItem>
                         <ListItem button className={classes.list}>About</ListItem>                         
                         <Divider/>
                         <ListItem button className={`${classes.list} ${classes.list_money_range}`}>
                             <Typography id='money-range'>Price</Typography>
                             <Slider marks = {marks} min={minPrice} max={maxPrice} onChange = {onPriceChange} value={value} aria-labelledby='money-range'  valueLabelDisplay='auto' style={{width:"fill"}}/>
                         </ListItem>
                         <ListItem className={classes.list}><Button onClick={onFillter}>fillter</Button></ListItem>
                         
                         
                         
                     </List>
                </Drawer>
                <Typography variant="h6" noWrap className={classes.store}>
                    Digi-PAPA
                </Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={count} color="secondary">
                        <StorefrontIcon/>
                    </Badge>
                    
                </IconButton>
                
                <IconButton color="inherit"  onClick={onThemeChange}>
                    {dark? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
                <IconButton color="inherit">
                    <MoreIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        
       
     );
}
 
export default Header;