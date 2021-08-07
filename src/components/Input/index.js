import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Keyboard, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
//import TextInputMask from 'react-native-text-input-mask';

import EYE from './eye.svg';

import { fonts_family, font_size } from '../../config/fonts';

import { P } from '../P';
import { Check } from '../Check';
import { HorizontalLayout } from '../HorizontalLayout';


class Input extends React.Component {
	state = { topSecret: true, focus: false };

	render() {
		let {
			backgroundColor, border,
			type, size,
			placeholder, placeholderColor, placeholderSize,
			value, onChangeText, nullValue,
			onFocus, onBlur, onClick,
			secret,
			editable,
			multiline,
			error,
			inputStyle, containerStyle,
			mask, formatted,
			rightIcon

		} = this.props;

		backgroundColor = '#f34343';
		type = fonts_family[type];
		size = font_size[size];

		return (
			<TouchableOpacity
				style={[
					styles.container,
					{
						backgroundColor,
						borderColor: !(this.state.focus || border || error) ? 0 : (error ? '#f34343' : '#ffddff'),
						borderWidth: 2
					},
					containerStyle
				]}
				activeOpacity={1}
				onPress={() => { this.inputRef.focus(); onClick(); }}
			>
				{
					placeholder.length > 0 &&
					<P color={placeholderColor} size={placeholderSize}>
						{!error && placeholder}<P color={'error'}>{error}</P>
					</P>
				}

				<HorizontalLayout>
					{
						//mask === 'none' ?
						true ?
							< TextInput
								ref={ref => (this.inputRef = ref)}
								style={[styles.input, { color: '#fff' }, size, type, inputStyle]}
								value={value}
								onChangeText={onChangeText}
								secureTextEntry={secret && this.state.topSecret}
								blurOnSubmit
								returnKeyType={'done'}
								placeholder={nullValue}
								placeholderTextColor={'#212121'}
								onBlur={() => { onBlur(); this.setState({ focus: false }); }}
								onFocus={() => { onFocus(); this.setState({ focus: true }); }}
								editable={editable}
								multiline={multiline}
								autoCapitalize={'none'}
							/>
							:
							<TextInputMask
								ref={ref => (this.inputRef = ref)}
								style={[styles.input, { color: '#ffffff'}, size, type, inputStyle]}
								value={value}
								onChangeText={onChangeText}
								onChangeText={(formattedSTR, extractedSTR) => onChangeText(formatted ? formattedSTR : extractedSTR)}
								secureTextEntry={secret && this.state.topSecret}
								blurOnSubmit
								returnKeyType={'done'}
								placeholder={nullValue}
								placeholderTextColor={'#212121'}
								onBlur={() => { onBlur(); this.setState({ focus: false }); }}
								onFocus={() => { onFocus(); this.setState({ focus: true }); }}
								editable={editable}
								multiline={multiline}
								mask={mask}
								autoCapitalize={'none'}
							/>
					}

					{
						secret &&
						<Check
							checked={this.state.topSecret}
							trueIcon={<EYE fill={'#565656'}/>}
							falseIcon={<EYE fill={'#0070E5'}/>}
							onClick={() => this.setState({ topSecret: !this.state.topSecret })}
						/>
					}
					{rightIcon}
				</HorizontalLayout>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: { width: '100%', padding: '3%', borderRadius: 8 },
	input: { flex: 1, textAlignVertical: 'center', paddingVertical: '2%' }
});

Input.propTypes = {
	display: PropTypes.object,
	backgroundColor: PropTypes.string,
	type: PropTypes.string,
	size: PropTypes.string,
	placeholder: PropTypes.string,
	placeholderColor: PropTypes.string,
	placeholderSize: PropTypes.string,
	border: PropTypes.bool,
	value: PropTypes.string,
	onChangeText: PropTypes.func,
	nullValue: PropTypes.string,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	secret: PropTypes.bool,
	editable: PropTypes.bool,
	multiline: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	inputStyle: ViewPropTypes.style,
	containerStyle: ViewPropTypes.style,
	mask: PropTypes.string,
	formatted: PropTypes.bool,
	rightIcon: PropTypes.element
};
Input.defaultProps = {
	backgroundColor: 'gray1',
	size: 'M',
	placeholder: '',
	placeholderColor: 'gray2',
	placeholderSize: 'l',
	border: false,
	value: '',
	onChangeText: () => { },
	nullValue: '',
	onFocus: () => { },
	onBlur: () => { },
	onClick: () => { },
	secret: false,
	editable: true,
	multiline: false,
	error: false,
	mask: 'none',
	formatted: false,
	rightIcon: null
};

export { Input };
