var fibos = require('fibos');
var path = require('path');

fibos.load('chain', {
	"contracts-console": true,
	"delete-all-blocks": true,
});
fibos.load('chain_api');
fibos.load('history_api');
fibos.load('producer', {
    'producer-name': 'eosio',
    'enable-stale-production': true
});
fibos.load('http', {
    'http-server-address': '0.0.0.0:8888',
    "access-control-allow-origin": "*",
    "http-validate-host": false,
    "verbose-http-errors": true
});

fibos.load('net', {
    'p2p-listen-endpoint': '0.0.0.0:9876'
});
fibos.data_dir = fibos.config_dir = path.join(__dirname, '.fibos/');
fibos.enableJSContract = true;
fibos.start();