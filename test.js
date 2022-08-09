import fetch from 'node-fetch';

const post = await fetch(`http://localhost:3000/child`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(  {
    name: "lilly",
    scoreone: 0,
    timecompleted: '00:00:00',
    datecompleted: '2011-05-03 '
},),
});
const dat = await post.json();
const info = dat.payload[0].student_id;
// const {student_id} = dat.payload[0].student_id
// console.log(student_id)

const postParent = await fetch(`http://localhost:3000/parent`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstname: "Chris",
    lastname: "Meah",
    passcode: 9999,
    student_id: info,
    email: "soc@org.uk"
},),
});
const data = await postParent.json();
// console.log(dat.payload[0].student_id)
// const [student_id] = data.payload[0]
console.log(data)