import { useEffect, useState } from 'react';
import { ProductCart } from 'src/interfaces/ProductCart';
import { getCart, removeFromCart, updateCart } from 'src/service/cart';
import { Box, Container, Grid, Typography, Paper, IconButton, Button, Divider, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartProduct = () => {
  const [products, setProducts] = useState<ProductCart[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getCart();
        setProducts(response.data.cart.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleRemove = async (productId: string | undefined) => {
    try {
      const response = await removeFromCart(productId);
      setProducts(products.filter((product) => product.productId._id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrease = async (productId: string | undefined) => {
    try {
      const product = products.find((product) => product.productId._id === productId);
      if (product) {
        const response = await updateCart(productId, product.quantity + 1);
        setProducts(products.map((product) => (product.productId._id === productId ? { ...product, quantity: product.quantity + 1 } : product)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrease = async (productId: string | undefined) => {
    try {
      const product = products.find((product) => product.productId._id === productId);
      if (product) {
        const response = await updateCart(productId, product.quantity - 1);
        if (product.quantity === 1) {
          return handleRemove(productId);
        }
        setProducts(products.map((product) => (product.productId._id === productId ? { ...product, quantity: product.quantity - 1 } : product)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bgcolor="background.paper" py={{ xs: 2, md: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" color="text.primary" fontWeight="bold">
          Shopping Cart
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} mt={{ xs: 0, sm: 1 }}>
          <Grid item xs={12} lg={8}>
            {products.map((product) => (
              <Paper key={product.productId._id} sx={{ mb: 2, p: { xs: 2, md: 3 } }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={2}>
                    <a href="#">
                      <img src={product.productId.image} alt="image" style={{ width: '100%' }} />
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    sx={{
                      display: 'grid',
                      alignItems: 'center',
                      gridTemplateColumns: '5fr 1fr 0.5fr',
                      gap: 5,
                    }}
                  >
                    <Box>
                      <Typography variant="body1" fontWeight="medium" fontSize={14}>
                        {product.productId.name}
                      </Typography>
                      <Box mt={1} sx={{ display: 'flex' }}>
                        <Button
                          startIcon={<FavoriteBorderIcon />}
                          size="small"
                          sx={{
                            mr: 1,
                            fontSize: 10,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          Add to Favorites
                        </Button>
                        <Button
                          startIcon={<DeleteOutlineIcon />}
                          color="error"
                          size="small"
                          onClick={() => handleRemove(product.productId._id)}
                          sx={{
                            fontSize: 10,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <IconButton onClick={() => handleDecrease(product.productId._id)} size="small">
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        value={product.quantity}
                        size="small"
                        sx={{
                          width: 40,
                          textAlign: 'center',
                        }}
                        inputProps={{
                          style: { textAlign: 'center' },
                        }}
                      />
                      <IconButton onClick={() => handleIncrease(product.productId._id)} size="small">
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Typography variant="body1" fontWeight="bold" textAlign="center">
                      ${product.productId.price * product.quantity}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}

            <Box
              sx={{
                display: { xl: 'block', xs: 'none' },
                mt: { xl: 8 },
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                People also bought
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[...Array(3)].map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 2,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: 1,
                        bgcolor: 'background.paper',
                        borderColor: 'divider',
                      }}
                      variant="outlined"
                    >
                      <Box component="a" href="#" sx={{ overflow: 'hidden', borderRadius: 2 }}>
                        <img
                          style={{
                            width: '11rem',
                            height: '11rem',
                          }}
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="product"
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="a"
                          href="#"
                          sx={{
                            textDecoration: 'none',
                            color: 'text.primary',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                            lineHeight: 1,
                          }}
                        >
                          Branded Premium Basic Mesh Shorts
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          This generation has some improvements, including a longer continuous battery life.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1" color="text.primary" sx={{ textDecoration: 'line-through' }} fontWeight="bold">
                          $399.99
                        </Typography>
                        <Typography variant="body1" color="error" fontWeight="bold">
                          $299
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <IconButton
                          sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            borderRadius: 1,
                            '&:hover': {
                              bgcolor: 'background.default',
                              color: 'primary.main',
                            },
                          }}
                          size="small"
                        >
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<AddShoppingCartIcon />}
                          fullWidth
                          size="small"
                          // sx={{ padding: '5px' }}
                        >
                          Add to cart
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h6" fontWeight="bold">
                Order Summary
              </Typography>
              <Box mt={2}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    Original Price
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    $7,592.00
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    Savings
                  </Typography>
                  <Typography variant="body2" color="success.main" fontWeight="medium">
                    -$299.00
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    Store Pickup
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    $99
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    Tax
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    $799
                  </Typography>
                </Box>
                <Divider />
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography variant="body1" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    $8,191.00
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained" color="primary" fullWidth startIcon={<ShoppingCartIcon />} sx={{ mt: 2 }}>
                Proceed to Checkout
              </Button>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Typography variant="body2" color="text.secondary">
                  or
                </Typography>
                <Button href="#" startIcon={<ArrowForwardIcon />} size="small" sx={{ textDecoration: 'underline', ml: 1 }}>
                  Continue Shopping
                </Button>
              </Box>
            </Paper>
            <Paper sx={{ p: { xs: 2, sm: 3 }, mt: 2 }}>
              <Box component="form">
                <Typography fontWeight="bold" variant="body2" mb={1}>
                  Do you have a voucher or gift card?
                </Typography>
                <TextField id="voucher" variant="outlined" fullWidth size="small" />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Apply
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartProduct;
