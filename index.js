/* jshint node:true */
var schedule = require('node-schedule'),
    http = require('http');

var SelfDestruct = function(arg){
    var that = this,
        config = arg || null;
    if(arg){
        var datetime = arg.datetime || null,
            nextMinutes = arg.nextMinutes || null,
            date;
        if(datetime){
            var input   = datetime.split(',');
            
            date        = new Date(input[0], parseInt(input[1])-1, input[2], input[3], input[4], input[5]);
            schedule.scheduleJob(date, function(){
                that.exit();
            });
        }
        else if(nextMinutes){
            date        = new Date(new Date().getTime() + nextMinutes*60000);
            console.log(date);
            schedule.scheduleJob(date, function(){
                that.exit();
            });
        }
    }
    
    this.exit = function(){
        console.log('Bye bye world...');
        process.exit(0);
    };
};

module.exports = SelfDestruct;