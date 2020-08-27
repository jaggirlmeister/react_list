import React from 'react'

const BtnDelete = (props) =>{

    const{employeeId, handleDeleteEmployee} = props

    return(
        <button className="button is-danger is-rounded" onClick={()=> handleDeleteEmployee(employeeId)}>Eliminar</button>
    )
}

export default BtnDelete