import app from '@/app';
import { mountPluin } from '@/plugins';

mountPluin();

createRoot(document.querySelector('#root')!).render(app());
