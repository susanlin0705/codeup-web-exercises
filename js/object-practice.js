var makeCar = function(name1,name2){
    return{
        make:name1,
        model:name2
    }
};
makeCar("VW", "beetle");

var salesReport = {
    title: "Monthly Sales Report",
    date:"03-17-2015",
    office:"Codeup",
    employees:[
        {
            number:"1",
            firstName:'Jane',
            lastName:'Janeway',
            salesUnits:'3'
        },
        {
            number:"3",
            firstName:'Tricia',
            lastName:'Tricason',
            salesUnits:'5'
        },
        {
            number:"4",
            firstName:'Jeannette',
            lastName:'Jeanson',
            salesUnits:'4'
        },
        {
            number:"5",
            firstName:'Charles Emmerson',
            lastName:'Winchester',
            salesUnits:'2'
        },
        {
            number:"6",
            firstName:'Chet',
            lastName:'Chedderson',
            salesUnits:'4'
        },
        {
            number:"7",
            firstName:'Chaiam',
            lastName:'Chaiamson',
            salesUnits:'12'
        },
        {
            number:"8",
            firstName:'Dale',
            lastName:'Dalesinger',
            salesUnits:'1'
        },
        {
            number:"9",
            firstName:'Zig',
            lastName:'Ziglar',
            salesUnits:'50'
        },
        {
            number:"10",
            firstName:'Henry',
            lastName:'Kisssinger',
            salesUnits:'1'
        },
        {
            number:"11",
            firstName:'Arthur Herbert',
            lastName:'Fonzarelli',
            salesUnits:'23'
        },
        {
            number:"12",
            firstName:'Betty ',
            lastName:'Boop',
            salesUnits:'67'
        }],
        getEmployeeCount: function () {
                return this.employees.length
            },
        getTotalNumberOfSales: function () {
                var total = 0;

                this.employees.forEach(function (employee) {
                    total += Number(employee.salesUnits)
                });
                return total
            },
        getAverageSalesPerEmployee: function () {

                var total = 0;
                this.employees.forEach(function (salesTotal) {
                    total += Number(salesTotal.salesUnits)
                });
                return total / this.employees.length
            }


};

console.log(salesReport.getEmployeeCount());
console.log(salesReport.getTotalNumberOfSales());
console.log(salesReport.getAverageSalesPerEmployee());

salesReport.employees.forEach(function(employee){
    console.log(employee.number+ '\n'+ employee.firstName+'\n'+ employee.lastName+'\n'+ employee.salesUnits)
});