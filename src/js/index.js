import './libs';
import { devices } from './utils/breakpoints';

window.UPB = window.UPB || {};
window.breakpoints = devices;



if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line global-require
	require('./utils/dev/grid');
	require('./utils/dev/messages');
}