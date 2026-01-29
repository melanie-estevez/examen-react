import React, { useEffect, useState } from "react";
import { Table, Tag, Typography } from "antd";

const { Title } = Typography;

interface RowData {
  key: string;
  name: string;
  age: string;
  gender: string;
}

export default function SalesTable() {
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://thesimpsonsapi.com/api/characters?page=1");
        const result = await response.json();

    
        const mappedData = result.docs.map((character: any, index: number) => ({
          key: index.toString(),
          name: character.name,
          age: character.age || "N/A", 
          gender: character.gender || "Unknown",
        }));

        setData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: 24 }}>
      <Title level={4}>Listado de Personajes</Title>

      <Table<RowData>
        loading={loading}
        pagination={false}
        dataSource={data}
        columns={[
          { title: "Nombre", dataIndex: "name" },
          { title: "Edad", dataIndex: "age" },
          {
            title: "Género",
            dataIndex: "gender",
            render: (gender: string) => (
              <Tag color={gender === "Male" ? "blue" : gender === "Female" ? "pink" : "gray"}>
                {gender}
              </Tag>
            ),
          },
        ]}
      />
    </div>
  );
}