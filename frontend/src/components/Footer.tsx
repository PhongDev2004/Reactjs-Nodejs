import { FC, ReactElement } from 'react';
import { Box, Button, Container, Divider, Grid, Input, List, ListItem, Paper, Typography } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontSize: '24px', fontWeight: 800 }} gutterBottom>
              Furniro
            </Typography>
            <Typography variant="body2" sx={{ color: '#9F9F9F' }} gutterBottom>
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <List>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2, color: '#9F9F9F' }}>
                    Link
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Home
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Shop
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    About
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Contact
                  </Typography>
                </ListItem>
              </List>

              <List>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2, color: '#9F9F9F' }}>
                    Help
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Payment Options
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Return
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontWeight: 700, mb: 2 }}>
                    Privacy Policies
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <List>
              <ListItem>
                <Typography sx={{ fontWeight: 700, mb: 2, color: '#9F9F9F' }}>
                  Newsletter
                </Typography>
              </ListItem>
              <ListItem>
                <Input placeholder="Enter your email address" />
                <Button variant="text" sx={{ ml: 2, color: '#000', fontWeight: 700, borderBottom: '1px solid black', borderRadius: 0, px: 0, py: 0.5 }}>
                  Subscribe
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider sx={{ my: 5 }} />
        <Typography sx={{ fontWeight: 700 }}>
          2023 furino. All rights reverved
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
