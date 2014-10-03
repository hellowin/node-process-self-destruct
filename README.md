Node Process Self Destruct
==========================

Node modules that can be called to self destruct it's process.

##Usage
Copy this module to your Node local modules dependencies as a function constructor, see example

```node
SelfDestruct = require('./local_modules/node-process-self-destruct');
```

There are 2 methods to call scheduled self destruct:

1. Give exact date, see example
```node
new SelfDestruct({
    datetime: 'yyyy,MM,dd,hh,mm,ss'
});
```
where
```
yyyy = years, like 2014
MM = month, like 10
dd = date, like 03
hh = hours, like 10
mm = minutes, like 30
ss = seconds, like 10
```
2. Give next minutes schedule, see example
```node
new SelfDestruct({
    nextMinutes: 30
});
```
where `nextMinutes` is an Integer that represent the next minutes that process will be ended