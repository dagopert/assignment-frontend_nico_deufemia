'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyObject = exports.MyObject = (function () {
    //   "use strict";
    //    class myObject {
    function MyObject(name, description, price) {
        _classCallCheck(this, MyObject);

        this.id = MyObject.uuid()(typeof name === 'undefined') ? this.name = name : name = null(typeof description === 'undefined') ? this.description = description : description = null(typeof price === 'undefined') ? this.price = price : price = null;
    }

    _createClass(MyObject, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.name + ', ' + this.description + ', ' + this.price + '€ )';
        }
    }], [{
        key: 'uuid',
        value: function uuid() {
            if (!MyObject.counter) {
                MyObject.counter = 0;
            }
            return MyObject.counter++;
        }
    }]);

    return MyObject;
})();

exports.default = MyObject;