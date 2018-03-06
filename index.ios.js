/**
 * ReactNativeEffectsView
 * http://github.com/voronianski/react-native-effects-view
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    StyleSheet,
    requireNativeComponent,
} from 'react-native';


const EffectsViewComponent = (props) => {
    const { children, vibrantContent } = props;
    const vibrantNode = vibrantContent ? vibrantContent : <View />;
    const {style, ...nativeProps} = props;
    return (
        <EffectsView {...nativeProps} style={styles.base, style}>
            {vibrantNode}
            {children}
        </EffectsView>
    );
};

EffectsViewComponent.defaultProps = {
    vibrant: true,
    blurStyle: true,
};

EffectsViewComponent.propTypes = {
    vibrant: PropTypes.bool,
    blurStyle: PropTypes.string,
    vibrantContent: PropTypes.node
};

const EffectsView = requireNativeComponent('DVEffectsView', EffectsViewComponent);

const styles = StyleSheet.create({
    base: {
        backgroundColor: 'transparent'
    }
});

module.exports = EffectsViewComponent;
