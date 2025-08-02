import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


function AboutUs(){


 const [hoverStates, setHoverStates] = useState({
    innovation: false,
    excellence: false,
    sustainability: false,
    integrity: false,
    customerCentric: false
  });

  const handleHover = (card, isHovering) => {
    setHoverStates(prev => ({ ...prev, [card]: isHovering }));
  };



  const cardData = [
  {
    title: "Harpreet Singh",
    text: "Co-founder",
    imgSrc: "path/to/image1.jpg"
  },
  {
    title: "Ravi ",
    text: "Co-founder",
    imgSrc: "path/to/image2.jpg"
  },
  {
    title: "Tapchu",
    text: "Co-founder",
    imgSrc: "path/to/image3.jpg"
  },
  {
    title: "Gogu",
    text: "Co-founder",
    imgSrc: "path/to/image4.jpg"
  }
];

    return(
        <div>

          <div style={{ position: 'relative' }}>
  <img
    src="/himimg1.jpg"
    alt="Himalayan mountain landscape"
    style={{
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      objectPosition: 'center 70%'
    }}
  />
  <div style={{
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }}>
    <h1 style={{
      color: 'white',
      fontSize: '3.5rem',
      textShadow: '0 2px 10px rgba(0,0,0,0.5)'
    }}>
      Himalayan Group
    </h1>
  </div>
</div>


            <Card style={{ 
    border: 'none', 
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', 
    maxWidth: '900px', 
    margin: 'auto',
    borderRadius: '12px'
  }}>
    <Card.Body style={{ padding: '2.5rem' }}>
      <Card.Title style={{ 
        fontSize: '2rem', 
        color: '#1a1a1a', 
        fontWeight: '600', 
        marginBottom: '1.5rem',
        position: 'relative',
        display: 'inline-block'
      }}>
        About Us
        <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '3px', backgroundColor: '#3b82f6' }}></span>
      </Card.Title>
      <Card.Text style={{ 
        fontSize: '1.05rem', 
        lineHeight: '1.7', 
        color: '#4b5563', 
        margin: 'auto',
        maxWidth: '800px'
      }}>
        Himalayan Group is a premier multi-industry conglomerate dedicated to excellence, innovation, and sustainable growth. With a strong presence across diverse sectors, we are committed to delivering top-tier solutions that shape industries, empower communities, and create a brighter future.
        <br /><br />
        Founded with a vision to integrate technology and sustainability, Himalayan Group has evolved into a powerhouse of diversified expertise. We continuously explore new methodologies to address global challenges, from climate change to digital transformation.
      </Card.Text>
    </Card.Body>
  </Card>




