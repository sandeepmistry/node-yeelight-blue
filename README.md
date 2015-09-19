# node-yeelight-blue

[![Analytics](https://ga-beacon.appspot.com/UA-56089547-1/sandeepmistry/node-yeelight-blue?pixel)](https://github.com/igrigorik/ga-beacon)

A Node.js lib for the [yeelight blue](http://www.yeelight.com/en_US/product/yeelight-blue) and [yeelight blue lightstrips](https://www.yeelight.com.au/yeelight-blue-lightstrips).

[Yeelight Blue Message Interface](http://www.yeelight.com/download/yeelight_blue_message_interface_v1.0.pdf)


## Install

```sh
npm install yeelight-blue
```

## Usage

```javascript
var YeelightBlue = require('yeelight-blue');
```

### Discover

```javascript
YeelightBlue.discover(callback(yeelightBlue));
```

### Connect and Setup

```javascript
// connects + discovers services and characteristics
yeelightBlue.connectAndSetUp(callback(error));
```

### Disconnect

```javascript
yeelightBlue.disconnect(callback);
```

### Turn off/on__

```javascript
yeelightBlue.turnOff(callback(error));

yeelightBlue.turnOn(callback(error));
```

### Set Color and Brightness

```javascript
var red        = 255; // 0 - 255
var green      = 255; // 0 - 255
var blue       = 255; // 0 - 255
var brightness = 100; // 0 - 100

yeelightBlue.setColorAndBrightness(callback(error));
```

### Set Gradual Mode

Enables/disables gradual fading when setting colors and brightness

```javascript
var on = true; // true (default) | false

yeelightBlue.setGradualMode(on, callback(error));
```

## Events

### Disconnect

```javascript
yeelightBlue.on('disconnect', callback);
```
