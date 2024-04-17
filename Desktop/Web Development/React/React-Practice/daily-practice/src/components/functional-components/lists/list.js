import EmpData from "./employees-data"

const EmpList = ()=>{
    return(
            <>{
            EmpData.filter(val=>val.designation == 'Cry Baby').map(val=><>
            <h4>Name: {val.name}</h4>
            <h4>Designation: {val.designation}</h4>
            <h4>Salary: {val.salary}</h4>
            <br/>
            </>) }
            <hr/>
            {
            EmpData.filter(val=>val.designation == 'Entrapenuer').map(val=><>
            <h4>Name: {val.name}</h4>
            <h4>Designation: {val.designation}</h4>
            <h4>Salary: {val.salary}</h4>
            <br/>
            </>) }
            <hr/>
            {
            EmpData.filter(val=>val.designation == 'React Developer').map(val=><>
            <h4>Name: {val.name}</h4>
            <h4>Designation: {val.designation}</h4>
            <h4>Salary: {val.salary}</h4>
            <br/>
            </>) }
            <hr/>
            {
            EmpData.filter(val=>val.designation == 'Supervisor').map(val=><>
            <h4>Name: {val.name}</h4>
            <h4>Designation: {val.designation}</h4>
            <h4>Salary: {val.salary}</h4>
            <br/>
            </>) }
            <hr/>
            {
            EmpData.filter(val=>val.designation == 'IT Recruiter').map(val=><>
            <h4>Name: {val.name}</h4>
            <h4>Designation: {val.designation}</h4>
            <h4>Salary: {val.salary}</h4>
            <br/>
            </>) }
            <hr/>
            </>
    )
}
export default EmpList