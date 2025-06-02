import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { redirect } from 'react-router-dom';

const AddProduct=() =>{
    const [ProductInfo, setProductInfo] = React.useState({
        ProductName: '',
        QuantityInStock: 0,
        QuantitySold: 0,
        UnitPrice: 0,
        Revenue: 0,
        Supplier: 0
    });

    const updateForm = (e) => {
        const { name, value } = e.target;
        setProductInfo({
            ...ProductInfo,  // spereading the previous form data 
            [name]: value //name points to the filed and value to what is being input
			//the [] don't mean its an array, this is called computed names..we use a variable name as a key for the object property
        });
    }
	function postData(event){
		event.preventDefault();
	
	const url = 'http://127.0.0.1:8000/product' + ProductInfo['Supplier'];

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		credentials: 'same-origin',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify({
			ProductName: ProductInfo.ProductName,
			QuantityInStock: ProductInfo.QuantityInStock,
			QuantitySold: ProductInfo.QuantitySold,
			UnitPrice: ProductInfo.UnitPrice,
			Revenue: ProductInfo.Revenue,
			Supplier: ProductInfo.Supplier
		}),
	})
	.then((response) => {
		if (response.ok) {
			alert('Product added successfully');
				setProductInfo({
			ProductName: '',
			QuantityInStock: 0,		
			QuantitySold: 0,
			UnitPrice: 0,	
			Revenue: 0,
			Supplier: 0
	});

			// Use window.location instead of redirect from react-router-dom in this context
			window.location.href = '/products';
		} else {
			alert('Failed to add product');
		}
		return response.json();
	})
	.catch((error) => {
		console.error('Error:', error);
		alert('An error occurred while adding the product');
	});
	}
	
	
  return (
    <Card>
			<Card.Body>
				<Form onSubmit={postData}>
					<Form.Group controlId='ProductName'>
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							type='text'
							name='ProductName'
							value={ProductInfo.ProductName}
							onChange={updateForm}
							placeholder='Product Name'
						/>
					</Form.Group>

					<Form.Group controlId='QuantityInStock'>
						<Form.Label>Quantity In Stock</Form.Label>
						<Form.Control
							type='number'
							name='QuantityInStock'
							value={ProductInfo.QuantityInStock}
							onChange={updateForm}
							placeholder='Quantity In Stock'
						/>
					</Form.Group>

					<Form.Group controlId='QuantitySold'>
						<Form.Label>Quantity Sold</Form.Label>
						<Form.Control
							type='number'
							name='QuantitySold'
							value={ProductInfo.QuantitySold}
							onChange={updateForm}
							placeholder='Quantity Sold'
						/>
					</Form.Group>

					<Form.Group controlId='UnitPrice'>
						<Form.Label>Unit Price</Form.Label>
						<Form.Control
							type='number'
							name='UnitPrice'
							value={ProductInfo.UnitPrice}
							onChange={updateForm}
							placeholder='Unit Price'
						/>
					</Form.Group>

					<Form.Group controlId='Revenue'>
						<Form.Label>Revenue</Form.Label>
						<Form.Control
							type='number'
							name='Revenue'
							value={ProductInfo.Revenue}
							onChange={updateForm}
							placeholder='Revenue'
						/>
					</Form.Group>

					<Form.Group controlId='Supplier'>
						<Form.Label>Supplier</Form.Label>
						<Form.Control
							type='number'
							name='Supplier'
							value={ProductInfo.Supplier}
							onChange={updateForm}
							placeholder='Supplier'
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>
  )
  }


export default AddProduct
