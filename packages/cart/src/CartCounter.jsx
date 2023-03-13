import { Badge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useRecoilValue } from 'recoil';
import { getProductsInCart } from 'store/selectors';

export default () => {
	const productsInCart = useRecoilValue(getProductsInCart);

	return <Badge badgeContent={productsInCart.length} color="secondary">
		<ShoppingCart color="action" sx={{ fontSize: 28 }} />
	</Badge>;
};
