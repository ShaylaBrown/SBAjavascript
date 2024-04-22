// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

console.log(Object.keys(AssignmentGroup) && (AssignmentGroup.assignments))


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


let average125 = (47 + 150) / (50 + 150)
let assignment_id1251 = 47 / 50
let assignment_id1252 = 150 / 150
let average132 = (39 + 125) / (50 + 150)
let assignment_id1321 = 39 / 50
let assignment_id1322 = (140 - 15) / 150
// late: (140 - 15) / 150
if (assignment_id1322 = (140 - 15) / 150)
	console.log('late!');
else
	console.log('On Time.');


console.log(average125)
console.log(average132)



const Learners = {
  Learner125: [
    {
      id: 125,
    },
    {
      avg: average125,
    },
    {
      1: assignment_id1251, 
    },
    {
      2: assignment_id1251  
    }
  ],
  Learner132: [
    {
      id: 132,
    },
    {
      avg: average132,
    },
    {
      1: assignment_id1251, 
    },
    {
      2: assignment_id1322  
    }
  ]
 
  
};

console.log(Object.keys(Learners) && (Learners.Learner125))

  let pass = 75;

if (Learners.avg > pass)
	console.log('Passed!');
else
	console.log('Failed.');










function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
 
  const result = [ 
   
 (Learners.Learner125 (Learners.Learner132)) //I'm not sure why I was unable to show both learners in the console.  I tried to concat the two arrays and got an output of one large array with a length of 8.  So I undid that.  
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


