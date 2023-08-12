let heading1 = document.getElementById('heading1')
let paragraph1 = document.getElementById('paragraph1')
let paragraph2 = document.getElementById('paragraph2')

var marksC = parseInt(prompt("Enter the marks of chemistry "))
var marksP = parseInt(prompt("Enter the marks of physics "))
var marksM = parseInt(prompt("Enter the marks of maths"))
var marksE = parseInt(prompt("Enter the marks of english "))
var marksB = parseInt(prompt("Enter the marks of biology "))

if (isNaN(marksC) || isNaN(marksP) || isNaN(marksM) || isNaN(marksE) || isNaN(marksB)) {
    alert("you must have to enter all subjects marks")
}
else if (marksC > 100 || marksP > 100 || marksM > 100 || marksE > 100 || marksB > 100) {
    alert("Marks should be less than or equal to 100 ")
}
else {

    let totalMarks = 500
    let obtainedMarks = marksC + marksB + marksE + marksM + marksP

    let percentage = Math.floor((obtainedMarks / totalMarks) * 100)
    if (percentage >= 90) {
        var Grade = "A+"
    }
    else if (percentage >= 80 && percentage < 90) {
        Grade = "A"
    }
    else if (percentage >= 70 && percentage < 80) {
        Grade = "B+"
    }
    else if (percentage >= 60 && percentage < 70) {
        Grade = "B"
    }
    else if (percentage >= 50 && percentage < 60) {
        Grade = "C+"
    }
    else if (percentage >= 40 && percentage < 50) {
        Grade = "C"
    }
    else {
        Grade = "F"
    }

    heading1.innerHTML = "Result"
    paragraph1.innerHTML = `Percentage = ${percentage}`
    paragraph2.innerHTML = `Grade = ${Grade}`

}
