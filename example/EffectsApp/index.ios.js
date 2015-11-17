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
    StatusBarIOS,
    Dimensions,
} = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

var EffectsView = require('react-native-effects-view');

var EffectsApp = React.createClass({
    componentWillMount() {
        StatusBarIOS.setStyle('light-content', true);
    },

    renderVibrantExtraLight() {
        return (
            <View style={styles.blurContent}>
                <Text style={styles.text}>Extra Light Blur</Text>
                <Image style={styles.mask} source={require('./img/ButtonRoundRect.png')}>
                    <Image style={styles.camera} source={require('./img/Camera.png')} />
                </Image>
            </View>
        );
    },

    renderVibrantLight() {
        return (
            <View style={styles.blurContent}>
                <Text style={styles.text}>Light Blur</Text>
                <Image style={styles.mask} source={require('./img/ButtonRoundRect.png')}>
                    <Image style={styles.genius} source={require('./img/Genius.png')} />
                </Image>
            </View>
        );
    },

    renderVibrantDark() {
        return (
            <View style={styles.blurContent}>
                <Text style={styles.text}>Dark Blur</Text>
                <Image style={styles.mask} source={require('./img/ButtonRoundRect.png')}>
                    <Image style={styles.bitcoin} source={require('./img/Bitcoin.png')} />
                </Image>
            </View>
        );
    },

    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.bg} source={require('./img/Yosemite.png')} />
                <View style={styles.container}>
                    <EffectsView
                        style={styles.blur}
                        blurStyle="extraLight"
                        vibrantContent={this.renderVibrantExtraLight()}
                    />
                    <EffectsView
                        style={styles.blur}
                        blurStyle="light"
                        vibrantContent={this.renderVibrantLight()}
                    />
                    <EffectsView
                        style={styles.blur}
                        blurStyle="dark"
                        vibrantContent={this.renderVibrantDark()}
                    />
                </View>
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
        left: -2200,
        right: 0,
        bottom: -100
    },
    container: {
        position: 'absolute',
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
    },
    blur: {
        height: ( deviceHeight - 20 ) / 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    blurContent: {
        flexDirection: 'column',
        alignItems: 'center',
        width: deviceWidth,
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
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }
});

AppRegistry.registerComponent('EffectsApp', () => EffectsApp);
