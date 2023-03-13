import './fonts';
import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import CartSkeleton from './skeletons/CartSkeleton.jsx';
import ItemsSkeleton from './skeletons/ItemsSkeleton.jsx';

const Items = React.lazy(() => import('items/App'));
const Cart = React.lazy(() => import('cart/App'));

export default () => {

	return (
		<RecoilRoot>
			<Box>
				<AppBar position="absolute">
					<Toolbar>
						<Typography
							variant="h2"
							component="div"
							fontFamily="Allison"
							sx={{ flexGrow: 1 }}>
							French Dessert
						</Typography>
					</Toolbar>
				</AppBar>
				<Box component="main" sx={{ height: '100vh', mt: 10 }}>
					<Container maxWidth="lg" sx={{ p: 4 }}>
						<Grid container spacing={5}>
							<Grid item xs={12} md={8} lg={9}>
								<Suspense fallback={<ItemsSkeleton />}>
									<Items />
								</Suspense>
							</Grid>
							<Grid item xs={12} md={4} lg={3}>
								<Paper sx={{ p: 3, mt: 8 }}>
									<Suspense fallback={<CartSkeleton />}>
										<Cart />
									</Suspense>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>;
		</RecoilRoot>
	);
};