{/* Vision Section - Text Left, Image Right */}
<div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '3rem',
  margin: '80px 0', 
  padding: '0 5%',
  flexDirection: { xs: 'column', md: 'row' } // Responsive layout
}}>
  {/* Vision Text (Left) */}
  <div style={{ flex: 1, order: 1 }}>
    <h1 
      style={{ 
        fontSize: '2.5rem',
        color: '#51586aff',
        fontWeight: '600',
        marginBottom: '1rem',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      Our Vision
      <span 
        style={{
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          width: '80px',
          height: '6px',
          backgroundColor: '#1e40af'
        }}
      ></span>
    </h1>
    <p 
      style={{
        fontSize: '1.15rem',
        lineHeight: '1.7',
        color: '#4b5563',
        marginTop: '1.2rem'
      }}
    >
      To emerge as a globally recognized conglomerate, driving excellence, innovation, and sustainability across multiple industries, while continuously creating value for our stakeholders.
      <br/><br/>
      We envision a future where businesses grow responsibly, communities thrive sustainably, and technologies serve the greater good of humanity.
      <br/><br/>
      By staying agile and purpose-driven, we seek to adapt to global changes and remain at the forefront of multi-sector leadership.
    </p>
  </div>
  
  {/* Vision Image (Right) */}
  <div style={{ flex: 1, order: 2, display: 'flex', justifyContent: 'center' }}>
    <img
      src="/himimg3.jpg"
      alt="Himalayan Group Vision"
      style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}
    />
  </div>
</div>

{/* Mission Section - Text Right, Image Left */}
<div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '3rem',
  margin: '80px 0', 
  padding: '0 5%',
  flexDirection: { xs: 'column', md: 'row' } // Responsive layout
}}>
  {/* Mission Image (Left) */}
  <div style={{ flex: 1, order: { xs: 2, md: 1 }, display: 'flex', justifyContent: 'center' }}>
    <img
      src="/himimg2.jpg"
      alt="Himalayan Group Mission"
      style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}
    />
  </div>
  
  {/* Mission Text (Right) */}
  <div style={{ flex: 1, order: { xs: 1, md: 2 } }}>
    <h1 
      style={{ 
        fontSize: '2.5rem',
        color: '#51586aff',
        fontWeight: '600',
        marginBottom: '1rem',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      Our Mission
      <span 
        style={{
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          width: '80px',
          height: '6px',
          backgroundColor: '#1e40af'
        }}
      ></span>
    </h1>
    <p 
      style={{
        fontSize: '1.15rem',
        lineHeight: '1.7',
        color: '#4b5563',
        marginTop: '1.2rem'
      }}
    >
      To empower businesses with world-class, innovative solutions tailored for sustainable growth. 
      <br/><br/>
      To foster an ecosystem of continuous learning, development, and technological advancement. 
      <br/><br/>
      To lead with integrity, efficiency, and responsibility, ensuring positive impact across all sectors we operate in.
      <br/><br/>
      We are committed to closing the gap between innovation and execution, ensuring our clients receive actionable, high-impact solutions.
    </p>
  </div>
</div>


<div style={{padding: '4rem 2rem', backgroundColor: '#f8fafc'}}>
  {/* Title Section */}
  <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem'}}>
    <h2 style={{
      fontSize: '2.25rem',
      color: '#1e293b',
      fontWeight: '700',
      letterSpacing: '-0.5px',
      position: 'relative',
      display: 'inline-block',
      marginBottom: '1.25rem'
    }}>
      Our Core Values
      <span style={{
        position: 'absolute',
        bottom: '-12px',
        left: '0',
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, #3b82f6, #10b981)',
        borderRadius: '2px'
      }}></span>
    </h2>
    <p style={{
      fontSize: '1.1rem',
      color: '#64748b',
      lineHeight: '1.6'
    }}>
      The foundational principles that drive our decisions and shape our legacy
    </p>
  </div>
  </div>

 

{/* Values Grid */}
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.75rem',
  maxWidth: '1200px',
  margin: '0 auto'
}}>
  {/* Innovation */}
  <div 
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: hoverStates.innovation ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      borderLeft: '5px solid #3b82f6',
      transition: 'all 0.3s ease',
      transform: hoverStates.innovation ? 'translateY(-5px)' : 'none'
    }}
    onMouseEnter={() => handleHover('innovation', true)}
    onMouseLeave={() => handleHover('innovation', false)}
  >
    <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#eff6ff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 21V11H21V21H13Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 13V3H11V13H3Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 21V17H11V21H3Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 3V7H21V3H13Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: '#1e40af',
          margin: '0'
        }}>Innovation</h3>
      </div>
      <p style={{
        color: '#475569',
        lineHeight: '1.7',
        marginLeft: '64px'
      }}>Pioneering cutting-edge solutions that redefine industry standards.</p>
  </div>

  {/* Excellence */}
  <div 
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: hoverStates.excellence ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      borderLeft: '5px solid #10b981',
      transition: 'all 0.3s ease',
      transform: hoverStates.excellence ? 'translateY(-5px)' : 'none'
    }}
    onMouseEnter={() => handleHover('excellence', true)}
    onMouseLeave={() => handleHover('excellence', false)}
  >
     <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#ecfdf5',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15L8 11L9.41 9.59L12 12.17L14.59 9.59L16 11L12 15Z" fill="#10b981"/>
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#10b981"/>
          </svg>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: '#047857',
          margin: '0'
        }}>Excellence</h3>
      </div>
      <p style={{
        color: '#475569',
        lineHeight: '1.7',
        marginLeft: '64px'
      }}>Delivering superior quality in every service and product we offer.</p>
  </div>

  {/* Sustainability */}
  <div 
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: hoverStates.sustainability ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      borderLeft: '5px solid #f59e0b',
      transition: 'all 0.3s ease',
      transform: hoverStates.sustainability ? 'translateY(-5px)' : 'none'
    }}
    onMouseEnter={() => handleHover('sustainability', true)}
    onMouseLeave={() => handleHover('sustainability', false)}
  >
  <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#fffbeb',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2V18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: '#b45309',
          margin: '0'
        }}>Sustainability</h3>
      </div>
      <p style={{
        color: '#475569',
        lineHeight: '1.7',
        marginLeft: '64px'
      }}>Committing to eco-friendly and responsible business practices.</p>
  </div>

  {/* Integrity */}
  <div 
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: hoverStates.integrity ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      borderLeft: '5px solid #8b5cf6',
      transition: 'all 0.3s ease',
      transform: hoverStates.integrity ? 'translateY(-5px)' : 'none'
    }}
    onMouseEnter={() => handleHover('integrity', true)}
    onMouseLeave={() => handleHover('integrity', false)}
  >
    <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#f5f3ff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H12H8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V8" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: '#6d28d9',
          margin: '0'
        }}>Integrity</h3>
      </div>
      <p style={{
        color: '#475569',
        lineHeight: '1.7',
        marginLeft: '64px'
      }}>Upholding the highest ethical and professional standards.</p>
  </div>

  {/* Customer-Centric Approach */}
  <div 
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: hoverStates.customerCentric ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      borderLeft: '5px solid #ec4899',
      transition: 'all 0.3s ease',
      transform: hoverStates.customerCentric ? 'translateY(-5px)' : 'none'
    }}
    onMouseEnter={() => handleHover('customerCentric', true)}
    onMouseLeave={() => handleHover('customerCentric', false)}
  >
    <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#fdf2f8',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#ec4899"/>
          </svg>
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: '#be185d',
          margin: '0'
        }}>Customer-Centric Approach</h3>
      </div>
      <p style={{
        color: '#475569',
        lineHeight: '1.7',
        marginLeft: '64px'
      }}>Ensuring client success and satisfaction is at the heart of our operations.</p>
  </div>
</div>


    
        </div>

        

        
    )
}

export default AboutUs


