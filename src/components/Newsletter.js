import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Container fluid className="newsletter-container py-5" style={{borderRadius: 20}}>
      <Row className="justify-content-center" >
        <Col lg={8} md={10} sm={12}>
          <div className="newsletter-bx p-4 p-md-5" >
            <Row className="align-items-center" >
              <Col xs={12} md={6} className="text-center text-md-left mb-4 mb-md-0" > 
                <h3 className="font-weight-bold">Stay Updated!</h3>
                <p className="text-muted mb-0">Subscribe to our newsletter & never miss the latest updates.</p>
                {status === 'sending' && <Alert variant="info" className="mt-3">Sending...</Alert>}
                {status === 'error' && <Alert variant="danger" className="mt-3">{message}</Alert>}
                {status === 'success' && <Alert variant="success" className="mt-3">{message}</Alert>}
              </Col>
              <Col xs={12} md={6}>
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="d-flex flex-column flex-sm-row align-items-stretch">
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="form-control mb-2 mb-sm-0 flex-grow-1"
                      style={{ minWidth: '0' }}
                    />
                    <button type="submit" className="btn btn-primary flex-shrink-5"style={{backgroundColor: '#4A2FBD'}}>Subscribe</button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
