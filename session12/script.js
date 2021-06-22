$(document).ready(function () {
  /* Define a class Camper whic takes details of a camper. 
   The instructor is also a camper but has a characteristic of teaching 
   and a student is a camper with the characteristic of leaner
*/
  var camper = document.getElementById("camper");
  var student = document.getElementById("student");
  var instructor = document.getElementById("instructor");

  class Camper {
    constructor(surname, name, age, gender, learn) {
      this.surname = surname;
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.learn = learn;
    }

    getUserDetails(sur, nam, ag, gen, lea) {
      return sur + " " + nam + " " + ag + " " + gen + " " + lea;
    }
  }

  var camper = new Camper();

  camperDetails = camper.getUserDetails(
    "John",
    "Doe",
    30,
    "Male",
    "Mobile App Development"
  );
  camper.innerHTML = camperDetails;

// Student camper
class Student extends Camper {
  constructor(subjests,edLevel, path) {
    super();
    this.subjests = subjests;
    this.edLevel = edLevel;
    this.path = path;
  }

  getStudentDetails(courses, level, path) {
    return courses + " " + level + " " + path;
  }
}
Stud = new Student();
studentDetails = Stud.getUserDetails(
  ["Js","jQuery", "HTML","cSS/SCSS" ],
  "Mudau",
  "Bootcamp Web Development",
);
student.innerHTML = studentDetails;


  class Instructor extends Camper {
    constructor(fname, course, salary) {
      super();
      this.fname = fname;
      this.course = course;
      this.salary = salary;
    }

    getInstructorDetails(fname, course, salary) {
      return fname + " teaches " + course + " and earns " + salary +" per month"; 
    }
  }
  const Instr = new Instructor();
 
 InstructorDetails = Instr.getInstructorDetails(
    "Tshifhiwa",
    "Human computer interaction",
    15000
  );
  instructor.innerHTML = InstructorDetails;
});
document.addEventListener("DOMContentLoaded", function () {
  $("#number").on('click', function(){
    this.$("#number")= count;
  }) 
});

let counter = 0;

function count() {
  counter++;
  document.getElementById("number").innerHTML = counter;
}
