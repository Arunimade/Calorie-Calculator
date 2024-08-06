function calculateCalories() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;

    if (!age || !gender || !weight || !height || !activity || !goal) {
        alert('Please fill in all fields');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let activityMultiplier;
    switch (activity) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'lightly active':
            activityMultiplier = 1.375;
            break;
        case 'moderately active':
            activityMultiplier = 1.55;
            break;
        case 'very active':
            activityMultiplier = 1.725;
            break;
        case 'super active':
            activityMultiplier = 1.9;
            break;
    }

    let calories = bmr * activityMultiplier;

    if (goal === 'lose') {
        calories -= 500;
    } else if (goal === 'gain') {
        calories += 500;
    }

    document.getElementById('result').innerText = `You need ${calories.toFixed(2)} calories per day to ${goal} weight.`;
}
