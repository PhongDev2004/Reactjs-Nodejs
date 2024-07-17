import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../interfaces/Product';
import { getProduct } from '../service/product';
import Loading from './ui/Loading';
import { addToCart } from 'src/service/cart';
import toast from 'react-hot-toast';
import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	SvgIcon,
	Input,
	List,
	ListItem,
} from '@mui/material';

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		if (!id) return;
		getProductDetail(id);
	}, []);

	const getProductDetail = async (id: string) => {
		try {
			setLoading(true);
			const data = await getProduct(id || '');
			if (data?.data?.data) {
				setProduct(data.data.data);
			}
		} catch (error) {
			setProduct(null);
		} finally {
			setLoading(false);
		}
	};

	const handleReduce = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleIncrease = () => {
		setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
	};

	const handleAddToCart = async (
		productId: string | undefined,
		quantity: number
	) => {
		const response = await addToCart(productId, quantity);
		if (response.status === 'success') {
			toast.success('Add to cart successfully!');
		}
	};
	return (
		<Box mx="auto" my={5} position="relative">
			<Container maxWidth="xl">
				<Loading isShow={loading} />
				<Grid container spacing={4}>
					<Grid item xs={12} lg={6}>
						<Box display="flex" justifyContent="center" height="100%">
							<img
								src={product?.image}
								alt={product?.name}
								style={{
									maxHeight: '100%',
									objectFit: 'contain',
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Box display="flex" alignItems="center" height="100%">
							<Box width="100%" maxWidth="xl">
								<Typography variant="subtitle1" color="primary" mb={2}>
									Clothing / Menswear
								</Typography>
								<Typography
									variant="h4"
									component="h2"
									mb={2}
									sx={{
										fontWeight: 'bold',
										textTransform: 'capitalize',
									}}
								>
									{product?.name}
								</Typography>
								<Box display="flex" alignItems="center" mb={2}>
									<Typography
										variant="h6"
										component="span"
										sx={{ fontWeight: 'bold' }}
										pr={5}
										borderRight={1}
										borderColor="grey.300"
									>
										${product?.price}
									</Typography>
									<Box display="flex" alignItems="center" ml={2}>
										{[...Array(5)].map((_, index) => (
											<SvgIcon
												key={index}
												viewBox="0 0 20 20"
												sx={{ width: 20, height: 20 }}
											>
												<path
													d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
													fill="#FBBF24"
												/>
											</SvgIcon>
										))}
										<Typography
											variant="body2"
											color="textSecondary"
											ml={2}
										>
											{product?.numReviews} review
										</Typography>
									</Box>
								</Box>
								<Typography
									variant="body1"
									color="textSecondary"
									mb={2}
								>
									{product?.description}{' '}
									<a href="#" style={{ color: '#4F46E5' }}>
										More...
									</a>
								</Typography>
								<List>
									<ListItem>
										<SvgIcon
											viewBox="0 0 26 26"
											sx={{
												width: 26,
												height: 26,
												color: '#4F46E5',
											}}
										>
											<rect
												width="26"
												height="26"
												rx="13"
												fill="#4F46E5"
											/>
											<path
												d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
												stroke="white"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</SvgIcon>
										<Typography variant="body1" ml={2}>
											{product?.brand}
										</Typography>
									</ListItem>
									<ListItem>
										<SvgIcon
											viewBox="0 0 26 26"
											sx={{
												width: 26,
												height: 26,
												color: '#4F46E5',
											}}
										>
											<rect
												width="26"
												height="26"
												rx="13"
												fill="#4F46E5"
											/>
											<path
												d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
												stroke="white"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</SvgIcon>
										<Typography variant="body1" ml={2}>
											3 color shirt
										</Typography>
									</ListItem>
									<ListItem>
										<SvgIcon
											viewBox="0 0 26 26"
											sx={{
												width: 26,
												height: 26,
												color: '#4F46E5',
											}}
										>
											<rect
												width="26"
												height="26"
												rx="13"
												fill="#4F46E5"
											/>
											<path
												d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
												stroke="white"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</SvgIcon>
										<Typography variant="body1" ml={2}>
											Pure Cotton Shirt with 60% as 40%
										</Typography>
									</ListItem>
									<ListItem>
										<SvgIcon
											viewBox="0 0 26 26"
											sx={{
												width: 26,
												height: 26,
												color: '#4F46E5',
											}}
										>
											<rect
												width="26"
												height="26"
												rx="13"
												fill="#4F46E5"
											/>
											<path
												d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
												stroke="white"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</SvgIcon>
										<Typography variant="body1" ml={2}>
											All size is available
										</Typography>
									</ListItem>
								</List>
								<Typography
									variant="h6"
									mb={2}
									sx={{ fontWeight: 'medium' }}
								>
									Size
								</Typography>
								<Box pb={2} borderBottom={1} borderColor="grey.100">
									<Grid container spacing={1} maxWidth="md">
										{['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
											<Grid item key={size}>
												<Button variant="outlined" fullWidth>
													{size}
												</Button>
											</Grid>
										))}
									</Grid>
								</Box>
								<Box
									display="flex"
									justifyContent="space-between"
									border={1}
									px={1}
									borderRadius={10}
									mt={2}
									sx={{
										width: 'fit-content',
										borderColor: '#ccc',
									}}
								>
									<Button
										onClick={handleIncrease}
										sx={{
											minWidth: 0,
											padding: 1,
											height: 'objectFit',
											textAlign: 'center',
										}}
									>
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
										</svg>
									</Button>
									<Input
										value={quantity}
										readOnly
										sx={{
											textAlign: 'center',
											mx: 3,
											width: 40,
										}}
										inputProps={{
											style: { textAlign: 'center' },
										}}
									/>
									<Button
										onClick={handleReduce}
										sx={{ minWidth: 0, padding: 1 }}
									>
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="#9CA3AF"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												stroke-opacity="0.2"
												stroke-width="1.6"
												stroke-linecap="round"
											/>
										</svg>
									</Button>
								</Box>
								<Grid container spacing={2} my={1} alignItems="center">
									<Grid item marginLeft="auto" xs={6}>
										<Button
											fullWidth
											variant="outlined"
											onClick={() => handleAddToCart(id, quantity)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
												className="lucide lucide-shopping-cart me-2"
											>
												<circle cx={8} cy={21} r={1} />
												<circle cx={19} cy={21} r={1} />
												<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
											</svg>
											Add to cart
										</Button>
									</Grid>
									<Grid item xs={6}>
										<Button fullWidth variant="contained">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
												className="lucide lucide-credit-card me-2"
											>
												<rect
													width={20}
													height={14}
													x={2}
													y={5}
													rx={2}
												/>
												<line x1={2} x2={22} y1={10} y2={10} />
											</svg>
											Buy now
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default memo(ProductDetail);
