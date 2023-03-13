import App from './App';
import { createRoot } from 'react-dom/client';
import * as atoms from './store/atoms';
import * as selectors from './store/selectors';

const container = document.getElementById('root');
const root = createRoot(container);

window.__store = { atoms, selectors };

root.render(<App/>);
