function calculateBMI () {
  // Get height and weight values
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Check if inputs are valid numbers
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').innerText = "Please enter valid height and weight.";
    return;
  }

  // Calculate BMI
  const bmi = weight / ((height / 100) ** 2);

  // Determine BMI category
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    category = "Obesity";
  } else {
    category = "Extra Obesity";
  }

  // Display result
  document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(1)} (${category}).`;
}

