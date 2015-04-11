# ReactNativeEffectsView

> Component to make easy use of iOS8 `UIVisualEffectViews` with `UIBlurEffect` and `UIVibrancyEffect` in [ReactNative](http://facebook.github.io/react-native).

<img src="https://raw.githubusercontent.com/voronianski/react-native-effects-view/master/example/UIVisualEffects.png" width="320" height="568" alt="Screenshot">

## Install

- Firstly install component via [NPM](https://www.npmjs.com/)

```bash
npm install react-native-effects-view --save
```

- In XCode right click on project's name and choose `Add Files to..`
- Go to `node_modules/react-native-effects-view` and select `DVEffects` folder
- Now you're ready to `require('react-native-effects-view')` inside your app!

## Props

- `blurStyle` _(String)_ - choose one of the following:
    - `"light"` (_default_)
    - `"extraLight"`
    - `"dark"`
- `vibrantContent` _(ReactElement)_ - render vibrant content inside blurred view.

## Example

In order to see usage example check [`example/EffectsApp`](https://github.com/voronianski/react-native-effects-view/tree/master/example/EffectsApp) folder in XCode (don't forget to run `npm install` inside). It contains the app presented by [screenshot](https://raw.githubusercontent.com/voronianski/react-native-effects-view/master/example/UIVisualEffects.png).

All children of `<EffectsView />` will be blurred, however you can use it without children and position element on top of background images and other views.

```javascript
var React = require('react-native');
var EffectsView = require('react-native-effects-view');
var { AppRegistry, StyleSheet, View } = React;

var App = React.createClass({
    renderVibrant() {
        return (
            <View>
                <Text style={styles.text}>Do you feel blurry??</Text>
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

## References

Demo app is inspired by [UIVisualEffects](https://github.com/ide/UIVisualEffects) in Swift repo.

---

**MIT Licensed**
