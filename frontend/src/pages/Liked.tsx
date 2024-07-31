import * as React from 'react';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { Box, Typography } from '@mui/material';
import { removeFromFavorite } from 'src/service/liked';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { addToCart } from 'src/service/cart';
import { useCart } from 'src/context/CartContext';
import { useLiked } from 'src/context/LikedContext';

export interface LikedDialogProps {
   open: boolean;
   handleClose: () => void;
}
export default function LikedDialog({ open, handleClose }: LikedDialogProps) {
   const { products, setProducts } = useLiked();
   const { setCart, setQuantity: setCartQuantity } = useCart();

   const handleAddToCart = async (productId: string | undefined, quantity: number) => {
      const response = await addToCart(productId, quantity);
      if (response.status === 'success') {
         toast.success('Add to cart successfully!');
      }
      setCartQuantity(response.data.result);
      setCart(response.data);
   };

   const handleRemoveFromLiked = async (productId: string | undefined) => {
      const response = await removeFromFavorite(productId);
      if (response.status === 'success') {
         toast.success('Remove from liked successfully');
      }
      setProducts(products.filter((product: any) => product._id !== productId));
   }

   return (
      <React.Fragment>
         <Dialog fullWidth open={open} onClose={handleClose} sx={{ height: '500px', overflowY: 'scroll' }}>
            <DisabledByDefaultIcon onClick={handleClose} sx={{ m: 2, ml: 'auto', mb: 0, cursor: 'pointer' }} />
            <Typography textAlign="center" fontWeight="bold" color="#B88E2F" fontSize={24} p={0}>
               Liked
            </Typography>
            <DialogContent>
               {products.map((product: any) => (
                  <Box display="flex" justifyContent="space-between" alignItems="center" key={product._id} mb={1}>
                     <Box display="flex" alignItems="center">
                        <img width={100} src={product.image} alt={product.name} />
                        <Box ml={1}>
                           <Typography fontWeight={700}>{product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</Typography>
                           <Typography fontWeight={700} color="red">
                              {product.price}
                           </Typography>
                        </Box>
                     </Box>
                     <Button variant="contained" color="primary" onClick={() => handleAddToCart(product._id, 1)}>
                        <AddShoppingCartIcon />
                     </Button>
                     <Button onClick={() => handleRemoveFromLiked(product._id)} variant="contained" color="error">
                        <DeleteOutlineIcon />
                     </Button>
                  </Box>
               ))}
            </DialogContent>
            <DialogActions></DialogActions>
         </Dialog>
      </React.Fragment>
   );
}
