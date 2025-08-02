
import { Card, Col, Row, Container, Accordion } from 'react-bootstrap';
import { useState } from 'react';

function Verticals() {
const verticalsData = [
    {
      id: 1,
      title: "Medical Billing & Healthcare Solutions",
      icon: "💊",
      color: "#6366F1",
      bgColor: "rgba(99, 102, 241, 0.1)",
      details: [
        "Claims scrubbing & denial management",
        "Revenue cycle optimization",
        "AI-powered healthcare analytics",
        "Coding compliance & patient billing"
      ]
    },
    {
      id: 2,
      title: "Hospitality & Tourism",
      icon: "🏨",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      details: [
        "Eco-tourism & adventure travel",
        "Luxury retreats & destination management",
        "Cultural immersion programs",
        "Sustainable tourism practices"
      ]
    },
    {
      id: 3,
      title: "Water Treatment & Environmental Solutions",
      icon: "💧",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      details: [
        "Advanced membrane technologies",
        "Industrial wastewater recycling",
        "Zero-liquid-discharge systems",
        "Community water projects"
      ]
    },
    {
      id: 4,
      title: "Mining & Natural Resources",
      icon: "⛏️",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.1)",
      details: [
        "Sustainable extraction practices",
        "Drone surveys & GIS mapping",
        "Land rehabilitation programs",
        "Biodiversity conservation"
      ]
    },
    {
      id: 5,
      title: "Manufacturing & Industrial Solutions",
      icon: "🏭",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.1)",
      details: [
        "Precision engineering",
        "IoT-enabled production systems",
        "Lean manufacturing practices",
        "Integrated supply chain solutions"
      ]
    },
    {
      id: 6,
      title: "Education & E-Learning",
      icon: "🎓",
      color: "#EC4899",
      bgColor: "rgba(236, 72, 153, 0.1)",
      details: [
        "Industry-oriented curriculum",
        "AI-driven personalized learning",
        "Mobile learning platforms",
        "Global certification programs"
      ]
    },
    {
      id: 7,
      title: "IT & IoT Services",
      icon: "🤖",
      color: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.1)",
      details: [
        "Cloud-native applications",
        "Smart city solutions",
        "Industrial IoT integration",
        "Cybersecurity services"
      ]
    }
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section - unchanged */}
     <div style={{
 background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/himimg7.jpg') center/cover no-repeat`,
  color: 'white',
  padding: '8rem 0 6rem',
  textAlign: 'center',
  height:'650px'
}}>
        <Container>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Our Verticals</h1>
          <p style={{
            fontSize: '1.5rem',
            opacity: '0.9'
          }}>Diversified excellence across seven dynamic industries</p>
        </Container>
      </div>

      {/* Main Content */}
      <Container style={{ padding: '3rem 0' }}>
        {/* Vertical Cards - Modified to show only title */}
        <Row style={{ gap: '1.5rem', marginBottom: '3rem', justifyContent: 'center' }}>
          {verticalsData.map((vertical) => (
            <Col key={vertical.id} xs={12} md={6} lg={4} style={{ padding: '0.5rem' }}>
              <div 
                style={{ 
                  height: '100%',
                  borderLeft: `4px solid ${vertical.color}`,
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${hexToRgba(vertical.color, 0.2)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ 
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  backgroundColor: hexToRgba(vertical.color, 0.1),
                  color: vertical.color,
                  fontSize: '1.8rem'
                }}>
                  {vertical.icon}
                </div>
                <h3 style={{ 
                  color: vertical.color,
                  margin: '0',
                  transition: 'all 0.3s ease'
                }}>
                  {vertical.title}
                </h3>
              </div>
            </Col>
          ))}
        </Row>

        {/* Detailed Accordion - Keep exactly as is */}
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '1.5rem',
          color: '#1e40af'
        }}>Explore Our Verticals in Detail</h2>
        <Accordion defaultActiveKey="0" style={{ marginBottom: '3rem' }}>
          {verticalsData.map((vertical, index) => (
            <Accordion.Item key={vertical.id} eventKey={index.toString()}>
              <Accordion.Header style={{
                backgroundColor: 'transparent',
                padding: '1rem 1.25rem'
              }}>
                <span style={{ 
                  color: vertical.color, 
                  marginRight: '10px',
                  fontSize: '1.2rem'
                }}>{vertical.icon}</span>
                {vertical.title}
              </Accordion.Header>
              <Accordion.Body style={{
                backgroundColor: '#f9fafb',
                padding: '1.5rem'
              }}>
                <Row>
                  <Col md={6}>
                    <h5 style={{ color: vertical.color }}>Key Offerings</h5>
                    <ul style={{ paddingLeft: '1.25rem' }}>
                      {vertical.details.map((detail, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <div style={{ 
                      padding: '1rem',
                      backgroundColor: vertical.bgColor, 
                      borderRadius: '8px',
                      height: '100%'
                    }}>
                      <h5 style={{ color: vertical.color }}>Industry Impact</h5>
                      <p>
                        {vertical.id === 1 && "Transforming healthcare administration through technology-driven financial solutions."}
                        {vertical.id === 2 && "Redefining luxury travel with sustainable practices and authentic cultural experiences."}
                        {vertical.id === 3 && "Pioneering water conservation technologies for industries and communities worldwide."}
                        {vertical.id === 4 && "Ethical resource extraction with minimal environmental footprint and maximum community benefit."}
                        {vertical.id === 5 && "Manufacturing excellence through automation, precision engineering, and smart systems."}
                        {vertical.id === 6 && "Democratizing education through accessible, technology-enhanced learning platforms."}
                        {vertical.id === 7 && "Empowering businesses with secure, scalable digital transformation solutions."}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

// Helper function to convert hex to rgba
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default Verticals;


