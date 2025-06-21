

//studentform.js

document.getElementById('studentformdata').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  

  // Convert number 
  data.age = Number(data.age);
  data.studentId = Number(data.studentId);
  data.dateOfBirth = new Date(data.dateOfBirth);
  data.attendancePercentage = Number(data.attendancePercentage);
  data.academyMark = Number(data.academyMark);

  try {
   const response = await fetch('https://studentregisterform.onrender.com/api/student/creates', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      alert('Student created successfully!');
    } else {
      const error = await response.json();
      console.error('Server Error:', error);
      alert('Failed to create student.');
    }
  } catch (error) {
    console.error('Network or server error:', error);
    alert('Something went wrong while creating student.');
  }
});
