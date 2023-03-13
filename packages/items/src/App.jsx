import { Box, Button, Card, CardActions, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';

export default () => {
	const [products, setProducts] = useRecoilState(window.__store.atoms.products);

	return (
		<Box sx={{p: 4}}>
			<Typography
				variant="h4"
			>
				French dessert
			</Typography>
			<Grid
				container
				spacing={4}
				sx={{
					pt: 4
				}}
			>
				{
					products.map((product, index) => {
						return <Grid item key={index} xs={4}>
							<Card>
								<CardHeader
									disableTypography
									title={<Typography variant="subtitle1">{product.title}</Typography>}
								/>
								<CardMedia
									sx={{ height: 200, backgroundColor: 'grey.200' }}
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
											const newProducts = [...products].map((product, innerIndex) => {
												if (index === innerIndex) {
													return {...product, inCart: ! product.inCart};
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
					})
				}
			</Grid>
		</Box>
	);
};
