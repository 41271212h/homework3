// Function to provide suggestions based on user input
function getSuggestions() {
  const level = document.getElementById('level').value;
  const goal = document.getElementById('goal').value;
  const suggestions = document.getElementById('suggestions');

  if (!level || !goal) {
    suggestions.innerText = "Please select both your fitness level and goal.";
    return;
  }

  // Define suggestion messages based on fitness level and goal
  let message;

  if (level === 'beginner') {
    if (goal === 'strength') {
      message = "Start with basic bodyweight exercises like squats, push-ups, and lunges. Gradually increase weights.";
    } else if (goal === 'endurance') {
      message = "Begin with brisk walking or light jogging. Aim for 20-30 minutes, 3-4 times a week.";
    } else if (goal === 'flexibility') {
      message = "Try beginner yoga stretches focusing on hamstrings, shoulders, and back.";
    } else {
      message = "Mix cardio and light strength training for a balanced approach. Focus on consistency!";
    }
  } else if (level === 'intermediate') {
    if (goal === 'strength') {
      message = "Incorporate weightlifting routines targeting major muscle groups. Aim for progressive overload.";
    } else if (goal === 'endurance') {
      message = "Try interval training or cycling to build stamina. Aim for 30-45 minute sessions.";
    } else if (goal === 'flexibility') {
      message = "Practice intermediate yoga flows or dynamic stretches to improve range of motion.";
    } else {
      message = "Balance strength, cardio, and flexibility training. Aim for 4-5 workout sessions per week.";
    }
  } else if (level === 'advanced') {
    if (goal === 'strength') {
      message = "Consider advanced weightlifting techniques, like deadlifts and bench press. Track progress closely.";
    } else if (goal === 'endurance') {
      message = "Increase your mileage or training intensity with long-distance runs or endurance circuits.";
    } else if (goal === 'flexibility') {
      message = "Advanced yoga or pilates can help with muscle recovery and flexibility. Include active stretching.";
    } else {
      message = "Focus on a structured regimen with a mix of high-intensity interval training, strength, and mobility work.";
    }
  }

  // Display the suggestion message
  suggestions.innerText = message;
}
