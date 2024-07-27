import * as React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Stack, Typography, Divider, IconButton, Tooltip, Chip, Slider, TextField } from '@mui/material';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';

const ProductPage = () => {
  return (
    <Card sx={{ margin: 'auto' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
              component="img"
              height="400"
              image="https://fastly.picsum.photos/id/901/200/200.jpg?hmac=BofL61KMrHssTtPwqR7iI272BvpjGsjt5PJ_ultE4Z8" // Replace with your image URL
              alt="Sofa"
            />
            <Stack direction="column" spacing={1} sx={{ mt: 2, ml: 2 }}>
              <Box>
                <img
                  src="https://fastly.picsum.photos/id/901/200/200.jpg?hmac=BofL61KMrHssTtPwqR7iI272BvpjGsjt5PJ_ultE4Z8" // Replace with thumbnail image URL
                  alt="Sofa thumbnail"
                  height={50}
                />
              </Box>
              <Box>
                <img
                  src="https://fastly.picsum.photos/id/901/200/200.jpg?hmac=BofL61KMrHssTtPwqR7iI272BvpjGsjt5PJ_ultE4Z8" // Replace with thumbnail image URL
                  alt="Sofa thumbnail"
                  height={50}
                />
              </Box>
              <Box>
                <img
                  src="https://fastly.picsum.photos/id/901/200/200.jpg?hmac=BofL61KMrHssTtPwqR7iI272BvpjGsjt5PJ_ultE4Z8" // Replace with thumbnail image URL
                  alt="Sofa thumbnail"
                  height={50}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Asgaard sofa
            </Typography>
            <Typography variant="body1" gutterBottom>
              25.000.000₫
            </Typography>
            <Rating name="simple-controlled" value={4} readOnly sx={{ mb: 2 }} />
            <Typography variant="body2" gutterBottom>
              5 Customer Review
            </Typography>
            <Typography variant="body2" gutterBottom>
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Size
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="L" variant="outlined" />
              <Chip label="XL" variant="outlined" />
              <Chip label="XS" variant="outlined" />
            </Stack>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Color
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Purple" variant="outlined" sx={{ backgroundColor: '#BDBDBD', color: '#424242' }} />
              <Chip label="Black" variant="outlined" sx={{ backgroundColor: '#BDBDBD', color: '#424242' }} />
              <Chip label="Gold" variant="outlined" sx={{ backgroundColor: '#BDBDBD', color: '#424242' }} />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Button variant="outlined" size="small" disabled>
                -
              </Button>
              <TextField
                value="1"
                type="number"
                InputProps={{
                  inputProps: { min: 1, style: { textAlign: 'center' } },
                  readOnly: true,
                }}
                sx={{ width: 40 }}
              />
              <Button variant="outlined" size="small" disabled>
                +
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
              <Button variant="contained" size="large">
                Add To Cart
              </Button>
              <Button variant="contained" size="large">
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <span>+</span>
                  </IconButton>
                </Tooltip>
                Compare
              </Button>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1}>
              <Typography variant="caption" gutterBottom>
                SKU : SS001
              </Typography>
              <Typography variant="caption" gutterBottom>
                Category : Sofas
              </Typography>
              <Typography variant="caption" gutterBottom>
                Tags : Sofa, Chair, Home, Shop
              </Typography>
              <Typography variant="caption" gutterBottom>
                Share:
              </Typography>
              <Stack direction="row" spacing={1}>
                <FacebookShareButton url="https://www.example.com">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton url="https://www.example.com">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton url="https://www.example.com">
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Stack>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductPage;
