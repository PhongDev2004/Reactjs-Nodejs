import { Box, Grid, Typography } from '@mui/material';

const Testimonial = () => {
   return (
      <Box sx={{ backgroundColor: '#FAF3EA', py: 10, width: '100%' }}>
         <Grid container spacing={2}>
            <Grid item xs={3} display='flex' justifyContent='center'>
               <Box display="flex" alignItems="center">
                  <img src="./src/assets/trophy.png" className='me-1' alt="" />
                  <Box>
                     <Typography variant='h6' fontWeight={700}>High Quality</Typography>
                     <Typography variant='body1' color='#898989'>crafted from top materials</Typography>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={3} display='flex' justifyContent='center'>
               <Box display="flex" alignItems="center">
                  <img src="./src/assets/guarantee.png" className='me-1' alt="" />
                  <Box>
                     <Typography variant='h6' fontWeight={700}>Warranty Protection</Typography>
                     <Typography variant='body1' color='#898989'>Over 2 years</Typography>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={3} display='flex' justifyContent='center'>
               <Box display="flex" alignItems="center">
                  <img src="./src/assets/shipping.png" className='me-1' alt="" />
                  <Box>
                     <Typography variant='h6' fontWeight={700}>Free Shipping</Typography>
                     <Typography variant='body1' color='#898989'>Order over 150 $</Typography>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={3} display='flex' justifyContent='center'>
               <Box display="flex" alignItems="center">
                  <img src="./src/assets/customer-support.png" className='me-1' alt="" />
                  <Box>
                     <Typography variant='h6' fontWeight={700}>24 / 7 Support</Typography>
                     <Typography variant='body1' color='#898989'>Dedicated support</Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Testimonial;
