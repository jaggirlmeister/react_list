import React from 'react'

const BtnEmpladoDelMes = (props) =>{

    const{employeeId, handleEmpleadoMesClick} = props

    return(
        <button className="button is-primary is-rounded" onClick={()=> handleEmpleadoMesClick(employeeId)}>Empleado del Mes</button>
    )
}

export default BtnEmpladoDelMes