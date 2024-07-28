import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, Chip, Divider, IconButton, Tooltip, Stack, styled, useTheme } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'; // Import SwapHoriz icon

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
}));

const ProductCard: React.FC<{ product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
      <StyledCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
        <CardContent>
          {product.discount && (
            <Chip
              label={`-${product.discount}%`}
              color="error"
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
              }}
            />
          )}
          {product.newArrival && (
            <Chip
              label="New"
              color="success"
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
              }}
            />
          )}
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body1" color="text.primary" fontWeight="bold">
            {product.price}
          </Typography>
        </CardContent>
        {isHovered && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'opacity 0.3s ease-in-out',
              opacity: 1,
              zIndex: 10,
              padding: theme.spacing(2),
              boxSizing: 'border-box',
            }}
          >
            <Button
              variant="contained"
              color="inherit" // Use 'inherit' to apply custom colors
              startIcon={<AddShoppingCartIcon />}
              sx={{
                backgroundColor: 'white',
                color: '#c1a08d', // Light brown color

                marginBottom: theme.spacing(2),
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#f5f5f5', // Optional: change hover color
                  color: '#B88E2F', // Ensure text color remains light brown on hover
                },
              }}
            >
              Add to Cart
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <Tooltip title="Share">
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton aria-label="share">
                    <ShareIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <Typography variant="body2" color="white">
                    Share
                  </Typography>
                </Stack>
              </Tooltip>
              <IconButton aria-label="swap">
                <SwapHorizIcon sx={{ color: 'white' }} />
              </IconButton>
              <Tooltip title="Like">
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton aria-label="like">
                    <FavoriteIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <Typography variant="body2" color="white">
                    Like
                  </Typography>
                </Stack>
              </Tooltip>
            </Stack>
          </Box>
        )}
      </StyledCard>
    </Grid>
  );
};

const NewProducts: React.FC = () => {
  const products = [
    {
      image: 'https://i.ibb.co/gD3jW9p/product-1.jpg',
      name: 'Syltherine',
      price: 3500000,
      description: 'Stylish cafe chair',
      discount: 30,
    },
    {
      image: 'https://i.ibb.co/0m4Y7fX/product-2.jpg',
      name: 'Leviosa',
      price: 2500000,
      description: 'Stylish cafe chair',
    },
    {
      image: 'https://i.ibb.co/51q6M3p/product-3.jpg',
      name: 'Lolito',
      price: 14000000,
      description: 'Luxury big sofa',
      discount: 50,
    },
    {
      image: 'https://i.ibb.co/k8zZ99S/product-4.jpg',
      name: 'Respira',
      price: 5000000,
      description: 'Outdoor bar table and stool',
      newArrival: true,
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        New
      </Typography>
      <Divider />
      <Grid container spacing={2} mt={2}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default NewProducts;
