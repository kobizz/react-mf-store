import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useRecoilValue } from 'recoil';
import { getProductsInCart } from 'store/selectors';

export default () => {
	const productsInCart = useRecoilValue(getProductsInCart);

	return productsInCart.length ? (
		<List>
			{
				productsInCart.map((product, index) => (
					<ListItem sx={{ px: 0 }} key={index} divider>
						<ListItemAvatar>
							<Avatar src={product.image} />
						</ListItemAvatar>
						<ListItemText primary={product.title} secondary={product.price} />
					</ListItem>
				))
			}
		</List>
	)
		:
		<Container>
			<AddShoppingCart
				sx={{
					fontSize: 150,
					color: 'grey.400',
				}}
			/>
			<Typography
				align="center"
				variant="subtitle2"
				color="grey.500"
			>
						No products in cart
			</Typography>
		</Container>;
};
