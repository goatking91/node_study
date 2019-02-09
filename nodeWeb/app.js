var ex = require('./ex.js');
ex.hello();

var ge = require('./ge.js');
var geinstance = new ge(); // 필요시 new를 통해 사용
geinstance.run();