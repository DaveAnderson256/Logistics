import React, {useEffect, useContext} from 'react'
import { Table } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import ProductRow  from './ProductRow';

function ProductTable() {
    const { products, setProducts } = useContext(ProductContext);

    const handleDelete=(id) => {
      fetch("http://127.0.0.1:8000/product/" + id, {
          method: "DELETE",
          headers: {
            accept: 'application/json'
          }
        })
        .then(resp => {
          if (resp.ok) {
            setProducts(products.filter(product => product.id !== id));
            alert("Product deleted successfully");
          } else {
            alert("Failed to delete product");
          }
        })
        .catch(error => {
          console.error("Error deleting product:", error);
          alert("An error occurred while deleting the product");
        });
  };

    // Fetch products from the API when the component mounts
 useEffect(() => {
  fetch("http://127.0.0.1:8000/product")
    .then(resp => resp.json())
    .then(results => {
      setProducts(results.data)
    })
}, []);
    
  return (
    <div>
      <Table striped bordered hover>
				<thead>
					<tr>
						<th>Id</th>
						<th>Product Name</th>
						<th>Quantity In Stock</th>
						<th>Quantity Sold</th>
						<th>Unit Price</th>
						<th>Revenue</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					
            {
              products.map((product)=>( // here we dont use the curly brackets because it is an explicit return
                <ProductRow
               id = {product.id}
               name = {product.name}
               stock = {product.quantity_in_stock}
               sold = {product.quality_sold}
               revenue = {product.revenue}
               price = {product.unit_price}
               handleDelete={handleDelete}
                />
              )

              )
            }
         
				</tbody>
			</Table>
    </div>
  )
}

export default ProductTable
