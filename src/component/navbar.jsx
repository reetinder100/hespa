import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import { useState, useEffect } from 'react';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(isScrollingDown ? false : true);
      setPrevScrollPos(currentScrollPos);

      if (isScrollingDown && expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, expanded]);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{ 
        backgroundColor: '#1E3A8A',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)',
        padding: '0.8rem 0',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}
      expanded={expanded}
    >
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={NavLink} to="/" style={{ 
          fontWeight: '700', 
          fontSize: '1.5rem',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          marginRight: '2rem'
        }}>
          <img
            src="/logo.png"
            alt="Himalayan Group Logo"
            style={{ 
              height: '40px', 
              marginRight: '12px',
            }}
          />
          Himalayan Group
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        />

        {/* Nav Links with Active State */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center" style={{ gap: '1.5rem' }}>
            <Nav.Link 
              as={NavLink} 
              to="/" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3B82F6' : 'rgba(255,255,255,0.9)',
                fontWeight: '500',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              })}
              onClick={() => setExpanded(false)}
              className="nav-link-hover"
            >
              Home
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/aboutUs" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3B82F6' : 'rgba(255,255,255,0.9)',
                fontWeight: '500',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              })}
              onClick={() => setExpanded(false)}
              className="nav-link-hover"
            >
              About Us
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/verticals" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3B82F6' : 'rgba(255,255,255,0.9)',
                fontWeight: '500',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              })}
              onClick={() => setExpanded(false)}
              className="nav-link-hover"
            >
              Our Verticals
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              style={({ isActive }) => ({ 
                color: isActive ? '#3B82F6' : 'rgba(255,255,255,0.9)',
                fontWeight: '500',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              })}
              onClick={() => setExpanded(false)}
              className="nav-link-hover"
            >
              Contact Us
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;