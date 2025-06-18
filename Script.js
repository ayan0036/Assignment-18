 const form = document.getElementById('student-form');
const studentDataDiv = document.getElementById('student-data');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const studentName = document.getElementById('student-name').value;
  const subject = document.getElementById('subject').value;
  const marks = document.getElementById('marks').value;

  if (studentName && subject && marks) {
    const studentData = {
      studentName,
      subject,
      marks,
    };

    const studentDataHtml = `
      <p>Student Name: ${studentData.studentName}</p>
      <p>Subject: ${studentData.subject}</p>
      <p>Marks: ${studentData.marks}</p>
      <hr>
    `;

    studentDataDiv.innerHTML += studentDataHtml;
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
