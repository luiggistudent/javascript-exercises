function calculateAverage() {
    const labor_score = document.querySelector("#labor").value;
    const semester_score = document.querySelector("#semester").value;
    const finalExam_score = document.querySelector("#final-exam").value;
    const average = (labor_score*2 + semester_score*3 + finalExam_score*5)/10;
    let concept = "";
    if (average >= 8 && average <= 10) concept = "A"
    else if (average >= 7 && average <= 8) concept = "B"
    else if (average >= 6 && average <= 7) concept = "C"
    else if (average >= 5 && average <= 6) concept = "D"
    else if (average >= 0 && average <= 5) concept = "E"
    document.getElementById("media").innerHTML = `Média Final: ${average}, Conceito: ${concept}`;
}