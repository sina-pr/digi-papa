import { Container, Grid, Typography, makeStyles, Paper, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

import React from 'react';
import products from './../../products/products';
const useStyle = makeStyles({
    root: {
        marginTop:'20px',
        
    },
    papers:{
        textAlign:'center',
        minHeight:"300px"
    },
    media:{
        
        height:250,
        backgroundSize: 'contain'
    }
})
const Main = ({sendToStore,fillterdPrice}) => {
    
    const classes = useStyle()
    return (
        
        
        <Container className={classes.root}>
            
           <Grid container spacing={2}>
                
                {products.map(p =>{
                    {if( fillterdPrice[0]>p.price || fillterdPrice[1]<p.price) return null}
                    return <Grid item sm={6} xs={12}>
                    <Card id={p.id} >
                        <CardMedia image={p.imageUrl} className={classes.media}/>
                        <CardContent>
                            <Typography variant='h5'>
                                {p.name}
                            </Typography>
                            <Typography>
                                {p.Description}
                            </Typography>
                            <Typography variant='h6' color='secondary'>
                                {p.price}$
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='outlined' color='primary' onClick={sendToStore}>Add</Button>
                            <Button color='primary'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                }

            )}
                
           </Grid>
        </Container>
    )
}
 
export default Main;