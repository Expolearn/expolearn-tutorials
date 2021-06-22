$(document).ready(function () {
  var person = document.getElementById("person");
  var developer = document.getElementById("developer");
  var marketer = document.getElementById("marketer");
  var student = document.getElementById("student");
  var businessman = document.getElementById("businessman");

  class Person {
    constructor(
      firstname,
      lastname,
      emailAddress,
      physicalAddress,
      PhoneNumber,
      profession
    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.emailAddress = emailAddress;
      this.physicalAddress = physicalAddress;
      this.PhoneNumber = PhoneNumber;
      this.profession = profession;
    }

    getPersonDetails(fname, lName, email, address, phone, prof) {
      var details;
      details =
        "Hi! " +
        fname +
        " " +
        lName +
        "<br/> phone number: " +
        phone +
        "<br/> EmailAddress: " +
        email +
        "<br/>Residence " +
        address +
        "<br/>" +
        "Profession: " +
        prof;
      return details;
    }
  }

  var personClass = new Person();
  var personDetails = personClass.getPersonDetails(
    "Murendeni",
    "Ramavhale",
    "murendeni@gmail.com",
    " 14 Rd Johannesburg",
    071453553,
    " N/A"
  );
  person.innerHTML = personDetails;

  class Developer extends Person {
    constructor() {
      super();
    }

    getDevskills(skills, exp) {
      var details =
        "<br/><strong> Skills</strong>: " +
        skills +
        "<br> <strong> Experience: </strong>" +
        exp;
      return details;
    }
  }

  var dev = new Developer();
  var developerDetails = dev.getPersonDetails(
    "Tshifhiwa",
    "Sinugo",
    "sinugo@gmail.com",
    " 7th Rd Johannesburg",
    "+27 73953553",
    " Developer"
  );
  developer.innerHTML =
    developerDetails + dev.getDevskills(["java", "C", "C++", "Python"], 5);
});
