var util = require('util');

var NobleDevice = require('noble-device');

var SERVICE_UUID          = 'fff0';
var CONTROL_UUID          = 'fff1';
var EFFECT_UUID           = 'fffc';

var YeelightBlue = function(peripheral) {
  NobleDevice.call(this, peripheral);
};

YeelightBlue.SCAN_UUIDS = [SERVICE_UUID];

YeelightBlue.is = function(peripheral) {
  var localName = peripheral.advertisement.localName;

  return ((localName === undefined) || (localName === 'Yeelight Blu') || (localName === 'LightStrips'));
};

NobleDevice.Util.inherits(YeelightBlue, NobleDevice);

YeelightBlue.prototype.writeServiceStringCharacteristic = function(uuid, string, callback) {
  this.writeStringCharacteristic(SERVICE_UUID, uuid, string, callback);
};

YeelightBlue.prototype.writeControlCharateristic = function(red, green, blue, brightness, callback) {
  var command = util.format('%d,%d,%d,%d', red, green, blue, brightness);

  for (var i = command.length; i < 18; i++) {
    command += ',';
  }

  this.writeServiceStringCharacteristic(CONTROL_UUID, command, callback);
};

YeelightBlue.prototype.turnOn = function(callback) {
  this.writeControlCharateristic(255, 255, 255, 100, callback);
};

YeelightBlue.prototype.turnOff = function(callback) {
  this.writeControlCharateristic(0, 0, 0, 0, callback);
};

YeelightBlue.prototype.setColorAndBrightness = function(red, green, blue, brightness, callback) {
  this.writeControlCharateristic(red, green, blue, brightness, callback);
};

YeelightBlue.prototype.setGradualMode = function(on, callback) {
  this.writeServiceStringCharacteristic(EFFECT_UUID, on ? 'TS' : 'TE', callback);
};

module.exports = YeelightBlue;
