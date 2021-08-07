import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { P } from '../P';
import { HorizontalLayout } from '../HorizontalLayout';
import { Clickable } from '../Clickable';


class Check extends React.Component {
	render() {
		const { checked, trueIcon, falseIcon, rightText, leftText, leftTextProps, rightTextProps, style, onClick, onTextClick } = this.props;

		return (
			<HorizontalLayout style={style}>
				{
					leftText.length > 0 &&
					<Clickable onClick={onTextClick} animSize={0.98}>
						<P {...leftTextProps}>{leftText}</P>
					</Clickable>
				}

				<Clickable onClick={() => onClick(!checked)} animSize={0.95}>
					<View>
						<View style={{ opacity: checked ? 1 : 0 }}>{trueIcon}</View>
						<View style={{ position: 'absolute', opacity: checked ? 0 : 1 }}>{falseIcon}</View>
					</View>
				</Clickable>

				{
					rightText.length > 0 &&
					<Clickable onClick={onTextClick} animSize={0.98}>
						<P  {...rightTextProps}>{rightText}</P>
					</Clickable>
				}
			</HorizontalLayout>
		);
	}
}


Check.propTypes = {
	checked: PropTypes.bool,
	trueIcon: PropTypes.any,
	falseIcon: PropTypes.any,
	leftText: PropTypes.string,
	rightText: PropTypes.string,
	leftTextProps: PropTypes.object,
	rightTextProps: PropTypes.object,
	style: ViewPropTypes.style,
	onClick: PropTypes.func,
};
Check.defaultProps = {
	checked: false,
	trueIcon: null,
	falseIcon: null,
	leftText: '',
	rightText: '',
	leftTextProps: {},
	rightTextProps: {},
	style: {},
	onClick: () => { }
};

export { Check };
