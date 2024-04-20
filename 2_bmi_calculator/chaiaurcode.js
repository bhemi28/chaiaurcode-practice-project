const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI: ${bmi}<span/>`;

    const underWeight = document.querySelector("#under-weight");
    const normalWeight = document.querySelector("#normal-weight");
    const overWeight = document.querySelector("#over-weight");

    if (bmi < 18.6) {
      underWeight.style.color = "red";
    } else if (bmi > 18.6 && bmi < 24.9) {
      normalWeight.style.color = "green";
    } else {
      overWeight.style.color = "orange";
    }
  }
});
