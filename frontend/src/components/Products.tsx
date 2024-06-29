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

const ProductList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Banner />

      <Container className="w-full mt-6 mb-6" maxWidth="xl">
        <Loading isShow={loading} />
        <section className="mx-auto mt-8 mb-8">
          <h3 className="text-2xl font-bold">New Arrival</h3>
        </section>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products?.map((product) => (
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
        </Box>
      </Container>
    </>
  );
};

export default ProductList;
