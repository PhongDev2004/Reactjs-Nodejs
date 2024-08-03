import React from 'react';
import { Box, Button, MenuItem, Select, Typography, IconButton, Grid, FormControl, InputLabel, Pagination, Container } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { addToCart } from 'src/service/cart';
import toast from 'react-hot-toast';
import { addToFavorite } from 'src/service/liked';
import { getProducts } from 'src/service/product';
import { useLoading } from 'src/context/LoadingErrorContext';
import { useCart } from 'src/context/CartContext';
import { IProduct } from 'src/interfaces/Product';
import { useFlashError } from 'src/context/FlashError';

import FeatureIcons from 'src/components/Features';
import ProductCard from 'src/components/ProductCart';
import Banner from 'src/components/Banner';
import HeaderPage from 'src/components/HeaderPage';
import Testimonial from 'src/components/Testimonial';

type Props = {};

const ProductList = (props: Props) => {
  const [showCount, setShowCount] = React.useState<number>(16);
  const [sortBy, setSortBy] = React.useState<string>('Default');
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const { isLoading, setLoading } = useLoading();
  const { error, setError, clearError } = useFlashError();
  const { setQuantity } = useCart();
  const [currentPage, setCurrentPage] = React.useState<number>(1);

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
    if (response.status === 'success') {
      toast.success('Add to favorite successfully!');
    }
  };

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const sortedProducts = React.useMemo(() => {
    let sortedList = [...products];
    switch (sortBy) {
      case 'PriceAsc':
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case 'PriceDesc':
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case 'NameAsc':
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'NameDesc':
        sortedList.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return sortedList;
  }, [products, sortBy]);

  const displayedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * showCount;
    const endIndex = startIndex + showCount;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, showCount]);
  return (
    <>
      <HeaderPage page="List" />
      <Container sx={{ my: 8 }} maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="#FAF3EA">
          <Box display="flex" alignItems="center">
            <IconButton>
              <FilterListIcon />
              <Typography variant="body2">Filter</Typography>
            </IconButton>

            <IconButton>
              <GridViewIcon />
            </IconButton>
            <IconButton>
              <ViewListIcon />
            </IconButton>
            <Typography variant="body2" ml={2}>
              Showing {(currentPage - 1) * showCount + 1}-{Math.min(currentPage * showCount, products.length)} of {products.length} results
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" mr={2}>
              Show
            </Typography>
            <Select value={showCount} onChange={(e) => setShowCount(Number(e.target.value))} displayEmpty variant="outlined" size="small">
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={48}>48</MenuItem>
            </Select>
            <Typography variant="body2" ml={2} mr={2}>
              Sort by
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select value={sortBy} onChange={handleSortChange} displayEmpty label="Sort By">
                <MenuItem value="Default">Default</MenuItem>
                <MenuItem value="PriceAsc">Price: Low to High</MenuItem>
                <MenuItem value="PriceDesc">Price: High to Low</MenuItem>
                <MenuItem value="NameAsc">Name: A to Z</MenuItem>
                <MenuItem value="NameDesc">Name: Z to A</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {displayedProducts.map((product) => (
            <Grid item xs={3} key={product._id}>
              <ProductCard handleAddToCart={handleAddToCart} product={product} handleAddToFav={handleAddToFav} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination count={Math.ceil(products.length / showCount)} page={currentPage} onChange={handlePageChange} color="primary" />
        </Box>
      </Container>
      <Testimonial />
    </>
  );
};

export default ProductList;
