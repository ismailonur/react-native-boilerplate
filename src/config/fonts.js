//Font and icon sizes here
import { StyleSheet } from 'react-native';
import { w } from '~dimensions';

const fonts_family = StyleSheet.create({
	l: { fontFamily: 'Roboto-Light' },
	m: { fontFamily: 'Roboto-Medium' },
	b: { fontFamily: 'Roboto-Semibold' },
});

const font_size = StyleSheet.create({
	xxxl: { fontSize: 0.1 * w },
	xxl: { fontSize: 0.08 * w },
	xl: { fontSize: 0.06 * w },
	l: { fontSize: 0.05 * w },
	d: { fontSize: 0.04 * w },
	m: { fontSize: 0.03 * w },
	s: { fontSize: 0.02 * w },
	xs: { fontSize: 0.01 * w },
});

const icon_size = StyleSheet.create({ g: 96, xxl: 40, xl: 32, l: 24, ml: 20, m: 14, s: 12, xs: 8 });

export { font_size, fonts_family, icon_size };
