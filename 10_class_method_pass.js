class Student {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this?.name} is Running 🏃 🏃`);
  }
}
class Event {
  participate(action) {
    console.log("..........................");
    console.log("Participation Successful.");
    console.log("Event Started.");
    action();
  }
}

const student = new Student("virendra");
student.run();

const event = new Event();
event.participate(() => console.log("Action started.."));
event.participate(student.run);
