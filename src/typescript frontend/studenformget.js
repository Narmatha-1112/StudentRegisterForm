document.getElementById('load').addEventListener('click', async function() {
  try {
    const response = await fetch('http://localhost:3000/api/student/gets');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const students = await response.json();

    // Get current studentId from localStorage
    const currentId = localStorage.getItem('currentStudentId');

    const list = document.getElementById('student-list');
    list.innerHTML = ''; // clear old content

    // Find the student with matching ID (convert ID to string for reliable compare)
    const currentStudent = students.find(s => String(s.studentId) === currentId);

    if (currentStudent) {
      const card = document.createElement('div');
      card.className = 'student-card';

      // Data view in HTML webpage
      card.innerHTML = `
        <h3>${currentStudent.fullName}</h3>
        <p><strong>Email:</strong> ${currentStudent.emailAddress}</p>
        <p><strong>Parent:</strong> ${currentStudent.parentGuardianName}</p>
        <p><strong>Age:</strong> ${currentStudent.age}</p>
        <p><strong>ID:</strong> ${currentStudent.studentId}</p>
        <p><strong>DOB:</strong> ${new Date(currentStudent.dateOfBirth).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> ${currentStudent.gender}</p>
        <p><strong>Address:</strong> ${currentStudent.address}</p>
        <p><strong>Attendance:</strong> ${currentStudent.attendancePercentage}%</p>
        <p><strong>Academy Mark:</strong> ${currentStudent.academyMark}</p>
      `;

      list.appendChild(card);

    } else {
      list.innerHTML = '<p style="color:white;">No submitted student data found.</p>';
    }

  } catch (err) {
    console.error('details is not entry:', err);
    alert('not stored student data.');
  }
});
