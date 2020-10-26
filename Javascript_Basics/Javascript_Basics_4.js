PATTERN 1: DEFINE A GLOBAL
    
// foo.js
    foo = function () {
      console.log('foo!');
    }

    // app.js
    require('./foo.js');
    foo();

PATTERN 2: EXPORT AN ANONYMOUS FUNCTION
    
    
  // bar.js
    module.exports = function () {
      console.log('bar!');
    }
 
// app.js
    var bar = require('./bar.js');
    bar();

PATTERN 3: EXPORT A NAMED FUNCTION
    
    
    // first.js
    exports.fiz = function () {
      console.log('fiz!');
    }
 
// app.js
    var FOO = require('./first.js').fiz;
    FOO();

PATTERN 4: EXPORT AN ANONYMOUS OBJECT
    
      // buz.js
    var Buz = function () {};
    Buz.prototype.log = function () {
      console.log('buz!');
    };
    module.exports = new Buz();

  // app.js
    var buz = require('./buz.js');
    buz.log();

PATTERN 5: EXPORT A NAMED OBJECT
    
    
 // baz.js
    var Baz = function () {};
    Baz.prototype.log = function () {
      console.log('baz!');
    };

    exports.Baz = new Baz();

    // app.js
    var baz = require('./baz.js').Baz;
    baz.log();

PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE
    
    
 // doo.js
    var Doo = function () {};
    Doo.prototype.log = function () {
        console.log('doo!');
    }
    module.exports = Doo;

// app.js
    var Doo = require('./doo.js');
    var doo = new Doo();
    doo.log();

PATTERN 7: EXPORT A NAMED PROTOTYPE
        // qux.js
    var Qux = function () {};
    Qux.prototype.log = function () {
      console.log('baz!');
    };
    exports.Qux = Qux;


    // app.js
    var Qux = require('./qux.js').Qux;
    var qux = new Qux();
    qux.log();
