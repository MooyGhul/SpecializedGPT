import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import demoImage from '../images/gpt.jpg';

interface Item {
    name: string;
    price: string;
}

interface ItemProps {
    items: Item[];
}

function ListOfUsersGPT({ items }: ItemProps){
    return (
      <div>
        <Grid container spacing={1} >
          {items.map((item, index) => (
            <Grid xs={12} sm={6} md={4} rowSpacing={10} key={index}>
              <Card sx={{ maxWidth: 350, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 2,
                transition: 
                  'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  ':hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                  }
              }}>
                <CardMedia sx={{ height: 140 }} image={demoImage}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={`/homepage/${item.name}`} style={{ textDecoration: 'none', color: 'inherit' }}> {item.name} </Link>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </div>
    );
}

export default ListOfUsersGPT;