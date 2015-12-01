var log = console.log;

function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.describe = function() {
    return "Person with name of " + this.first + ' ' + this.last;
}


var jake = new Person('Jake', 'Bassaville');


function Employee(first, last, title) {
    Person.call(this, first, last);
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
           + ' (' + this.title + ')';
}; 

var dilbert = new Employee('Dilbert', 'Cranbar', 'Chief Thinker');


module.exports = {
    test: function() {
      log(jake.describe(), jake);
      log(dilbert.describe(), dilbert);
    },
}

