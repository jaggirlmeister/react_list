import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'
import Input from '../Input'
import Card from '../Card'
import faker from 'faker'


class App extends React.Component{
  constructor(){
    super()
    //faker.seed(123);
    faker.setLocale = 'us';
    const employees = Array.from({ length: 30 }, () => ({
      name: faker.name.findName(),
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid(),
    }))

    
    console.log(employees);
    //Inicializar state
    this.state = {
      date: new Date(),
      nameAlumno: "",
      users:[],
      list: employees,
      listBackup: employees,
      empleadoDelMes: null
    };
    this.handleEmpleadoMesClick = this.handleEmpleadoMesClick.bind(this) //Linea Monstruosa
    this.handleAddEmployeeChange = this.handleAddEmployeeChange.bind(this)
    this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this)
  }



  handleEmpleadoMesClick(employeeId){
       
    //setear el estado diciendo cual es el id del empleado del mes
    this.setState({
        empleadoDelMes:employeeId
    })
    console.log(this.state.empleadoDelMes)
  }

  
//Agregar empleado
handleAddEmployeeChange = event =>{
  console.log("pasé por acá Change");
  const {value} = event.target
  this.setState({employeeName: value})
}

handleAddEmployeeSubmit = event => {
  console.log("pasé por acá submit");
  event.preventDefault();
  const{list, employeeName} = this.state
  
  const newEmployee = {
    name: employeeName,
    sector: faker.name.jobArea(),
    avatar: faker.image.avatar(),
    id: faker.random.uuid()
  }
  const newList = [newEmployee, ...list]
  this.setState({list: newList})
}

  render(){
    //Mostrar data en HTML
    //Se ejecuta al inicio y cada vez que cambia el state
    return (
      <div className="App">
        <Header />
        <Wrapper />
        <Input 
        handleAddEmployeeChange={this.handleAddEmployeeChange}
        handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
        />
        <div className="list">
        {
          this.state.list.map((employee)=>
            <Card 
              employeeData={employee} key={employee.id} handleEmpleadoMesClick={this.handleEmpleadoMesClick} 
            />
          )    
        }
        </div>
        <Footer texto="Este es mi footer horrible" fecha={this.state.date} />
      </div>
    )
  }
}

export default App;