import React from 'react'
import type { IHeader } from '../../interfaces/IHeader';

interface TableProps {
  headers: IHeader[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          {
            headers.map((header, index) => 
              <th key={index}>{header.headerValue}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, index) =>
            <tr key={index}>
              {
                headers.map((header, index) =>
                  <td key={index}>{row[header.headerKey]}</td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default Table