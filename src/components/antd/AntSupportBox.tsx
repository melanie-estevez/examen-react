import React from "react";
import { Card,  Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AntSupportBox() {
  return (
    <div style={{ marginTop: 24 }}>
      <Card>
        <Title level={4} style={{ marginTop: 0 }}>Información</Title>
        <Paragraph type="secondary">
    
          <li>
            <p>- API pública de personajes de Los Simpsons</p><br></br>
            <p>-Imágenes servidas desde CDN estable por ID</p><br></br>
            <p>-Todo el sistema está en un solo archivo HTML</p><br></br>
          </li>
        
        </Paragraph>
      </Card>
    </div>
  );
}