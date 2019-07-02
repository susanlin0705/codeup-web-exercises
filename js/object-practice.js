var makeCar = function(name1,name2){
    return{
        make:name1,
        model:name2
    }
}
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
            number:"2",
            firstName:'Tricia',
            lastName:'Tricason',
            salesUnits:'5'
        },
        {
            number:"3",
            firstName:'Jeannette',
            lastName:'Jeanson',
            salesUnits:'4'
        },],
    getEmployeeCount: function () {
        return this.employees.length
    },
    getTotalNumberOfSales:function(){
        var total = 0

        this.employees.forEach(function (employee) {
            total += Number(employee.salesUnits)
        });
        return total
    }

};


console.log(salesReport.getEmployeeCount());
console.log(salesReport.getTotalNumberOfSales())

salesReport.employees.forEach(function(employee){
    console.log(employee.number+ '\n'+ employee.firstName+'\n'+ employee.lastName+'\n'+ employee.salesUnits)
});