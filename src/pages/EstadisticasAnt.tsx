import React from "react";
import { Button, Card, Typography } from "antd";

const { Title } = Typography;

export default function EstadisticaAnt() {
  return (
    <>
      <Title level={3}>Estadísticas</Title>

       <Button color="blue">Contar por género</Button>
       <br></br><br></br>
       <select> 
         <option>Unknown</option>
         <option>Alive</option>
         <option>Deceased</option>
       </select>
       <br></br><br></br>
       <Button color="cyan">Porcentaje por estado</Button>
       <br></br><br></br>
       <Button color="green">Porcentaje de edad</Button>
    </>
  );
}