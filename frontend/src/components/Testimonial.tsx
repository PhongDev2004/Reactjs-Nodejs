import { Box, Grid, Typography } from '@mui/material';

const Testimonial = () => {
  return (
    <Box sx={{ backgroundColor: '#FAF3EA', py: 10, width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} textAlign="center">
            <img src="./src/assets/trophy.png" className="me-1" alt="High Quality" />
            <Box mt={{ xs: 2, md: 0 }} ml={{ md: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                High Quality
              </Typography>
              <Typography variant="body1" color="#898989">
                crafted from top materials
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} textAlign="center">
            <img src="./src/assets/guarantee.png" className="me-1" alt="Warranty Protection" />
            <Box mt={{ xs: 2, md: 0 }} ml={{ md: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                Warranty Protection
              </Typography>
              <Typography variant="body1" color="#898989">
                Over 2 years
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} textAlign="center">
            <img src="./src/assets/shipping.png" className="me-1" alt="Free Shipping" />
            <Box mt={{ xs: 2, md: 0 }} ml={{ md: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                Free Shipping
              </Typography>
              <Typography variant="body1" color="#898989">
                Order over 150 $
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} textAlign="center">
            <img src="./src/assets/customer-support.png" className="me-1" alt="24/7 Support" />
            <Box mt={{ xs: 2, md: 0 }} ml={{ md: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                24 / 7 Support
              </Typography>
              <Typography variant="body1" color="#898989">
                Dedicated support
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;
