import { Box, Button, Container, Divider, FormControl, Grid, Input, InputLabel, List, ListItem, Typography } from "@mui/material"
import HeaderPage from "src/components/HeaderPage"

const Checkout = () => {
   return (
      <>
         <HeaderPage page="Checkout" />
         <Container maxWidth='lg' sx={{ my: 5 }}>
            <Typography variant='h4' component='h4' fontWeight={700} align='left' sx={{ my: 5 }}>
               Billing details
            </Typography>
            <Box className="grid grid-cols-2 gap-16" component='form'>
               <Grid className="grid col-span-1" container item spacing={3}>
                  <Grid item xs={6}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='firstName'>First Name</InputLabel>
                        <Input id='firstName' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                        <Input id='lastName' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='address'>Company Name (Optional)</InputLabel>
                        <Input id='address' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='city'>Contry / Region</InputLabel>
                        <Input id='city' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='zip'>Street address</InputLabel>
                        <Input id='zip' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='email'>Town / City</InputLabel>
                        <Input id='email' type='email' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='phone'>Province</InputLabel>
                        <Input id='phone' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='phone'>Zip Code</InputLabel>
                        <Input id='phone' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='phone'>Phone</InputLabel>
                        <Input id='phone' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='phone'>Email address</InputLabel>
                        <Input id='phone' type='text' />
                     </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                     <FormControl sx={{ mb: 1 }} fullWidth>
                        <InputLabel htmlFor='phone'>Additional infomation</InputLabel>
                        <Input id='phone' type='text' />
                     </FormControl>
                  </Grid>
               </Grid>
               <Box className="grid col-span-1 align-top h-fit">
                  <p className="w-full my-5 flex text-2xl font-semibold">Total <span className="ms-auto">Subtotal</span></p>
                  <p className="w-full flex text-[#9F9F9F]">Asgaard sofa x 1 <span className="ms-auto">Rs. 250,000.00</span></p>
                  <p className="w-full font-semibold my-5 flex">Subtotal <span className="ms-auto">Rs. 250,000.00</span></p>
                  <p className="w-full font-semibold flex">Total <span className="ms-auto font-bold text-2xl text-[#B88E2F]">Rs. 250,000.00</span></p>
                  <Divider sx={{ my: 3 }} />
                  <ul className="list-disc ps-5 font-semibold text-lg">
                     <li>Direct Bank Transfer</li>
                  </ul>
                  <Typography variant='body2' sx={{ my: 2, color: '#9F9F9F' }}>
                     Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                  </Typography>
                  <ul className="list-disc ps-5 font-semibold text-[#9F9F9F]">
                     <li>Direct Bank Transfer</li>
                     <li>Cash On Delivery</li>
                  </ul>
                  <Typography variant='body2' sx={{ my: 2 }}>
                     Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Typography component='span' sx={{ fontWeight: 700 }}>privacy policy</Typography>.
                  </Typography>
                  <Button variant='outlined' color="inherit" sx={{ color: '#000', transform: 'initial', px: 8, py: 1, width: 'fit-content', mx: 'auto' }}>Place an order</Button>
               </Box>
            </Box>
         </Container >
      </>
   )
}

export default Checkout