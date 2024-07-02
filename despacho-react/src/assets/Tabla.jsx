import React from 'react'
import { useState } from 'react';

export default function Component() {

  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },

  ]);


  const handleDuplicateRow = (rowIndex) => {
    const newData = [...data];
    const rowToDuplicate = newData[rowIndex];
    const newRow = { ...rowToDuplicate, id: newData.length + 1 };
    newData.push(newRow);
    setData(newData);
  };

  return (
    <table>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td><input type="int" id='precio' value={row.name} /> </td>
            <td>{row.email}</td>
            <td>
              <button onClick={() => handleDuplicateRow(index)}>Duplicar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
