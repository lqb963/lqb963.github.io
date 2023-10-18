
class Student {
  fullName: string;
  constructor(public firstName, public lastName) {
    this.fullName = firstName + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return "hello" + person.firstName
}
let user = new Student('jane', 'july')

greeter(user)