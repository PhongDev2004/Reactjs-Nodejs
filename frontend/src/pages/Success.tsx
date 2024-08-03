import { Button, Container } from '@mui/material'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCart } from 'src/context/CartContext'
import { clearCart } from 'src/service/cart'
import { getOrder } from 'src/service/order'

const Success = () => {
   const [searchParams] = useSearchParams()

   const session_id = searchParams.get("session_id")

   useEffect(() => {
      (async () => {
         try {
            if (session_id) {
               const { data } = await getOrder(session_id)
               console.log(data)
               await clearCart()
            }
         } catch (error) {
            console.log(error)
         }
      })()
   }, [])

   return (
      <Container maxWidth='lg' sx={{ height: '500px', py: 5 }}>
         <h1 className='text-green-300 text-3xl font-bold mb-5'>Payment Successful!</h1>
         <Link to='/'>
            <Button variant="contained" color="primary">Continue Shopping</Button>
         </Link>
      </Container>
   )
}

export default Success