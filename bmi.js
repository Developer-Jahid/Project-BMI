const form = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");


// Height field থেকে Enter চাপলে Weight field-এ যাবে
heightInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        weightInput.focus();
    }
});


// BMI Calculate
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {

        alert("Please enter valid height and weight.");

        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("bmiValue").textContent =
        bmi.toFixed(2);

    let status = "";
    let width = 0;
    let color = "";
    let advice = "";

    if (bmi < 18.5) {

        status = "Underweight";
        width = 25;
        color = "#00BFFF";

        advice = `
        • আপনার ওজন স্বাভাবিকের চেয়ে কম।<br><br>

        • পুষ্টিকর খাবার বেশি খান।<br>
        • দুধ, ডিম, মাছ ও মাংস খাদ্যতালিকায় রাখুন।<br>
        • পর্যাপ্ত ঘুম নিশ্চিত করুন।<br>
        • নিয়মিত স্বাস্থ্য পরীক্ষা করুন।<br>
        • প্রয়োজনে পুষ্টিবিদের পরামর্শ নিন।
        `;
    }

    else if (bmi < 25) {

        status = "Normal Weight";
        width = 50;
        color = "#00FF7F";

        advice = `
        • অভিনন্দন! আপনার BMI স্বাভাবিক রয়েছে।<br><br>

        • সুষম খাদ্য গ্রহণ করুন।<br>
        • প্রতিদিন কিছু সময় ব্যায়াম করুন।<br>
        • পর্যাপ্ত পানি পান করুন।<br>
        • স্বাস্থ্যকর জীবনযাপন বজায় রাখুন।
        `;
    }

    else if (bmi < 30) {

        status = "Overweight";
        width = 75;
        color = "#FFD700";

        advice = `
        • আপনার ওজন স্বাভাবিকের চেয়ে বেশি।<br><br>

        • ফাস্টফুড ও অতিরিক্ত তেলযুক্ত খাবার কম খান।<br>
        • প্রতিদিন অন্তত ৩০ মিনিট হাঁটুন।<br>
        • নিয়মিত ব্যায়াম করুন।<br>
        • কোমল পানীয় ও অতিরিক্ত চিনি এড়িয়ে চলুন।
        `;
    }

    else {

        status = "Obese";
        width = 100;
        color = "#FF4500";

        advice = `
        • আপনার BMI স্থূলতার পর্যায়ে রয়েছে।<br><br>

        • দ্রুত ওজন নিয়ন্ত্রণের পরিকল্পনা করুন।<br>
        • নিয়মিত ব্যায়াম করুন।<br>
        • কম ক্যালরিযুক্ত খাবার গ্রহণ করুন।<br>
        • চিকিৎসক বা পুষ্টিবিদের পরামর্শ নিন।<br>
        • নিয়মিত স্বাস্থ্য পরীক্ষা করুন।
        `;
    }

    document.getElementById("status").textContent =
        status;

    document.getElementById("advice").innerHTML =
        advice;

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width =
        width + "%";

    progressBar.style.backgroundColor =
        color;
});