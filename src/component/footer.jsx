import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
  backgroundColor: '#1e40af',
  borderTop: '1px solid #1E3A8A', // Matches navbar color
  color: 'white',
  padding: '4rem 0 2rem',
  marginTop: '4rem'
}}>
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                <img
                  src="/logo.png" // White version of your logo
                  alt="Himalayan Group"
                  style={{
                    height: '40px',
                    marginRight: '10px'
                  }}
                />
                Himalayan Group
              </h3>
              <p style={{
                color: '#e5e7eb',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                A premier multi-industry conglomerate dedicated to excellence, innovation, and sustainable growth across diverse sectors.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Quick Links
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '40px',
                height: '3px',
                backgroundColor: '#3b82f6'
              }}></span>
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              color: '#e5e7eb'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/" style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: '#3b82f6'
                  }
                }}>
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/aboutUs" style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: '#3b82f6'
                  }
                }}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/verticals" style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: '#3b82f6'
                  }
                }}>
                  Our Verticals
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/contact" style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  ':hover': {
                    color: '#3b82f6'
                  }
                }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Contact Us
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '40px',
                height: '3px',
                backgroundColor: '#10b981'
              }}></span>
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              color: '#e5e7eb'
            }}>
              <li style={{ 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <i className="fas fa-map-marker-alt" style={{ color: '#3b82f6', marginTop: '0.25rem' }}></i>
                <span>#762, Sector 114, Mohali-140301, India</span>
              </li>
              <li style={{ 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <i className="fas fa-phone-alt" style={{ color: '#3b82f6' }}></i>
                <span>+1 5589 55488 55</span>
              </li>
              <li style={{ 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#3b82f6' }}></i>
                <span>contact@himalayan-group.in</span>
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Newsletter
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '40px',
                height: '3px',
                backgroundColor: '#ec4899'
              }}></span>
            </h4>
            <p style={{ color: '#e5e7eb', marginBottom: '1.5rem' }}>
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div style={{ display: 'flex' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '8px 0 0 8px',
                  flex: '1',
                  fontSize: '1rem'
                }}
              />
              <button style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '0 1.5rem',
                borderRadius: '0 8px 8px 0',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: '#2563eb'
                }
              }}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2rem',
              marginTop: '2rem',
              textAlign: 'center',
              color: '#e5e7eb'
            }}>
              <p style={{ margin: '0' }}>
                &copy; {new Date().getFullYear()} Himalayan Group. All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;