import { Box, Button, Card, CardActions, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import React from 'react';
import { products } from 'store/atoms';

const CartCounter = React.lazy(() => import('cart/CartCounter'));

export default () => {
	const [fetchedProducts, setProducts] = useRecoilState(products);

	return <>
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography
				variant="h5"
				component="div"
				color="text.secondary"
			>
					Products
			</Typography>
			<CartCounter />
		</Box>
		<Grid
			container
			spacing={4}
			sx={{
				pt: 4
			}}
		>
			{
				fetchedProducts.map((product, index) => <Grid item key={index} xs={4}>
					<Card>
						<CardHeader
							disableTypography
							title={<Typography variant="subtitle1">{product.title}</Typography>}
						/>
						<CardMedia
							sx={{ height: 200, bgcolor: 'grey.200' }}
							image={product.image}
							title="Macarons"
						/>
						<CardActions
							sx={{ justifyContent: 'flex-end' }}
						>
							<Button
								size="small"
								color={product.inCart ? 'error' : 'primary'}
								onClick={() => {
									const newProducts = [...fetchedProducts].map((product, innerIndex) => {
										if (index === innerIndex) {
											return { ...product, inCart: ! product.inCart };
										}

										return product;
									});

									setProducts(newProducts);
								}}
							>
								{ product.inCart ? 'Remove' : 'Add'}
							</Button>
						</CardActions>
					</Card>
				</Grid>
				)
			}
		</Grid>
	</>;
};
