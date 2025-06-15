

//studentformget.js

document.getElementById('load').addEventListener('click', async function() {
  try {
    const response = await fetch('http://localhost:3000/api/student/gets');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const students = await response.json();

    const list = document.getElementById('student-list');
    list.innerHTML = ''; // already ullatha clear  pannum
    students.forEach(s => {
      const card = document.createElement('div');
      card.className = 'student-card';
// data view in html webpage
      card.innerHTML = `
        <h3>${s.fullName}</h3>
        <p><strong>Email:</strong> ${s.emailAddress}</p>
        <p><strong>Parent:</strong> ${s.parentGuardianName}</p>
        <p><strong>Age:</strong> ${s.age}</p>
        <p><strong>ID:</strong> ${s.studentId}</p>
        <p><strong>DOB:</strong> ${new Date(s.dateOfBirth).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> ${s.gender}</p>
        <p><strong>Address:</strong> ${s.address}</p>
        <p><strong>Attendance:</strong> ${s.attendancePercentage}%</p>
        <p><strong>Academy Mark:</strong> ${s.academyMark}</p>
      `;

      list.appendChild(card);
    });
  } catch (err) {
    console.error('details is not entry:', err);
    alert('not stored student data.');
  }
});
