import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { productlist, productsearch, productadd } from "../actions/productAction";
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./header.css"




export const Headernav = () => {

    const dispatch = useDispatch();

    const [xlShow, setxLShow] = useState(false);

    const handleClose = () => setxLShow(false);

    const [id,setid]=useState(" ")
    const [category,setcategory]=useState(" ")
    const [price,setprice]=useState(" ")
   
    const [rate,setrate]=useState(" ")

    const [count,setcount]=useState(" ")

    const addproduct=()=>{
       let Pdata={id,category,price,rate,count}
       dispatch(productadd(Pdata))

    }
    const saveclose=()=>{
        addproduct();
        handleClose();

    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Product List</Navbar.Brand>

                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                    </Nav>


                    <Form className="d-flex ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 "
                            aria-label="Search"
                            style={{ width: "300px", outline: "none" }}
                            onChange={(event) => dispatch(productsearch(event.target.value))}

                        />

                        <Button variant="primary" style={{ whiteSpace: "nowrap" }} ClassName="pr-5" onClick={() => setxLShow(true)}>Add Product</Button>
                        <Modal
                            size="xl"
                            show={xlShow}
                            
                            onHide={() => setxLShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header style={{ backgroundColor: "black", color: "white" }} >
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Product Form
                                </Modal.Title>

                                <div className="btn-add d-flex " style={{paddingRight:"2%"}}>
                                    <div style={{paddingRight:"2%"}}>
                                    <Button variant="danger" onClick={handleClose} >cancel</Button>
                                    </div>

                                    <div style={{paddingRight:"2%"}}>
                                    <Button variant="primary"  onClick={addproduct}>save</Button>
                                    </div>
                                    
                                    <div style={{paddingRight:"2%", whiteSpace: "nowrap"}}>
                                    <Button variant="primary" onClick={saveclose}>save & close</Button>
                                    </div>
                                    
                                </div>

                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Form>
                                        <Row xs={1} md={2} className="g-4">
                                            <Col md={6}>

                                                      {/* /////id//// */}
                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label column sm="2">
                                                        ID
                                                    </Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" placeholder="id" className='w-100 shadow-none input-data ' onChange={(event)=>{setid(event.target.value)}} />
                                                    </Col>
                                                </Form.Group>
                                                {/* //////// Category////// */}

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label column sm="2">
                                                        Category
                                                    </Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" placeholder="Category" className='w-100 shadow-none input-data ' onChange={(event)=>{setcategory(event.target.value)}}/>
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                            {/* end of first Row */}

                                            {/* start of second Row */}
                                            <Col  md={6}>
                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label column sm="2">
                                                        Price
                                                    </Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" placeholder="Price" className='w-100 shadow-none input-data' onChange={(event)=>{setprice(event.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label column sm="2">
                                                        Rate
                                                    </Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" placeholder="Rating" className='w-100 shadow-none input-data ' onChange={(event)=>{setrate(event.target.value)}} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                            {/* end of second Row */}
                                            
                                            {/* start of third line */}
                                            <Col >
                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label column sm="2">
                                                        Count
                                                    </Form.Label>
                                                    <Col sm="10">
                                                        <Form.Control type="text" placeholder="Count" className='w-100 shadow-none input-data ' onChange={(event)=>{setcount(event.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                
                                            </Col >

                                        </Row>
                                    </Form>
                                </Container>

                            </Modal.Body>
                        </Modal>

                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Headernav