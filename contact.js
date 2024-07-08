const form = document.getElementById("contactForm");
const tableBody = document.querySelector("#contactTable tbody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${number}</td>
        <td>${subject}</td>
        <td>${message}</td>
        <td>
            <button class="updateBtn">Update</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;
    tableBody.appendChild(newRow);

    form.reset();
});

tableBody.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("deleteBtn")) {
        const row = target.closest("tr");
        row.remove();
    } else if (target.classList.contains("updateBtn")) {
        const row = target.closest("tr");
        const cells = row.querySelectorAll("td");

        document.getElementById("name").value = cells[0].textContent;
        document.getElementById("email").value = cells[1].textContent;
        document.getElementById("number").value = cells[2].textContent;
        document.getElementById("subject").value = cells[3].textContent;
        document.getElementById("message").value = cells[4].textContent;

        row.remove();
    }
});
