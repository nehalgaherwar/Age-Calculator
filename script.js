function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (dob === "") {
    result.innerHTML = "⚠️ Please select your date of birth";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.innerHTML = `🎉 Your Age is <br> ${age} Years`;
}
