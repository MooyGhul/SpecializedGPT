import ListOfUsersGPT from '../components/lists';
import CreateGPTBtn from '../components/createNewGPTBtn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface Item {
    name: string;
    price: string;
}

interface GptsListPageProps {
    items: Item[];
}

function GptsListPage({ items }: GptsListPageProps){
    return (
        <Box sx={{ padding: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 6}}>
            <Typography variant="h4" component="h1">
              My GPTs
            </Typography>
            <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
              Create a New GPT
            </Button>
          </Grid>
          <ListOfUsersGPT items={items} />
        </Box>
      );
}

export default GptsListPage;