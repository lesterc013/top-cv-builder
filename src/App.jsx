import { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Form from './components/Form';

const defaultSectionBlocks = {
  experienceSection: () => {
    return {
      id: crypto.randomUUID(),
      company: 'New Company',
      position: 'New Position',
      startDate: '2026',
      endDate: '2026',
      description: 'New Description',
    };
  },
  educationSection: () => {
    return {
      id: crypto.randomUUID(),
      school: 'Best School',
      degree: 'Super degree',
      startDate: '2026',
      endDate: '2026',
    };
  },
};

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Lester',
    email: 'lester@email.com',
    phone: '93219818',
  });

  const [cvData, setCvData] = useState({
    experienceSection: [
      defaultSectionBlocks['experienceSection'](),
      defaultSectionBlocks['experienceSection'](),
    ],
    educationSection: [
      defaultSectionBlocks['educationSection'](),
      defaultSectionBlocks['educationSection'](),
    ],
  });

  // --- PERSONAL DETAILS ---
  function handlePersonalDetailsChanged(e) {
    // Update the corresponding personalDetails object property
    setPersonalDetails({
      ...personalDetails,
      [e.target.id]: e.target.value,
    });
  }

  // --- SECTION BLOCK HANDLERS ---
  function addNewSectionBlock(sectionName) {
    const sectionBlockFactoryFunction = defaultSectionBlocks[sectionName];

    setCvData({
      ...cvData,
      [sectionName]: [...cvData[sectionName], sectionBlockFactoryFunction()],
    });
  }

  function removeSectionBlock(sectionName, idToRemove) {
    const arrDataObjs = cvData[sectionName];
    if (!arrDataObjs) {
      console.error(`${sectionName} not found in cvData`);
      return;
    }

    const updatedArrDataObjs = arrDataObjs.filter(
      (dataObj) => dataObj.id !== idToRemove,
    );
    setCvData({ ...cvData, [sectionName]: updatedArrDataObjs });
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

  return (
    <div className='app'>
      <Form
        personalDetails={personalDetails}
        handlePersonalDetailsChanged={handlePersonalDetailsChanged}
        experienceData={cvData['experienceSection']}
        educationData={cvData['educationSection']}
        handleInputChanged={handleInputChanged}
        addNewSectionBlock={addNewSectionBlock}
        removeSectionBlock={removeSectionBlock}
      />
      <Display />
    </div>
  );
}

export default App;
