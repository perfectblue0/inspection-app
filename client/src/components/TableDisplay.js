import Table from "react-bootstrap/Table";

const TableDisplay = () => {
  const tableHeaders = [
    "EVENT NO.",
    "PORTAL",
    "LANE",
    "EVENT TIME",
    "LPR",
    "TYPE",
    "CONTAINER 1",
    "CONTAINER 2",
    "CHASSIS",
    "WEIGHT",
    "STATUS",
    "RFID",
    "PROCESSED BY",
    "LAST UPDATED ON",
    "UPDATED BY",
  ];

  const tableData = [
    [
      "DATA1",
      "DATA2",
      "DATA3",
      "DATA4",
      "DATA5",
      "DATA6",
      "DATA7",
      "DATA8",
      "DATA9",
      "DATA10",
      "DATA11",
      "DATA12",
      "DATA13",
      "DATA14",
      "DATA15",
    ],
  ];

  const additionalRows = 10;

  for (let i = 0; i < additionalRows; i++) {
    tableData.push(Array(tableHeaders.length).fill(`DATA${i + 2}`));
  }

  return (
    <Table responsive striped bordered hover size="sm" className="m-3">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="fw-light">
        {tableData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((data, dataIndex) => (
              <td key={dataIndex}>{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableDisplay;
