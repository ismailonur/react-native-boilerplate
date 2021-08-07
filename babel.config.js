module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	'plugins': [
		[
			'module-resolver',
			{
				'root': ['./src'],
				'alias': {
					'~images': './assets/images',
					'~dimensions': './src/dimensions.js',
					'~components': './src/components/index.js',
				}
			}
		]
	]
};
