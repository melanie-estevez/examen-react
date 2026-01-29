import React from "react";
import { Card,  Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AntSupportBox() {
  return (
    <div style={{ marginTop: 24 }}>
      <Card>
        
        <Paragraph type="secondary">
          <h1>Personajes de Los Simpsons</h1>
          <h5>Listado dinámico usando API pública + CDN estable.</h5>
          <h5>Ejemplo ideal para practicar fetch y renderizado dinámico.</h5>
        
        </Paragraph>
      </Card>
    </div>
  );
}