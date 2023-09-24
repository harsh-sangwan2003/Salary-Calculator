window.addEventListener("load", bindEvents);

function bindEvents() {

    document.getElementById('compute').addEventListener("click", computeSalary);
}

function computeSalary() {

    let basicSalary = parseInt(document.getElementById("salary").value);
    salaryOperations.takeSalary(basicSalary);

    let divTag = document.querySelector('#result');

    for (let key in salaryOperations) {

        if (key === "basicSalary" || key === "takeSalary")
            continue;

        let pTag = document.createElement('p');
        pTag.innerText = `${key.toUpperCase()} is ${salaryOperations[key]()}`;
        divTag.appendChild(pTag);
    }
}