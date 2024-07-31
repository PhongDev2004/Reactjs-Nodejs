import {
   Box,
   Button,
   Container,
   Divider,
   FormControl,
   Grid,
   Input,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import HeaderPage from 'src/components/HeaderPage';
import Testimonial from 'src/components/Testimonial';
import { useCart } from 'src/context/CartContext';

const schema = Joi.object({
   firstName: Joi.string().required().messages({
      'string.empty': 'First Name is required',
   }),
   lastName: Joi.string().required().messages({
      'string.empty': 'Last Name is required',
   }),
   companyName: Joi.string().allow('').messages({
      'string.empty': 'Company Name is required',
   }),
   country: Joi.string().required().messages({
      'string.empty': 'Country is required',
   }),
   streetAddress: Joi.string().required().messages({
      'string.empty': 'Street Address is required',
   }),
   city: Joi.string().required().messages({
      'string.empty': 'City is required',
   }),
   province: Joi.string().required().messages({
      'string.empty': 'Province is required',
   }),
   zipCode: Joi.string().required().messages({
      'string.empty': 'Zip Code is required',
   }),
   phone: Joi.string().required().messages({
      'string.empty': 'Phone is required',
   }),
   email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email',
   }),
   additionalInfo: Joi.string().allow('').messages({
      'string.empty': 'Additional Information is required',
   }),
});

type FormData = {
   firstName: string;
   lastName: string;
   companyName: string;
   country: string;
   streetAddress: string;
   city: string;
   province: string;
   zipCode: string;
   phone: string;
   email: string;
   additionalInfo: string;
};

