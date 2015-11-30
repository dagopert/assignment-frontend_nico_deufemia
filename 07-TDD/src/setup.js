module.exports = function setup() {
    "use strict";
    let objects_draft = []
    class myObject {
        constructor(name, description, price) {
            /*
             (typeof(objects_draft) === 'undefined') ? null : this.id = objects_draft.length
             (name != "") ? this.name = name : name =  null
             (description) ? this.description = description : description = null
             (price) ? this.price = price : price = null
             */
            this.id = 1
            this.name = "test"
            this.description = "test"
            this.price = "123"

            objects_draft.push(this)
        }
        toString() {
            return '(' + this.name + ', ' + this.description + ', ' + this.price + '€ )';
        }
    }
}
