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
      <Container maxWidth='lg' sx={{ position: 'relative', height: '100%' }}>
        <Box sx={{
          width: '50%', height: '60%', backgroundColor: '#FFF3E3', position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translate(0, -50%)',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography sx={{ letterSpacing: 3, fontWeight: 600, fontSize: '16px' }}>New Arrival</Typography>
          <Typography variant='h3' sx={{ lineHeight: '65px', fontWeight: 700, fontSize: '52px', color: '#B88E2F' }}>Discover Our New Collection</Typography>
          <Typography sx={{ fontSize: '18px', my: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Typography>
          <Button sx={{ textTransform: 'uppercase', color: '#fff', backgroundColor: '#B88E2F', borderRadius: 0, px: 5, py: 2, width: 'fit-content', mt: 'auto' }}>Buy now</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

