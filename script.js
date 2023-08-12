let marksC = prompt("Enter the marks of chemistry ")
let marksP = prompt("Enter the marks of physics ")
let marksM = prompt("Enter the marks of maths")
let marksE = prompt("Enter the marks of english ")
let marksB = prompt("Enter the marks of biology ")


let totalMarks = 500
let obtainedMarks = marksC + marksB + marksE + marksM + marksP

let percentage = (obtainedMarks / totalMarks) * 100
console.log(percentage)