const recordForm = document.getElementById("recordForm");
const recordsList = document.getElementById("recordsList");

let records = [];

recordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const recordId = document.getElementById("recordId").value;

  if (name && email && password) {
    if (recordId) {
      // Update record
      const index = records.findIndex((record) => record.id === recordId);
      records[index] = { id: recordId, name, email, password };
    } else {
      // Create record
      const id = Date.now().toString();
      records.push({ id, name, email, password });
    }
    renderRecords();
    recordForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

function renderRecords() {
  recordsList.innerHTML = "";
  records.forEach((record) => {
    const recordElement = document.createElement("div");
    recordElement.innerHTML = `
    <div class="eleContainer">
        <div class="item"><p>Name: ${record.name}</p></div>
        <div class="item"><p>Email: ${record.email}</p></div>
        <div class="item"><p>Password: ${record.password}</p></div>
        <div class="item but"><button onclick="editRecord('${record.id}')">Edit</button></div>
        <div class="item but"><button onclick="deleteRecord('${record.id}')">Delete</button></div>
    </div>
        `;
    recordsList.appendChild(recordElement);
  });
}

function editRecord(id) {
  const record = records.find((record) => record.id === id);
  document.getElementById("name").value = record.name;
  document.getElementById("email").value = record.email;
  document.getElementById("password").value = record.password;
  document.getElementById("recordId").value = record.id;
}

function deleteRecord(id) {
  records = records.filter((record) => record.id !== id);
  renderRecords();
}
