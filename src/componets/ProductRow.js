import React from 'react'

function ProductRow({id, name, stock, sold, price, revenue, action}) {
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{sold}</td>
        <td>{price}e</td>
        <td>{revenue}</td>
        <td>{action}</td>
        <td>
            <button className="btn btn-outline-info btm-sm ms-2 me-1">Update</button>
            <button className="btn btn-outline-success btm-sm ms-2 me-1">Supplier</button>
            <button className="btn btn-outline-danger btm-sm ms-2 me-1">Delete</button>
        </td>
    </tr>
  )
}

export default ProductRow

