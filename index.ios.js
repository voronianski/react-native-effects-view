/**
 * ReactNativeEffectsView
 * http://github.com/voronianski/react-native-effects-view
 */

'use strict';

import React, { Component } from 'react';

import {
    View,
    PropTypes,
    StyleSheet,
    ReactNativeViewAttributes,
    createReactNativeComponentClass,
    NativeMethodsMixin,
    flattenStyle,
    merge
} from 'react-native';

var EffectsViewComponent = React.createClass({
    mixins: [NativeMethodsMixin],

    propTypes: {
        blurStyle: PropTypes.string,
        vibrantContent: PropTypes.node,
    },

    viewConfig: {
        validAttributes: ReactNativeViewAttributes.UIView,
        uiViewClassName: 'UIView',
    },

    render() {
        var { children, vibrantContent } = this.props;
        var style = flattenStyle([styles.base, this.props.style]);
        var nativeProps = merge(this.props, { style });

        if (vibrantContent) {
            nativeProps.vibrant = true;
        }
        var vibrantNode = vibrantContent ? vibrantContent : <View />;

        return (
            <EffectsView {...nativeProps}>
                {vibrantNode}
                {children}
            </EffectsView>
        );
    }
});

var EffectsView = createReactNativeComponentClass({
    validAttributes: merge(ReactNativeViewAttributes.UIView, {
        blurStyle: true,
        vibrant: true
    }),
    uiViewClassName: 'DVEffectsView'
});

var styles = StyleSheet.create({
    base: {
        backgroundColor: 'transparent'
    }
});

module.exports = EffectsViewComponent;
