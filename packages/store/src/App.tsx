import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Container, Grid, Paper, Skeleton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Items = React.lazy(() => import('items/App'));

export default () => {

	return <Box>
		<AppBar position="absolute">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					My Store
				</Typography>
			</Toolbar>
		</AppBar>
		<Box component="main" sx={{ height: '100vh', mt: 10 }}>
			<Container maxWidth="xl" sx={{ p: 10 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						<Paper>
							<Items></Items>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<Paper sx={{ p: 3 }}>
							<Skeleton width="60%" />
							<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
							<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
							<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	</Box>;
};
