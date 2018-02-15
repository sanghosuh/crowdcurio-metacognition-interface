//  file:   main.js
//  author: sangho s.
//  desc:   root file for bundling metacognition interface
global.jQuery = require("jquery")
global.$ = require("jquery")
var Metacogneto = require('./metacogneto');

// set global UI vars
global.DEV = false;
global.task = window.task || -1;
global.user = window.user || -1;
global.experiment = window.experiment || -1;
var config = window.config || {
        'mode': 'transcription',
    };

function start(configuration){
    /* create and init the annotator ui */
    ms = new MetacognitionUI();
    ms.initialize(config);
}

/* create the interface */
start(config);