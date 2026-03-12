// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
let it =employees.filter(e=>e.department=="IT")
console.log("the details of employees of IT dept :",it)
//     2. map() to add:
//             netSalary = salary + 10% bonus
let addNetSalary = employees.map(e=>{
    let netSalary =e.salary+Number(e.salary%10)
    return{...e,netSalary}
})
console.log("after addnd the netSalary :",addNetSalary)

//     3. reduce() to calculate total salary payout
let totalSal = employees.reduce((acc,e)=>acc+e.salary,0)
console.log("total salary :",totalSal)
//     4. find() employee with salary 30000
let findEmp = employees.find(e=>e.salary==30000)
console.log("employee with 30000 salary :",findEmp)
//     5. findIndex() of employee "Neha"
let findEmpIndex = employees.findIndex(e=>e.name=="Neha")
console.log("Index of Neha:",findEmpIndex)