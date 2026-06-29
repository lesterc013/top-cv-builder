import { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Lester',
    email: 'lester@email.com',
    phone: '93219818',
  });

  function handlePersonalDetailsChanged(e) {
    // Update the corresponding personalDetails object property
    setPersonalDetails({
      ...personalDetails,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <div className='app'>
      <Form
        personalDetails={personalDetails}
        handlePersonalDetailsChanged={handlePersonalDetailsChanged}
      />
      <Display />
    </div>
  );
}

export default App;
