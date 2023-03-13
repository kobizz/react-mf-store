import { Skeleton } from '@mui/material';
import React from 'react';

export default () => {
	return <>
		<Skeleton width="60%" />
		<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
		<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
		<Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
	</>
}
