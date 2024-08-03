import { useEffect, useState } from 'react';
import { ProductCart } from 'src/interfaces/ProductCart';
import { getCart, removeFromCart, updateCart } from 'src/service/cart';
import { Box, Button, Container, Grid, Input, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useCart } from 'src/context/CartContext';
import HeaderPage from '../components/HeaderPage';
import DeleteIcon from '@mui/icons-material/Delete';
import Testimonial from 'src/components/Testimonial';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [products, setProducts] = useState<ProductCart[]>([]);
  const { cart, setQuantity } = useCart();
  useEffect(() => {
    (async () => {
      try {
        const response = await getCart();
        setProducts(response.data.cart.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cart]);

  const handleRemove = async (productId: string | undefined) => {
    try {
      await removeFromCart(productId);
      setProducts(products.filter((product) => product?.productId._id !== productId));
      setQuantity((prev) => Number(prev) - 1);
    } catch (error) {
      console.log(error);
    }
  };



  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.productId.price * product.quantity;
    });
    return totalPrice;
  };
  return (
    <>
      <HeaderPage page='Cart' />
      <Container maxWidth='lg' sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TableContainer component={Paper}>
              <Table sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none"
                },
              }}>
                {/* Head */}
                <TableHead sx={{ backgroundColor: '#F9F1E7' }}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">Product</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">Price</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">Quantity</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">Subtotal</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>

                {/* Body */}
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={product.productId.image} width={100} />
                      </TableCell>
                      <TableCell sx={{ color: '#9F9F9F' }} align="left">
                        {product.productId.name.length > 20 ? product.productId.name.slice(0, 20) + '...' : product.productId.name}
                      </TableCell>
                      <TableCell sx={{ color: '#9F9F9F' }} align="left">Rs. {product.productId.price}</TableCell>
                      <TableCell align="left">
                        <Input
                          value={product.quantity}
                          readOnly
                          sx={{
                            textAlign: 'center',
                            mx: 1,
                            width: 30,
                          }}
                          inputProps={{
                            style: { textAlign: 'center' },
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">Rs. {product.productId.price * product.quantity}</TableCell>
                      <TableCell align="left"><DeleteIcon onClick={() => handleRemove(product.productId._id)} fontSize='small' sx={{ color: '#B88E2F', cursor: 'pointer' }} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#F9F1E7', display: 'flex', flexDirection: 'column', alignItems: 'center', px: 10 }}>
              <Typography variant='h5' mb={5} py={2} fontWeight={700}>Cart Total</Typography>
              <Typography variant='body1' display='flex' width='100%' fontWeight={600}>Subtotal: <Typography ml='auto' component='span' color='#9F9F9F'>Rs. {calculateTotalPrice()}</Typography></Typography>
              <Typography variant='body1' display='flex' alignItems='center' my={4} width='100%' fontWeight={600}>Total: <Typography ml='auto' component='span' fontWeight={700} variant='h6' color='#B88E2F'>Rs. {calculateTotalPrice()}</Typography></Typography>
              <Link to='/checkout'>
                <Button variant='outlined' color="inherit" sx={{ color: '#000', transform: 'initial', mb: 8 }}>Check Out</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Testimonial />
    </>
  );
};

export default Cart;
