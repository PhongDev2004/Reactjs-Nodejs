import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { IProduct } from "../interfaces/Product";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { getProducts } from "../service/product";
import IconLabelButtons from "./ui/Button";
import { blue, pink } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Loading from "./ui/Loading";
import Banner from "./Banner";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import { useLoading } from "src/context/LoadingErrorContext";
import { useFlashError } from "src/context/FlashError";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
const ProductList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  // const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const itemsPerPage = 12;
  const { isLoading, setLoading } = useLoading();
  const { error, setError, clearError } = useFlashError();
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (page - 1) * itemsPerPage;
  const visibleProducts = searchTerm
    ? filteredProducts.slice(startIndex, startIndex + itemsPerPage)
    : products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(
    (searchTerm ? filteredProducts.length : products.length) / itemsPerPage
  );

  return (
    <>
      <Banner />
      {error ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={clearError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error}
        </Alert>
      ) : (
        <>
          <Container className="w-full mt-6 mb-6" maxWidth="xl">
            <Loading isShow={isLoading} />
            <section className="mx-auto mt-8 mb-8">
              <h3 className="text-2xl font-bold">New Arrival</h3>
            </section>
            <div className="flex justify-end items-center mb-5">
              <TextField
                label="Search Products"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="my-4 w-60"
              />
            </div>

            <Box sx={{ flexGrow: 1 }}>
              {visibleProducts.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                  No products found.
                </Typography>
              ) : (
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {visibleProducts?.map((product) => (
                    <Grid item xs={2} sm={4} md={3} lg={3} key={product._id}>
                      <Card>
                        <Link to={`/product/${product._id}`}>
                          <CardMedia
                            component="img"
                            height="194"
                            image={product.image}
                            alt={product.name}
                          />
                        </Link>

                        <CardContent>
                          <Link to={`/product/${product._id}`}>
                            <Typography
                              className="truncate"
                              variant="body2"
                              color="text.secondary"
                            >
                              {product.name}
                            </Typography>
                          </Link>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{ color: pink[500] }} />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon sx={{ color: blue[500] }} />
                          </IconButton>

                          <div className="flex w-full justify-end items-center">
                            <IconLabelButtons
                              title="Buy now"
                              endIcon={<LocalMallIcon />}
                            />
                          </div>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
            <Pagination
              className="mt-4 flex justify-end items-center"
              count={totalPages}
              color="primary"
              page={page}
              onChange={(event, value) => setPage(value)}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default ProductList;
