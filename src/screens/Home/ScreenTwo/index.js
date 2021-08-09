import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { P } from '~components'

class ScreenTwo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <P color={'#242424'} size={'xxl'} bold> ScreenTwo </P>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ScreenTwo;