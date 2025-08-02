import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
     <div style={{
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/himimg5.jpg') top/cover no-repeat`,
  color: 'white',
  padding: '8rem 0 6rem',
  textAlign: 'center',
  height:'600px'
}}>
        <Container>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Contact Us</h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: '0.9'
          }}>Get in touch with our team for inquiries and partnerships</p>
        </Container>
      </div>

      {/* Main Content */}
      <Container style={{ padding: '4rem 0' }}>
        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <h2 style={{
                color: '#1e40af',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                Send Us a Message
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#3b82f6'
                }}></span>
              </h2>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      borderRadius: '8px',
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </Form.Group>

                <Button 
                  type="submit"
                  style={{
                    backgroundColor: '#3b82f6',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#2563eb',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Information */}
          <Col md={6}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <h2 style={{
                color: '#1e40af',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                Our Information
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#10b981'
                }}></span>
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Headquarters</h5>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  Himalayan Group Corporate Office<br />
                 #762, Sector 114,<br />
                  Mohali-140301, Punjab <br />
                  India
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Contact Details</h5>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  <strong>Email:</strong> contact@himalayan-group.in<br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Support:</strong> contact@himalayan-group.in
                </p>
              </div>

              <div>
                <h5 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Business Hours</h5>
                <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                  <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Map Section */}
      <div style={{ paddingBottom: '4rem' }}>
        <Container>
          <h2 style={{
            textAlign: 'center',
            color: '#1e40af',
            marginBottom: '2rem',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            Find Us On Map
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6, #10b981)'
            }}></span>
          </h2>
          
        
            
            {/* Replace with your actual map embed code */}
            <div style={{
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  height: '400px'
}}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.715690656089!2d76.72162331513397!3d30.70477598164793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3a5f0a4e6d%3A0x1e5f5d5b5f5d5b5f!2sSector%20114%2C%20Mohali%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

            
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;