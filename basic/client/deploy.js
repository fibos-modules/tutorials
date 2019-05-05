var FIBOS = require('./initClient.js')
var fs = require("fs");
var path = require("path");

var config = {
    "public-key": "FO6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
    "private-key": "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
    "contractName": "hello"
};

// new FIBOS client
var fibos = FIBOS(config["private-key"]);

//setcode
var js_code = fs.readTextFile( path.resolve(__dirname, "./hello/hello.js"));
fibos.setcodeSync(config["contractName"], 0, 0, fibos.compileCode(js_code));

//getcode
var code = fibos.getCodeSync(config["contractName"], true);
console.log("code:", code);

//setabi
var abi = JSON.parse(
    fs.readTextFile(
        path.resolve(__dirname, "./hello/hello.abi")
    )
);
fibos.setabiSync(config["contractName"], abi);