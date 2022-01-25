import { salaryOperations } from "../Model/task.js";

window.addEventListener('load', bindEvents);

function bindEvents() {

    document.getElementById('compute').addEventListener('click', computeSalary);
}

function computeSalary() {

    let basicSalary = parseInt(document.getElementById('salary').value);
    salaryOperations.addSalary(basicSalary);

    let bodydivTag = document.getElementById('msg-body');

    for (let key in salaryOperations) {

        if (key == 'basicSalary' || key == 'addSalary')
            continue;

        let divTag = document.createElement('div');
        let pTag = document.createElement('p');
        let value = salaryOperations[key]();

        pTag.innerText = `${key.toUpperCase()} is ${value}`;
        divTag.appendChild(pTag);
        bodydivTag.appendChild(divTag);
    }
}