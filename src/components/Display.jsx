// If Display is provided with all the form data,
// Then does it even need an extra Section?
// Just set the section title h2,
// then use map to render an array of divs with the value

import TwoColumnDisplay from './display/TwoColumnDisplay';

// This can be my initial strategy to get something out - then we refactor if messy
// or if it would make more sense to separate out to style
const testState = {
  general: {
    name: 'Lester',
    email: 'lester@email.com',
    tel: '93219818',
  },

  experience: [
    {
      id: '1',
      company: 'ST Engineering',
      position: 'Software Engineer',
      startDate: '2024',
      endDate: 'Present',
      description: 'Build solid software',
    },
    {
      id: '2',
      company: 'RSN',
      position: 'Naval Officer',
      startDate: '2018',
      endDate: '2024',
      description: 'Sail the seas and do paper work',
    },
  ],

  education: [
    {
      id: '1',
      school: 'NTU',
      title: 'Mech Eng',
      dateStarted: '2015',
      dateEnded: '2018',
    },
    {
      id: '2',
      school: 'SP',
      title: 'Aero Eng',
      dateStarted: '2012',
      dateEnded: '2014',
    },
  ],
};

export default function Display() {
  const generalDisplay = [];

  for (const property in testState.general) {
    const value = testState.general[property];
    generalDisplay.push(<div key={value}>{value}</div>);
  }

  return (
    <div className='display'>
      <h1>Display</h1>

      <div className='general'>
        <h2>General</h2>
        {generalDisplay}
      </div>

      <div className='experience'>
        <h2>Experience</h2>
        {testState.experience.map((dataObj) => (
          <TwoColumnDisplay key={dataObj.id} data={dataObj} />
        ))}
      </div>

      <div className='education'>
        <h2>Education</h2>
        {testState.education.map((dataObj) => (
          <TwoColumnDisplay key={dataObj.id} data={dataObj} />
        ))}
      </div>
    </div>
  );
}
