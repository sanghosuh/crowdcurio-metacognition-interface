var $ = require('jquery');

var CrowdCurioClient = require('crowdcurio-client')


Metacogneto.prototype.initialize = function(config)
{
    var that = this;
    this.client = new CrowdCurioClient();
    this.client.init({
        user: global.user,
        task: global.task,
        experiment: global.experiment,
        condition: global.condition,
        configuration: config
    }).then(function(){
        that.postInitialize();
    });

    this.client.task_session.setListeners({
        "save": this.handleNotification.bind(this),
        "delete": this.handleNotification.bind(this)
    });
}



Metacogneto.prototype.postInitialize = function(config)
{
    this.getNextTask();
}


Metacogneto.prototype.render = function()
{
    var functions = {
        // TODO: this is a temporary change for 1-player mode
        "lobby": this.renderLobby1P,
        "game": this.renderGame,
        "score": this.renderScoreScreen
    }

    var render_func = functions[this.mode].bind(this);

    if(render_func)
    {
        render_func();
    }
    else
    {
        console.log("Unrecognized rendering mode " + mode);
    }
}










