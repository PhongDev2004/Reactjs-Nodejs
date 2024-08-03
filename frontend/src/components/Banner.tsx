import { useState, useEffect } from 'react';
import background from '../assets/home-page-hero-bg.png';
import { Box, Button, Container, Typography } from '@mui/material';

const Banner = () => {
  const [bgHeight, setBgHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => {
      setBgHeight(img.height);
    };
  }, []);

  return (
    <Box sx={{ background: `url(${background})`, width: '100%', height: `${bgHeight}px` }}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <Box
          sx={{
            width: { xs: '90%', sm: '70%', md: '50%' },
            height: 'auto',
            backgroundColor: '#FFF3E3',
            position: 'absolute',
            top: '50%',
            right: { xs: '50%', md: '0' },
            transform: { xs: 'translate(50%, -50%)', md: 'translate(0, -50%)' },
            padding: { xs: '2rem', md: '3rem' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ letterSpacing: 3, fontWeight: 600, fontSize: '16px' }}>New Arrival</Typography>
          <Typography variant="h3" sx={{ lineHeight: { xs: '40px', md: '65px' }, fontWeight: 700, fontSize: { xs: '32px', md: '52px' }, color: '#B88E2F' }}>
            Discover Our New Collection
          </Typography>
          <Typography sx={{ fontSize: { xs: '14px', md: '18px' }, my: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Typography>
          <Button sx={{ textTransform: 'uppercase', color: '#fff', backgroundColor: '#B88E2F', borderRadius: 0, px: { xs: 3, md: 5 }, py: { xs: 1, md: 2 }, width: 'fit-content', mt: 'auto' }}>Buy now</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
