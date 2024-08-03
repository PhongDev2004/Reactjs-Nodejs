import instance from "./api";

// type orderInfo = {
//    orderItems: {
//       product: string;
//       quantity: number;
//       price: number;
//    }[];
//    deliveryDetails: {
//       firstName: string;
//       lastName: string;
//       companyName?: string;
//       country?: string;
//       streetAddress: string;
//       city: string;
//       province: string;
//       phone: string;
//       emailAddress: string;
//       additionalInfo?: string;
//    },
//    userId: string;
// }

export const createOrder = async (orderInfo: any) => {
   try {
      const { data } = await instance.post('/checkout/create-checkout-session', orderInfo);
      return data;
   } catch (error) {
      console.log(error);
   }
}

export const getOrder = async (orderId: string | null) => {
   try {
      const { data } = await instance.get(`/checkout/getOrder/${orderId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
}