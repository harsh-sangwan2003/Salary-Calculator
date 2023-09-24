const salaryOperations = {

    basicSalary: 0,
    takeSalary(basicSalary) {

        this.basicSalary = basicSalary
    },
    hra() {

        return this.basicSalary * 0.30;

    },
    da() {

        return this.basicSalary * 10;

    },
    ta() {

        return this.basicSalary * 20;

    },
    pf() {

        return this.basicSalary * 0.05;

    },
    gs() {

        return this.basicSalary + this.hra() + this.da() + this.ta();

    },
    ns() {

        return this.gs() - this.pf();

    }

}