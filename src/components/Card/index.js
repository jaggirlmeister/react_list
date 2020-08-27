import React from 'react';
import Boton from '../Boton';
import '../Card/index.css'
import BtnEmpladoDelMes from '../EmpleadoDelMes';
import BtnDelete from '../DeleteBtn';


//const Card = ({name, category}) => {

const Card = (props) => {
    const{employeeData, handleEmpleadoMesClick} = props;
    const {name, sector, id, avatar} = employeeData;

    return (
        <div className="cont">
            <div className="info" id={id}>
                <div className="avatar">
                    <img src={avatar} alt=""></img>
                </div>
                <div className="names">
                    <h2>{name}</h2>
                    <p>{sector}</p>
                </div>
            </div>
            <div className="buttons">
                <Boton caption={"Btn1"}/>
                <BtnDelete caption={"Eliminar"}/>
                <BtnEmpladoDelMes employeeId={id} handleEmpleadoMesClick={handleEmpleadoMesClick} />
            </div>
        </div>
    );
}

export default Card