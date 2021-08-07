import React from 'react';
import { Platform, StatusBar, View, Keyboard, ViewPropTypes } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

const ios = Platform.OS === 'ios';
const sbh = getStatusBarHeight();

class Container extends React.Component {
	state = { keyboard: false, keyboardHeight: 0 };

	componentDidMount() {
		if (ios) { //android için buna gerek yok (softInputMode : adjustResize)
			Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
			Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
		}
	}
	componentWillUnmount() {
		if (ios) {
			Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow);
			Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide);
		}
	}
	componentDidUpdate() {
		if (this.props.renderTime) console.timeEnd(this.props.renderTime);
	}

	keyboardWillShow = d => this.setState({ keyboard: true, keyboardHeight: d.endCoordinates.height });
	keyboardWillHide = () => this.setState({ keyboard: false, keyboardHeight: 0 });

	render() {
		const { keyboardSpacer, statusBar, display, style, children, renderTime } = this.props;
		if (renderTime) console.time(renderTime);

		return (
			<View style={{ flex: 1, backgroundColor: display.palette.d }}>
				<StatusBar translucent backgroundColor={'transparent'} barStyle={display.mode === 'night' ? 'light-content' : 'dark-content'} />
				{statusBar && <View style={{ height: sbh, backgroundColor: display.palette.gray1 }} />}

				<View style={[style, { flex: 1 }]}>
					{children}
				</View>

				{keyboardSpacer && <View style={{ height: this.state.keyboardHeight }} />}
			</View>
		);
	}
}

Container.propTypes = {
	children: PropTypes.any,
	style: ViewPropTypes.style,
	display: PropTypes.object,
	keyboardSpacer: PropTypes.bool,
	statusBar: PropTypes.bool,
	renderTime: PropTypes.string
};
Container.defaultProps = {
	keyboardSpacer: true,
	statusBar: true,
	style: {}
};

export { Container };
