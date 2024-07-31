import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IProduct } from 'src/interfaces/Product';
import { Link } from 'react-router-dom';

type Props = {
   product: IProduct;
   handleAddToCart: (productId: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => void;
   handleAddToFav: (productId: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ProductCard({ product, handleAddToCart, handleAddToFav }: Props) {
   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      const overlay = target.querySelector('.overlay') as HTMLElement;
      overlay.style.display = 'block';
   }

   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      const overlay = target.querySelector('.overlay') as HTMLElement;
      overlay.style.display = 'none';
   }

   return (
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
         <Card onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleMouseEnter(e)} sx={{ maxWidth: 345, position: 'relative' }}>
            <CardMedia
               component="img"
               height="300"
               image={product.image}
               alt="Paella dish"
            />
            <CardContent>
               <Typography variant="body1" fontWeight='bold' fontSize='20px' >
                  {product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}
               </Typography>
               <Typography variant="body1" fontWeight='medium' color='#898989' fontSize='16px' my={1} >
                  {product.brand}
               </Typography>
               <Typography variant="body1" fontWeight={600} fontSize='18px' >
                  Rp {product.price}
               </Typography>
            </CardContent>
            <Box className='overlay' sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'none' }}>
               <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={(e) => handleAddToCart(product._id, e)} className='bg-white text-nowrap text-[#B88E2F] py-2 px-10 font-semibold text-lg w-fit mb-3'>Add to cart</button>
                  <Box display='flex' justifyContent='space-between' width='90%' mx='auto'>
                     <Button sx={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '12px', fontWeight: 600 }}>
                        <ShareIcon fontSize='small' sx={{ mr: 0.5 }} /> Share
                     </Button>

                     <Button sx={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '12px', fontWeight: 600 }}>
                        <SyncAltIcon fontSize='small' sx={{ mr: 0.5 }} /> Compare
                     </Button>

                     <Button onClick={(e) => handleAddToFav(product._id, e)} sx={{ display: 'flex', alignItems: 'center', color: '#fff', fontSize: '12px', fontWeight: 600 }}>
                        <FavoriteBorderIcon fontSize='small' sx={{ mr: 0.5 }} /> Like
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Card>
      </Link>
   );
}
