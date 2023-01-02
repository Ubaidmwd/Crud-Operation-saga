import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Addproduct = () => {
  return (
    <>
      <Container>


        <Form>
          <Row xs={1} md={2} className="g-4">
            <Col >
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="id" className='w-50' />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Password" className='w-50' />
                </Col>
              </Form.Group>
            </Col>
            <Col >
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="id" className='w-50' />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Password" className='w-50' />
                </Col>
              </Form.Group>
            </Col>
            <Col >
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Password" className='w-50' />
                </Col>
              </Form.Group>

              <Button variant="primary" type="submit" size="md">
                Submit
              </Button>
            </Col >

          </Row>
        </Form>

      </Container>

    </>
  )
}

export default Addproduct