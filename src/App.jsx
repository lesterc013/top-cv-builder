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

  const [cvData, setCvData] = useState({
    experienceSection: [
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
    ],
    educationSection: [],
  });

  // --- PERSONAL DETAILS ---
  function handlePersonalDetailsChanged(e) {
    // Update the corresponding personalDetails object property
    setPersonalDetails({
      ...personalDetails,
      [e.target.id]: e.target.value,
    });
  }

  // --- EXPERIENCE ---
  // TODO: Refactor to generic
  function handleAddExperience() {
    setExperienceData([
      ...experienceData,
      {
        id: crypto.randomUUID(),
        company: 'New Company',
        position: 'Position',
        startDate: '2026',
        endDate: '2026',
        description: 'Description',
      },
    ]);
  }

  // Generic input change handler for both Exp and Edu sections.
  function handleInputChanged(sectionName, idDataObj, e) {
    const arrDataObjs = cvData[sectionName];
    if (!arrDataObjs) {
      console.error(`${sectionName} not found in cvData`);
      return;
    }

    const updatedArrDataObjs = arrDataObjs.map((dataObj) => {
      if (dataObj.id !== idDataObj) {
        return dataObj;
      }

      return {
        ...dataObj,
        [e.target.name]: e.target.value,
      };
    });

    setCvData({ ...cvData, [sectionName]: updatedArrDataObjs });
  }

  // TODO: Refactor to generic
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
        experienceData={cvData['experienceSection']}
        // handleExperienceInputChanged={handleExperienceInputChanged}
        handleInputChanged={handleInputChanged}
        handleAddExperience={handleAddExperience}
        handleRemoveExperienceData={handleRemoveExperienceData}
      />
      <Display />
    </div>
  );
}

export default App;
