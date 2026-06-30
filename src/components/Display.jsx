import TwoColumnDisplay from './display/TwoColumnDisplay';

export default function Display({
  personalDetails,
  experienceData,
  educationData,
}) {
  const generalDisplay = [];

  for (const property in personalDetails) {
    const value = personalDetails[property];
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
        {experienceData.map((dataObj) => (
          <TwoColumnDisplay key={dataObj.id} data={dataObj} />
        ))}
      </div>

      <div className='education'>
        <h2>Education</h2>
        {educationData.map((dataObj) => (
          <TwoColumnDisplay key={dataObj.id} data={dataObj} />
        ))}
      </div>
    </div>
  );
}
