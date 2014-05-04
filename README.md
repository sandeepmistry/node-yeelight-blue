node-yeelight-blue
==================

A node.js lib for the [yeelight blue](http://www.yeelight.com/en_US/product/yeelight-blue)

[Yeelight Blue Message Interface](http://www.yeelight.com/download/yeelight_blue_message_interface_v1.0.pdf)


Install
-------

    npm install yeelight-blue

Usage
-----

    var YeelightBlue = require('yeelight-blue');

__Discover__

    YeelightBlue.discover(callback(yeelightBlue));

__Connect and Setup__

    // connects + discovers services and characteristics
    yeelightBlue.connectAndSetup(callback);

__Disconnect__

    yeelightBlue.disconnect(callback);

__Turn off/on__

    yeelightBlue.turnOff(callback);

    yeelightBlue.turnOn(callback);

__Set Color and Brightness__

    var red        = 255; // 0 - 255
    var green      = 255; // 0 - 255
    var blue       = 255; // 0 - 255
    var brightness = 100; // 0 - 100

    yeelightBlue.setColorAndBrightness(callback);

__Set Gradual Mode__

Enables/disables gradual fading when setting colors and brightness
    
    var on = true; // true (default) | false

    yeelightBlue.setGradualMode(on, callback);

Events 
------

__Disconnect__

    yeelightBlue.on('disconnect', callback);
