// Array to store food entries
const entries = [];

// Function to add a new entry to the list
function addEntry() {
  const food = document.getElementById('food').value;
  const calories = parseFloat(document.getElementById('calories').value);
  const protein = parseFloat(document.getElementById('protein').value);
  const fat = parseFloat(document.getElementById('fat').value);

  // Validate inputs
  if (!food || isNaN(calories) || isNaN(protein) || isNaN(fat)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Add entry to the entries array
  entries.push({ food, calories, protein, fat });

  // Update the UI
  displayEntries();
  calculateTotals();

  // Clear input fields
  document.getElementById('trackerForm').reset();
}

// Function to display entries
function displayEntries() {
  const entryList = document.getElementById('entryList');
  entryList.innerHTML = ""; // Clear the list

  entries.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.innerText = `${entry.food}: ${entry.calories} kcal, ${entry.protein}g protein, ${entry.fat}g fat`;
    entryList.appendChild(listItem);

  function updateTracker() {
      const calories = document.getElementById("calories").value || 0;
      const protein = document.getElementById("protein").value || 0;
      const fat = document.getElementById("fat").value || 0;
    
      document.getElementById("calorieResult").innerText = `Calories: ${calories}`;
      document.getElementById("proteinResult").innerText = `Protein: ${protein}g`;
      document.getElementById("fatResult").innerText = `Fat: ${fat}g`;
    }
  });
}

// Function to calculate and display total values
function calculateTotals() {
  let totalCalories = 0, totalProtein = 0, totalFat = 0;

  entries.forEach(entry => {
    totalCalories += entry.calories;
    totalProtein += entry.protein;
    totalFat += entry.fat;
  });

  const totals = document.getElementById('totals');
  totals.innerText = `Total: ${totalCalories} kcal, ${totalProtein}g protein, ${totalFat}g fat`;
}
