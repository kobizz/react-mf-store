import { Box, Container, Paper, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useRecoilState } from 'recoil';

export default () => {
	const [products] = useRecoilState(window.__store.atoms.products);
	const hasProductsInCart = products.some(product => product.inCart);

	return <Box>
		<Typography
			variant="h5"
			sx={{
				mb: 6
			}}
		>
			Cart
		</Typography>
		{
			hasProductsInCart ?
			products.map((product, index) => (
				product.inCart ? (
					<Paper
						sx={{
							p: 2,
							mt: 2
						}}
						square
						variant="outlined"
						key={index}
					>
						<Typography variant="subtitle1" >{product.title}</Typography>
						<Typography variant="subtitle1" color="text.secondary">{product.price}</Typography>
					</Paper>
				) : null
			)) :
				<Container>
					<AddShoppingCart
						sx={{
							fontSize: 240,
							color: 'grey.200',
						}}
					/>
					<Typography
						align="center"
						variant="subtitle2"
						color="grey.600"
					>
						No products in cart
					</Typography>
				</Container>
		}
	</Box>
};
