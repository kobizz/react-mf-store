import App from './App';
import { createRoot } from 'react-dom/client';
import * as atoms from './store/atoms';

const container = document.getElementById('root');
const root = createRoot(container);

window.__store = { atoms };

root.render(<App/>);
