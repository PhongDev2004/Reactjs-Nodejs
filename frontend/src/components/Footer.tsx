import { FC, ReactElement } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <Paper
      sx={{
        width: '100%',
        position: 'static',
        bottom: 0,
      }}
      component="footer"
      square
    >
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#1976d2',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="white" variant="h5">
                BEEMELY STORE
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle1">
                {`${new Date().getFullYear()} | ReactJS | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
};

export default Footer;
