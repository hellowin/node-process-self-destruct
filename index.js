/* jshint node:true */
var schedule = require('node-schedule'),
    http = require('http');

var SelfDestruct = function(arg){
    var that = this,
        config = arg || null;
    
    that.date = null;
    that.schedule = null;
    
    if(arg){
        var datetime    = arg.datetime || null,
            nextMinutes = arg.nextMinutes || null,
            dateObject  = arg.dateObject || null;
        if(datetime){
            var input   = datetime.split(',');
            that.date   = new Date(input[0], parseInt(input[1])-1, input[2], input[3], input[4], input[5]);
            that.start();
        }
        else if(nextMinutes){
            that.date   = new Date(new Date().getTime() + nextMinutes*60000);
            that.start();
        }
        else if(dateObject){
            that.date   = dateObject;
            that.start();
        }
    }
    
    that.start = function(){
        that.schedule = schedule.scheduleJob(that.date, function(){
            console.log('Self destruct activated!');
            console.log('I will suicide at ', that.date.toISOString());
            that.exit();
        });
    };
    
    that.cancel = function(){
        console.log('Self destruct deactived');
        that.schedule.cancel();
    };
    
    that.exit = function(){
        console.log('Bye bye world...');
        process.exit(0);
    };
};

module.exports = SelfDestruct;