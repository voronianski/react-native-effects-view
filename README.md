# ReactNativeEffectsView

> Component to make easy use of iOS8 `UIVisualEffectViews` with `UIBlurEffect` and `UIVibrancyEffect` in (ReactNative)[http://facebook.github.io/react-native].

## Install

```bash
npm install react-native-effects-view --save
```

## Props

## Example

```javascript
var React = require('react-native');
var EffectsView = require('react-native-effects-view');
var { AppRegistry, StyleSheet, View } = React;

var App = React.createClass({
    renderVibrant() {
        return (
            <View>
                <Text style={styles.text}>Do you feel that blurry??</Text>
            </View>
        );
    },

    render() {
        return (
            <EffectsView 
                style={styles.view} 
                blurStyle="dark" 
                vibrantContent={this.renderVibrant()}
            >
                <Image style={styles.bg} source={require('image!bg')} />
            </EffectsView>
        );
    }
});

var styles = StyleSheet.create({
    bg: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        flex: 1
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('App', () => App);
```

---

**MIT Licensed**
