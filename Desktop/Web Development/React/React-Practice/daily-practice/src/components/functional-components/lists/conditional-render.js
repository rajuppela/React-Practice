import EmpData from "./employees-data"

const EmpSalary = ()=>{
    return(<>
{
    EmpData.map((eachObject)=>{
        const {IsMinor,name,designation,salary} = eachObject
        return(<>
        {IsMinor?
        <>
        <h4>Name: {name}</h4>
        <h4>Employement Type: Contract</h4>
        <h4>Designation: {designation}</h4>
        <h4>Salary: {salary}</h4><br/>
        </>
        :
        <><h4>Name: {name}</h4>
        <h4>Employement Type: Permanent</h4>
        <h4>Designation: {designation}</h4>
        <h4>Salary: {salary}</h4><br/></>}
        </>)
    })
}
    </>)
}
export default EmpSalary