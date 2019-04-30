var os = require('os');
var colors = require('colors');

// var colors = require('colors');
function getOSinfo() {
    var type = os.type();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log('System: '.rainbow, type);
    console.log('Release: '.underline, release);
    console.log('CPU model: '.rainbow, cpu);
    console.log('User name: '.red, userInfo.username);
    console.log('Home dir: '.magenta, userInfo.homedir);
};

exports.print = getOSinfo;