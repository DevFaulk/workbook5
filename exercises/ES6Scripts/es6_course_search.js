let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];
// find prog200 start date if it exists

// let desiredCourse = "PROG200";

// const course = courses.find(course => course.CourseId == desiredCourse)

// if (course){
//     console.log(`Ladies and Gentleman we got em. ${desiredCourse} starts ${course.StartDate}`);
// }else {console.log(`It got away`);}

//find proj500 title if it exists

// let desiredCourse = "PROJ500";

// const course = courses.find((course) => course.CourseId == desiredCourse);

// if (course) {
//   console.log(`The title of ${desiredCourse} is ${course.Title}`);
// } else {
//   console.log(`Why you looking for something that doesn't exist`);
// }

// find titles of courses that cost less than $50 if they exist
for (const course of courses) {
  var desiredCourse = course.Fee < 50;
}
// Find the course within courses that has this parameter and return all of them into the variable "course"
const course = courses.find((course) => course.Fee == desiredCourse);

if (course) {
  console.log(`Here's all your cheap courses ${course.Title}`);
} else {
  console.log(`Nope you're gonna have to pay those premiums big dawg`);
}
