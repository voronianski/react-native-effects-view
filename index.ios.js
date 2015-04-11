/**
 * ReactNativeEffectsView
 * http://github.com/voronianski/react-native-effects-view
 */

'use strict';

var React = require('react-native');
var PropTypes = require('ReactPropTypes');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var StyleSheet = require('StyleSheet');
var NativeMethodsMixin = require('NativeMethodsMixin');
var flattenStyle = require('flattenStyle');
var merge = require('merge');
var { View } = React;

var EffectsViewComponent = React.createClass({
    mixins: [NativeMethodsMixin],

    propTypes: {
        blurStyle: PropTypes.string,
        vibrantContent: PropTypes.node
    },

    viewConfig: {
        validAttributes: ReactIOSViewAttributes.UIView,
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
                {React.Children.map(children, React.addons.cloneWithProps)}
            </EffectsView>
        );
    }
});

var EffectsView = createReactIOSNativeComponentClass({
    validAttributes: merge(ReactIOSViewAttributes.UIView, {
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
