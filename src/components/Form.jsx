import PersonalDetailsBlock from './form/PersonalDetailsBlock';
import ExpFormBlock from './form/ExpFormBlock';
import EduFormBlock from './form/EduFormBlock';

export default function Form({
  personalDetails,
  handlePersonalDetailsChanged,
  experienceData,
  handleInputChanged,
  handleAddExperience,
  // handleExperienceInputChanged,
  handleRemoveExperienceData,
}) {
  return (
    <div className='form'>
      <h1 className='form-header'>Fill In Details</h1>

      <PersonalDetailsBlock
        personalDetails={personalDetails}
        handlePersonalDetailsChanged={handlePersonalDetailsChanged}
      />

      <div className='experience'>
        <h2>Experience</h2>
        <button type='button' onClick={handleAddExperience}>
          Add New
        </button>
        {experienceData.map((experienceDataObj) => (
          <ExpFormBlock
            key={experienceDataObj.id}
            experienceDataObj={experienceDataObj}
            handleInputChanged={(e) => {
              handleInputChanged('experienceSection', experienceDataObj.id, e);
            }}
            handleRemoveExperienceData={(e) => {
              handleRemoveExperienceData(experienceDataObj.id);
            }}
          />
        ))}
      </div>

      <div className='education'>
        <h2>Education</h2>
        <EduFormBlock />
      </div>
    </div>
  );
}
