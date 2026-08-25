const form = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");


// Height → Weight
heightInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        weightInput.focus();
    }
});


// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    let bmi = weight / Math.pow(height / 100, 2);

    document.getElementById("bmiValue").textContent =
        bmi.toFixed(2);

    let status = "";
    let width = 0;
    let color = "";

    if (bmi < 18.5) {
        status = "Underweight";
        width = 25;
        color = "#00BFFF";
    }
    else if (bmi < 25) {
        status = "Normal Weight";
        width = 50;
        color = "#00FF7F";
    }
    else if (bmi < 30) {
        status = "Overweight";
        width = 75;
        color = "#FFD700";
    }
    else {
        status = "Obese";
        width = 100;
        color = "#FF4500";
    }

    document.getElementById("status").textContent = status;

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = width + "%";
    progressBar.style.backgroundColor = color;
});