const Checkout = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: joiResolver(schema),
   });

   const [city, setCity] = React.useState('');
   const [country, setCountry] = React.useState('');
   const { cart, setCart, setQuantity } = useCart();
   console.log(cart?.cart.products);

   const setValue = (field: string, value: string, options: any) => {
      if (field === 'city') {
         setCity(value);
      } else if (field === 'country') {
         setCountry(value);
      }
   }

   const onSubmit = (data: FormData) => {
      console.log('Form Data:', data);
      // Handle form submission
   };

   return (
      <>
         <HeaderPage page="Checkout" />
         <Container maxWidth="lg" sx={{ my: 5 }}>
            <Typography variant="h4" component="h4" fontWeight={700} align="left" sx={{ my: 5 }}>
               Billing details
            </Typography>
            <Box className="grid grid-cols-2 gap-16" component="form" onSubmit={handleSubmit(onSubmit)}>
               <Grid className="grid col-span-1" container item spacing={3}>
                  <Grid item xs={6}>
                     <FormControl sx={{ mb: 1 }} fullWidth >
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input id="firstName" type="text" {...register('firstName')} />
                        {errors.firstName && (
                           <Typography variant="body2" color="error">
                              {errors.firstName.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                     <FormControl sx={{ mb: 1 }} fullWidth >
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input id="lastName" type="text" {...register('lastName')} />
                        {errors.lastName && (
                           <Typography variant="body2" color="error">
                              {errors.lastName.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="companyName">Company Name (Optional)</InputLabel>
                        <Input id="companyName" type="text" {...register('companyName')} />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl variant='standard' sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="country">Country / Region</InputLabel>
                        <Select
                           id="country"
                           {...register('country')}
                           defaultValue=""
                           value={country}
                           onChange={(event) => setValue('country', event.target.value, { shouldValidate: true })}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value="Viet Nam">Viet Nam</MenuItem>
                           <MenuItem value="USA">USA</MenuItem>
                           <MenuItem value="Canada">Canada</MenuItem>
                        </Select>
                        {errors.country && (
                           <Typography variant="body2" color="error">
                              {errors.country.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="streetAddress">Street Address</InputLabel>
                        <Input id="streetAddress" type="text" {...register('streetAddress')} />
                        {errors.streetAddress && (
                           <Typography variant="body2" color="error">
                              {errors.streetAddress.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl variant='standard' sx={{ mb: 1 }} fullWidth >
                        <InputLabel htmlFor="city">Town / City</InputLabel>
                        <Select
                           id="city"
                           {...register('city')}
                           defaultValue=""
                           value={city}
                           onChange={(event) => setValue('city', event.target.value, { shouldValidate: true })}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value="Ha Noi">Ha Noi</MenuItem>
                           <MenuItem value="Ho Chi Minh">Ho Chi Minh</MenuItem>
                           <MenuItem value="Da Nang">Da Nang</MenuItem>
                        </Select>
                        {errors.city && (
                           <Typography variant="body2" color="error">
                              {errors.city.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth >
                        <InputLabel htmlFor="province">Province</InputLabel>
                        <Input id="province" type="text" {...register('province')} />
                        {errors.province && (
                           <Typography variant="body2" color="error">
                              {errors.province.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="zipCode">Zip Code</InputLabel>
                        <Input id="zipCode" type="text" {...register('zipCode')} />
                        {errors.zipCode && (
                           <Typography variant="body2" color="error">
                              {errors.zipCode.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="phone">Phone</InputLabel>
                        <Input id="phone" type="text" {...register('phone')} />
                        {errors.phone && (
                           <Typography variant="body2" color="error">
                              {errors.phone.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth >
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" type="text" {...register('email')} />
                        {errors.email && (
                           <Typography variant="body2" color="error">
                              {errors.email.message}
                           </Typography>
                        )}
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor="additionalInfo">Additional Information</InputLabel>
                        <Input id="additionalInfo" type="text" {...register('additionalInfo')} />
                     </FormControl>
                  </Grid>
               </Grid>
               <Box className="grid col-span-1 align-top h-fit">
                  <p className="w-full my-5 flex text-2xl font-semibold">
                     Total <span className="ms-auto">Subtotal</span>
                  </p>
                  {cart?.cart.products.map((product, index) => (
                     <p key={index} className="w-full flex text-[#9F9F9F]">
                        {product.productId.name.length > 20 ? product.productId.name.slice(0, 20) + '...' : product.productId.name
                        }{" "} x {product.quantity}{' '}
                        <span className="ms-auto">Rs. {product.productId.price}</span>
                     </p>
                  ))}
                  <p className="w-full font-semibold my-5 flex">
                     Subtotal <span className="ms-auto">Rs. {
                        cart?.cart.products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0)
                     }</span>
                  </p>
                  <p className="w-full font-semibold flex">
                     Total <span className="ms-auto font-bold text-2xl text-[#B88E2F]">Rs. {cart?.cart.products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0)}</span>
                  </p>
                  <Divider sx={{ my: 3 }} />
                  <ul className="list-disc ps-5 font-semibold text-lg">
                     <li>Direct Bank Transfer</li>
                  </ul>
                  <Typography variant="body2" sx={{ my: 2, color: '#9F9F9F' }}>
                     Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
                     order won’t be shipped until the funds have cleared in our account.
                  </Typography>
                  <ul className="list-disc ps-5 font-semibold text-[#9F9F9F]">
                     <li>Direct Bank Transfer</li>
                     <li>Cash On Delivery</li>
                  </ul>
                  <Typography variant="body2" sx={{ my: 2 }}>
                     Your personal data will be used to support your experience throughout this website, to manage access to
                     your account, and for other purposes described in our{' '}
                     <Typography component="span" sx={{ fontWeight: 700 }}>
                        privacy policy
                     </Typography>
                     .
                  </Typography>
                  <Button
                     variant="outlined"
                     color="inherit"
                     sx={{ color: '#000', transform: 'initial', px: 8, py: 1, width: 'fit-content', mx: 'auto' }}
                     type="submit"
                  >
                     Place an order
                  </Button>
               </Box>
            </Box>
         </Container>
         <Testimonial />
      </>
   );
};

export default Checkout;
