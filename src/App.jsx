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
  // TODO: Export default experience object so we dont DRY
  const [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      company: 'New Company',
      position: ' New Position',
      startDate: '2026',
      endDate: '2026',
      description: 'New Description',
    },
    {
      id: crypto.randomUUID(),
      company: 'New Company',
      position: 'Position',
      startDate: '2026',
      endDate: '2026',
      description: 'Description',
    },
  ]);

  // --- PERSONAL DETAILS ---
  function handlePersonalDetailsChanged(e) {
    // Update the corresponding personalDetails object property
    setPersonalDetails({
      ...personalDetails,
      [e.target.id]: e.target.value,
    });
  }

  // --- EXPERIENCE ---
  // function handleAddExperience() {
  //   setExperienceData([
  //     ...experienceData,
  //     {
  //       id: crypto.randomUUID(),
  //       company: 'New Company',
  //       position: 'Position',
  //       startDate: '2026',
  //       endDate: '2026',
  //       description: 'Description',
  //     },
  //   ]);
  // }

  function handleExperienceInputChanged(blockId, e) {
    const updatedExperiences = experienceData.map((expObj) => {
      if (expObj.id !== blockId) {
        return expObj;
      }

      return {
        ...expObj,
        [e.target.name]: e.target.value,
      };
    });
    setExperienceData(updatedExperiences);
  }

  function handleRemoveExperienceData(idToRemove) {
    setExperienceData(
      experienceData.filter((expObj) => expObj.id !== idToRemove),
    );
  }

  return (
    <div className='app'>
      <Form
        personalDetails={personalDetails}
        handlePersonalDetailsChanged={handlePersonalDetailsChanged}
        experienceData={experienceData}
        handleExperienceInputChanged={handleExperienceInputChanged}
        handleRemoveExperienceData={handleRemoveExperienceData}
      />
      <Display />
    </div>
  );
}

export default App;
