import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dataType = {
  _id: "_090fdsaaf8",
  amount: 999,
  quantity: 2,
  discount: 49,
  status: "Pending",
  action: "view",    
};

const columns = [
  { Header: "ID", accessor: "_id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount Amount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" }
];

const Order = () => {
  const [rows] = useState([
    {
      _id:"abcadafadefg1646441",
      quantity: 1,
      amount: 43432,
      discount: 2334,
      status: <span className='text-red-600'>Processing </span>,
      action: <Link to={`/order/asdasdas`}>View</Link>
    }
  ]);

  return (
    <div className='container mt-24 w-screen m-auto overflow-auto shadow-md p-10'>
      <h1 className='text-2xl font-bold mb-4 underline'>My Orders</h1>
      <div className='main '>
        <div className="overflow-x-auto ">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className="px-4 py-2 text-center">{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-4 py-2 text-center">{row[column.accessor]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
