// let students = [];
let students = JSON.parse(localStorage.getItem("students")) || [];


function renderTable() {
  console.log("Rendering Students:", students);

  const table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, i) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.dept}</td>
        <td>
          <button onclick="editStudent(${i})">Edit</button>
          <button onclick="deleteStudent(${i})">Delete</button>
        </td>
      </tr>`;
  });
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dept = document.getElementById("dept").value;
  const index = document.getElementById("index").value;

  const student = { name, roll, dept };

  if (index === "") {
    students.push(student);
  } else {
    students[index] = student;
    document.getElementById("index").value = "";
  }
  localStorage.setItem("students", JSON.stringify(students));


  console.log("Updated Students:", students);
  this.reset();
  renderTable();
});

function editStudent(i) {
  const student = students[i];
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("dept").value = student.dept;
  document.getElementById("index").value = i;
}

function deleteStudent(i) {
  students = students.filter((val,ind)=>{
    return ind!=i
  })
  console.log("After Deletion:", students);
  localStorage.setItem("students", JSON.stringify(students));
  renderTable();
}

window.onload=function () {
  if(!sessionStorage.getItem("logged"))
    location.assign("./login.html")
  renderTable()
}
