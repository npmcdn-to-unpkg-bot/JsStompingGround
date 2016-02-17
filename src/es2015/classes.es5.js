import {log} from '../utils';


function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.describe = function() {
    return 'Person with name of ' + this.first + ' ' + this.last;
}

function Employee(first, last, title) {
    Person.call(this, first, last);
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
  return Person.prototype.describe.call(this) + ' (' + this.title + ')'; // super.describe()
};

var jake = new Person('Jake', 'Bassaville');
var dilbert = new Employee('Dilbert', 'Cranbar', 'Chief Thinker');
log(jake.describe(), jake);
log(dilbert.describe(), dilbert);
