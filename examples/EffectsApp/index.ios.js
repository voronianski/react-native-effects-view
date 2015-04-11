/**
 * Sample React Native Effects App
 * https://github.com/facebook/react-native
 * https://github.com/voronianski/react-native-effects-view
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBarIOS
} = React;

var EffectsApp = React.createClass({
    componentWillMount() {
        StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent, true);
    },

    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.bg} source={require('image!Yosemite')} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    bg: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

AppRegistry.registerComponent('EffectsApp', () => EffectsApp);
