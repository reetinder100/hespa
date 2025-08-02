import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

function Home() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  const featuredVerticals = [
    {
      id: 1,
      title: "Healthcare Solutions",
      icon: "💊",
      color: "#6366F1",
      description: "Comprehensive medical billing and revenue cycle management for healthcare providers."
    },
    {
      id: 2,
      title: "Sustainable Tourism",
      icon: "🏨",
      color: "#10B981",
      description: "Luxury eco-tourism experiences that promote cultural enrichment."
    },
    {
      id: 3,
      title: "Water Treatment",
      icon: "💧",
      color: "#3B82F6",
      description: "Cutting-edge environmental solutions for industries and communities."
    }
  ];

  // Helper function to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden'
      }}>
        {/* Video Background with fallback */}
        {!isMobile ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src="/himvid1.mp4" type="video/mp4" />
            <source src="/himvid1.webm" type="video/webm" />
            <img src="/assets/images/hero-fallback.jpg" alt="Himalayan mountains" />
          </video>
        ) : (
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'url(/assets/images/hero-mobile.jpg) center/cover no-repeat',
            zIndex: 0
          }} />
        )}

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(16, 185, 129, 0.4) 100%)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <Container style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 1rem',
          zIndex: 2
        }}>
          <div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Himalayan Group
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              maxWidth: '800px',
              margin: '0 auto 2.5rem',
              opacity: '0.9'
            }}>
              Driving excellence and innovation across multiple industries
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Button 
                as={Link} 
                to="/verticals" 
                style={{
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  padding: '0.9rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Our Verticals
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline-light"
                style={{
                  padding: '0.9rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          animation: 'bounce 1.5s infinite'
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <div>
                <img
                  src="/himimg4.jpg"
                  alt="Himalayan Group Team"
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transform: 'rotate(-2deg)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '60%',
                  height: '60%',
                  border: '3px solid #3b82f6',
                  borderRadius: '16px',
                  zIndex: -1,
                  transform: 'rotate(3deg)'
                }}></div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: '#1e40af',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  About Our Company
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                    borderRadius: '2px'
                  }}></span>
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  Himalayan Group is a premier multi-industry conglomerate dedicated to excellence, innovation, and sustainable growth. With a strong presence across diverse sectors, we are committed to delivering top-tier solutions that shape industries, empower communities, and create a brighter future.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#4b5563',
                  marginBottom: '2rem'
                }}>
                  Founded with a vision to integrate technology and sustainability, Himalayan Group has evolved into a powerhouse of diversified expertise. We continuously explore new methodologies to address global challenges, from climate change to digital transformation.
                </p>
                <Button 
                  as={Link} 
                  to="/aboutUs" 
                  variant="outline-primary"
                  style={{
                    padding: '0.9rem 2.2rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    borderWidth: '2px'
                  }}
                >
                  Learn More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Verticals */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, #ffffff 0%, #f0f7ff 100%)' }}>
        <Container>
          <div>
            <h2 style={{
              textAlign: 'center',
              color: '#1e40af',
              marginBottom: '3rem',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              Our Key Verticals
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                borderRadius: '2px'
              }}></span>
            </h2>
          </div>
          
          <Row style={{ gap: '2rem', justifyContent: 'center' }}>
            {featuredVerticals.map((vertical) => (
              <Col key={vertical.id} xs={12} md={4} style={{ padding: '0' }}>
                <Card 
                  style={{
                    border: 'none',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    overflow: 'hidden',
                    ':hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 15px 35px ${hexToRgba(vertical.color, 0.2)}`
                    }
                  }}
                >
                  <Card.Body style={{ padding: '2.5rem', textAlign: 'center' }}>
                    <div style={{ 
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      backgroundColor: hexToRgba(vertical.color, 0.1),
                      color: vertical.color,
                      fontSize: '2.8rem',
                      transition: 'all 0.3s ease'
                    }}>
                      {vertical.icon}
                    </div>
                    <Card.Title style={{ 
                      color: vertical.color,
                      marginBottom: '1.2rem',
                      fontSize: '1.6rem',
                      fontWeight: '700'
                    }}>
                      {vertical.title}
                    </Card.Title>
                    <Card.Text style={{ 
                      color: '#64748b',
                      fontSize: '1.05rem',
                      lineHeight: '1.7',
                      marginBottom: '2rem'
                    }}>
                      {vertical.description}
                    </Card.Text>
                    <Button 
                      as={Link} 
                      to="/verticals" 
                      variant="outline-primary"
                      style={{
                        borderColor: vertical.color,
                        color: vertical.color,
                        padding: '0.7rem 1.8rem',
                        borderRadius: '50px',
                        fontWeight: '600',
                        ':hover': {
                          backgroundColor: vertical.color,
                          color: 'white'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Button 
              as={Link} 
              to="/verticals" 
              style={{
                backgroundColor: '#3b82f6',
                border: 'none',
                padding: '0.9rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
              }}
            >
              View All Verticals
            </Button>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                height: '100%',
                borderTop: '4px solid #3b82f6'
              }}>
                <h3 style={{
                  color: '#1e40af',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  display: 'inline-block',
                  fontSize: '1.8rem'
                }}>
                  Our Mission
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem'
                }}>
                  To empower businesses with world-class, innovative solutions tailored for sustainable growth. We foster continuous learning and lead with integrity, ensuring positive impact across all sectors we operate in.
                </p>
                <ul style={{ 
                  color: '#4b5563', 
                  paddingLeft: '1.25rem',
                  listStyleType: 'none'
                }}>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%'
                    }}></span>
                    Technology-driven business solutions
                  </li>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%'
                    }}></span>
                    Sustainable development practices
                  </li>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%'
                    }}></span>
                    Community empowerment initiatives
                  </li>
                </ul>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                height: '100%',
                borderTop: '4px solid #10b981'
              }}>
                <h3 style={{
                  color: '#1e40af',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  display: 'inline-block',
                  fontSize: '1.8rem'
                }}>
                  Our Vision
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#10b981',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem'
                }}>
                  To emerge as a globally recognized conglomerate driving excellence and sustainability across industries. We envision businesses growing responsibly while technologies serve humanity's greater good.
                </p>
                <ul style={{ 
                  color: '#4b5563', 
                  paddingLeft: '1.25rem',
                  listStyleType: 'none'
                }}>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></span>
                    Global industry leadership
                  </li>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></span>
                    Sustainable business ecosystems
                  </li>
                  <li style={{ 
                    marginBottom: '0.8rem',
                    position: 'relative',
                    paddingLeft: '1.75rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.4em',
                      width: '0.8em',
                      height: '0.8em',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></span>
                    Innovation at scale
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '6rem 0',
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%), url('/assets/images/cta-bg.jpg') center/cover no-repeat`,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              marginBottom: '1.5rem',
              fontWeight: '700'
            }}>
              Ready to Collaborate?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              opacity: '0.9',
              lineHeight: '1.7'
            }}>
              Discover how Himalayan Group can transform your business with our innovative solutions across multiple industries.
            </p>
            <Button 
              as={Link} 
              to="/contact" 
              size="lg"
              style={{
                backgroundColor: '#3b82f6',
                border: 'none',
                padding: '1rem 3rem',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* Add CSS for the scroll indicator animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(10px) translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Home;