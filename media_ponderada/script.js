function calculateAverage() {
    const labor_score = document.querySelector("#labor").value;
    const semester_score = document.querySelector("#semester").value;
    const finalExam_score = document.querySelector("#final-exam").value;
    const average = (labor_score*2 + semester_score*3 + finalExam_score*5)/10;
    document.getElementById("media").innerHTML = `Média Final: ${average}`;
}