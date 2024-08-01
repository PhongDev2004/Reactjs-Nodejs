import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { IProduct } from '../interfaces/Product';
import IconButton from '@mui/material/IconButton';
import { getProducts } from '../service/product';
import Loading from '../components/ui/Loading';
import Banner from '../components/Banner';
import { useLoading } from 'src/context/LoadingErrorContext';
import { useFlashError } from 'src/context/FlashError';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from '../components/ProductCart';
import { useCart } from 'src/context/CartContext';
import { addToCart } from 'src/service/cart';
import toast from 'react-hot-toast';
import { addToFavorite } from 'src/service/liked';
import { useLiked } from 'src/context/LikedContext';
const Homepage = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const { setProducts: setProductsFav } = useLiked();
  const { isLoading, setLoading } = useLoading();
  const { error, setError, clearError } = useFlashError();
  const { setQuantity } = useCart();

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleAddToCart = async (productId: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await addToCart(productId, 1);
    if (response.status === 'success') {
      toast.success('Add to cart successfully!');
    }
    setQuantity(response.data.result);
  };

  const handleAddToFav = async (productId: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await addToFavorite(productId);
    setProductsFav(response.data.favorite.products);

    if (response.status === 'success') {
      toast.success('Add to favorite successfully!');
    }
  }

  return (
    <>
      <Banner />
      {error ? (
        <Alert
          severity="error"
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={clearError}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error}
        </Alert>
      ) : (
        <>
          <Container sx={{ my: 8 }} maxWidth="lg">
            <Loading isShow={isLoading} />

            {/* Category */}
            <Typography variant='h4' fontWeight='bold' textAlign='center'>Browse The Range</Typography>
            <Typography color='#666666' mb={5} variant='body1' fontWeight='medium' textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src="./src/assets/diningroom.png" alt="" />
                <Typography variant='body1' textAlign='center' fontWeight='bold' my={2} fontSize={18}>Dining</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="./src/assets/livingroom.png" alt="" />
                <Typography variant='body1' textAlign='center' fontWeight='bold' my={2} fontSize={18}>Living</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="./src/assets/bedroom.png" alt="" />
                <Typography variant='body1' textAlign='center' fontWeight='bold' my={2} fontSize={18}>Bedroom</Typography>
              </Grid>
            </Grid>

            {/* Products */}
            <Typography variant='h4' my={4} fontWeight='bold' textAlign='center'>Our Products</Typography>
            <Grid container spacing={4}>

              {products.slice(0, 8).map((product) => (
                <Grid item xs={3} key={product._id}>
                  <ProductCard handleAddToCart={handleAddToCart} product={product} handleAddToFav={handleAddToFav} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default Homepage;
