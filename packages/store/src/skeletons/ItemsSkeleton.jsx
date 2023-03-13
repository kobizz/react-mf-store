import { Box, Card, CardActions, CardHeader, Grid, Skeleton } from '@mui/material';

export default () => {

	return <>
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Skeleton height={35} width={200} />
			<Skeleton variant="rectangular" height={25} width={40} />
		</Box>
		<Grid
			container
			spacing={4}
			sx={{
				pt: 4
			}}
		>
			{
				Array(6).fill().map((nothing, index) => <Grid item key={index} xs={4}>
					<Card>
						<CardHeader
							disableTypography
							title={<Skeleton width={100} />}
						/>
						<Skeleton variant="rectangular" height={200} />
						<CardActions
							sx={{ justifyContent: 'flex-end' }}
						>
							<Skeleton variant="rectangular" width={50} />
						</CardActions>
					</Card>
				</Grid>
				)
			}
		</Grid>
	</>;
};
