import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { productlist, productdelete, productupdate } from "../actions/productAction";
import { useSelector } from "react-redux";
import { Form, Table, Tooltip, OverlayTrigger, Button, Modal, Row, Col, Container } from 'react-bootstrap';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import {AiFillEye} from "react-icons/ai"

import "./main.css"
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    const handleClose = () => setXlShow(false);

    const [xlShow, setXlShow] = useState(false);

    //////// View Model Usestate////////
    const [viewShow, setviewShow] = useState(false);
    const ViewClose = () => setviewShow(false);


    //////// Tooltip /////////////
    const deletetooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete
        </Tooltip>)
    const viewtooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Views
        </Tooltip>)

    const edittooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit
        </Tooltip>)

    const dispatch = useDispatch();

    const [id, setid] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [rate, setrate] = useState("");
    const [count, setcount] = useState("");

    let data = useSelector((state) => state.productData)

    // let productdata = useSelector((state)=>state.productdata)
    console.log("data=======", data);

    const viewproduct = (id) => {
        setid(data[id - 1].id)
        console.log(id)
        setcategory(data[id - 1].category),
        setprice(data[id - 1].price),
        setrate(data[id - 1].rate),
        setcount(data[id - 1].count)
        setviewShow(true);


    }

    const selectproduct = (id) => {
        setid(data[id - 1].id)
        console.log(id)
        setcategory(data[id - 1].category),
        setprice(data[id - 1].price),
        setrate(data[id - 1].rate),
        setcount(data[id - 1].count)
        setXlShow(true);


    }

    const updateproduct = () => {
        data = { id, category, price, rate, count };
        dispatch(productupdate(data));


    }
    const updateandclose = () => {
        updateproduct();
        handleClose();
    }

    useEffect(() => {
        dispatch(productlist())
    }, []);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure that you wanted to delete user ?")) {
            dispatch(productdelete(id))

        }
    };

    return (

        <>
            <Table responsive striped bordered hover variant="light">

                <thead>
                    <tr>

                        {["Id", "Category", "Price", "Rating", "Count", "Action"].map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.rate}</td>
                        <td>
                            {/* <img src={item.image} alt={item.image} width="40" height="40" /> */}
                            {item.count}

                        </td>
                        <td >
                            <div className="d-flex">
                                {/* ////////Delete Operation////////// */}

                                <OverlayTrigger placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={deletetooltip}>

                                    <button style={{ color: "red", outline: "none", border: "0px", backgroundColor: "inherit" }} onClick={() => handleDelete(item.id)}><RiDeleteBin5Fill style={{ color: "#990033" }} size={18} /></button>
                                </OverlayTrigger>



                                <OverlayTrigger placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={viewtooltip}>

                                    <button style={{ color: "red", outline: "none", border: "0px", backgroundColor: "inherit" }} onClick={() => viewproduct(item.id)}><AiFillEye style={{ color: "#303030" }} size={18} /></button>

                                </OverlayTrigger>

                                <OverlayTrigger placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={edittooltip}>

                                    <button style={{ color: "red", outline: "none", border: "0px", backgroundColor: "inherit" }} onClick={() => selectproduct(item.id)}><FaPencilAlt style={{ color: "#303030" }} size={18} /></button>

                                </OverlayTrigger>

                            </div>


                        </td>


                    </tr>
                    )}

                </tbody>
            </Table>
            <Modal
                size="xl"
                show={viewShow}
                onHide={() => setviewShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header style={{ backgroundColor: "black", color: "white" }} >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Product Form
                    </Modal.Title>

                    <div className="btn-add d-flex " style={{ paddingRight: "2%" }}>
                        <div style={{ paddingRight: "2%" }}>
                            <Button variant="danger" onClick={ViewClose} >cancel</Button>
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
                                            <Form.Control type="text" placeholder="id" className='w-100 shadow-none input-data ' value={id} />
                                        </Col>
                                    </Form.Group>
                                    {/* //////// Category////// */}

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Category
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Category" value={category} className='w-100 shadow-none input-data' />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                {/* end of first Row */}

                                {/* start of second Row */}
                                <Col md={6}>
                                    <Form.Group as={Row} className="mb-3" >
                                        <Form.Label column sm="2">
                                            Price
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Price" className='w-100 shadow-none input-data' value={price} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Rate
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Rating" className='w-100 shadow-none input-data ' value={rate} />
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
                                            <Form.Control type="text" placeholder="Count" className='w-100 shadow-none input-data ' value={count} />
                                        </Col>
                                    </Form.Group>


                                </Col >

                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>

            {/* ///////////////////////Update Model///////////////////// */}

            <Modal
                size="xl"
                show={xlShow}
                onHide={() => setXlShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header style={{ backgroundColor: "black", color: "white" }} >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Product Form
                    </Modal.Title>

                    <div className="btn-add d-flex " style={{ paddingRight: "2%" }}>
                        <div style={{ paddingRight: "2%" }}>
                            <Button variant="danger" onClick={handleClose} >cancel</Button>
                        </div>

                        <div style={{ paddingRight: "2%" }}>
                            <Button variant="primary" onClick={updateproduct} >update</Button>
                        </div>

                        <div style={{ paddingRight: "2%", whiteSpace: "nowrap" }}>
                            <Button variant="primary" onClick={updateandclose}>update & close</Button>
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
                                            <Form.Control type="text" placeholder="id" className='w-100 shadow-none input-data ' value={id} onChange={(event) => setid(event.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    {/* //////// Category////// */}

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Category
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Category" value={category} className='w-100 shadow-none input-data' onChange={(event) => setcategory(event.target.value)} />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                {/* end of first Row */}

                                {/* start of second Row */}
                                <Col md={6}>
                                    <Form.Group as={Row} className="mb-3" >
                                        <Form.Label column sm="2">
                                            Price
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Price" className='w-100 shadow-none input-data' value={price} onChange={(event) => setprice(event.target.value)} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                            Rate
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Rating" className='w-100 shadow-none input-data ' value={rate} onChange={(event) => setrate(event.target.value)} />
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
                                            <Form.Control type="text" placeholder="Count" className='w-100 shadow-none input-data ' value={count} onChange={(event) => setcount(event.target.value)} />
                                        </Col>
                                    </Form.Group>


                                </Col >

                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Main