var async = require('async');

var YeelightBlue = require('./index');

YeelightBlue.discover(function(yeelightBlue) {
  console.log('found ' + yeelightBlue.uuid);

  yeelightBlue.on('disconnect', function() {
    console.log('disconnected!');
    process.exit(0);
  });

  function lightSequence(doneCallback) {
    async.series([
      function(callback) {
        console.log('turnOn');
        yeelightBlue.turnOn(function() {
          console.log('\tdelay');
          setTimeout(callback, 5000);
        });
      },
      function(callback) {
        console.log('setColorAndBrightness - red');
        yeelightBlue.setColorAndBrightness(255, 0, 0, 100, function() {
          console.log('\tdelay');
          setTimeout(callback, 5000);
        });
      },
      function(callback) {
        console.log('setColorAndBrightness - green');
        yeelightBlue.setColorAndBrightness(0, 255, 0, 100, function() {
          console.log('\tdelay');
          setTimeout(callback, 5000);
        });
      },
      function(callback) {
        console.log('setColorAndBrightness - blue');
        yeelightBlue.setColorAndBrightness(0, 0, 255, 100, function() {
          console.log('\tdelay');
          setTimeout(callback, 5000);
        });
      },
      function(callback) {
        console.log('setColorAndBrightness - white + dim');
        yeelightBlue.setColorAndBrightness(255, 255, 255, 50, function() {
          console.log('\tdelay');
          setTimeout(callback, 5000);
        });
      },
      function(callback) {
        console.log('turnOff');
        yeelightBlue.turnOff(function() {
          callback();
        });
      },
      function() {
        doneCallback();
      }
    ]);
  }

  async.series([
      function(callback) {
        console.log('connectAndSetup');
        yeelightBlue.connectAndSetup(callback);
      },
      function(callback) {
        console.log('setGradualMode - true');
        yeelightBlue.setGradualMode(true, callback);
      },
      function(callback) {
        lightSequence(callback);
      },
      function(callback) {
        console.log('setGradualMode - false');
        yeelightBlue.setGradualMode(false, callback);
      },
      function(callback) {
        lightSequence(callback);
      },
      function(callback) {
        console.log('disconnect');
        yeelightBlue.disconnect(callback);
      }
    ]
  );
});