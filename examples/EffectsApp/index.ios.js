/**
 * Sample React Native Effects App
 * https://github.com/facebook/react-native
 * https://github.com/voronianski/react-native-effects-view
 */

'use strict';

var React = require('react-native');
var EffectsView = require('react-native-effects-view');
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

    renderVibrantExtraLight() {
        return (
            <View>
                <Text style={styles.text}>Extra Light Blur</Text>
                <Image style={styles.mask} source={require('image!ButtonRoundRect')}>
                    <Image style={styles.camera} source={require('image!Camera')} />
                </Image>
            </View>
        );
    },

    renderVibrantLight() {
        return (
            <View>
                <Text style={styles.text}>Light Blur</Text>
                <Image style={styles.mask} source={require('image!ButtonRoundRect')}>
                    <Image style={styles.genius} source={require('image!Genius')} />
                </Image>
            </View>
        );
    },

    renderVibrantDark() {
        return (
            <View>
                <Text style={styles.text}>Dark Blur</Text>
                <Image style={styles.mask} source={require('image!ButtonRoundRect')}>
                    <Image style={styles.bitcoin} source={require('image!Bitcoin')} />
                </Image>
            </View>
        );
    },

    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.bg} source={require('image!Yosemite')}>
                    <View style={styles.container}>
                        <EffectsView
                            style={[styles.blur, styles.extraLightBlur]}
                            blurStyle="extraLight"
                            vibrantContent={this.renderVibrantExtraLight()}
                        />
                        <EffectsView
                            style={[styles.blur, styles.lightBlur]}
                            blurStyle="light"
                            vibrantContent={this.renderVibrantLight()}
                        />
                        <EffectsView
                            style={[styles.blur, styles.darkBlur]}
                            blurStyle="dark"
                            vibrantContent={this.renderVibrantDark()}
                        />
                    </View>
                </Image>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    bg: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: -100
    },
    container: {
        flex: 1
    },
    blur: {
        flex: 1,
        height: 140,
        alignSelf: 'stretch',
        position: 'absolute',
        left: 0,
        right: 0
    },
    extraLightBlur: {
        bottom: 380
    },
    lightBlur: {
        bottom: 240
    },
    darkBlur: {
        bottom: 100
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10
    },
    bitcoin: {
        width: 28,
        height: 28
    },
    genius: {
        width: 26,
        height: 28
    },
    camera: {
        width: 28,
        height: 20
    },
    mask: {
        width: 64,
        height: 64,
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
});

AppRegistry.registerComponent('EffectsApp', () => EffectsApp);
