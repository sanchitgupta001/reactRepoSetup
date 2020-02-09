import React from 'react';

// components
import Content from '../subComponents/Content';

// styles
import './landingPage.css';

function LandingPage() {
  return (
    <React.Fragment>
      <h1 className="landingPage">Landing Page!!!</h1>
      <Content content="Main Content here!" />
    </React.Fragment>
  );
}

export default LandingPage;