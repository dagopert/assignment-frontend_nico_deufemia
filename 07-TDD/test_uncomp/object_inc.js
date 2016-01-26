export class MyObject{
//   "use strict";
//    class myObject {
        constructor(name, description, price) {
             this.id =  MyObject.uuid()
             (typeof(name) === 'undefined') ? this.name = name : name =  null
             (typeof(description) === 'undefined') ? this.description = description : description = null
             (typeof(price) === 'undefined') ? this.price = price : price = null
        }
        static uuid() {
            if(!MyObject.counter) {
                MyObject.counter = 0
            }
            return MyObject.counter++
        }
        toString() {
            return '(' + this.name + ', ' + this.description + ', ' + this.price + '€ )';
        }
}
export default MyObject

