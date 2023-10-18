var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello" + person.firstName;
}
var user = new Student('jane', 'july');
greeter(user);
