import PersonalDetailsBlock from './form/PersonalDetailsBlock';
import ExpFormBlock from './form/ExpFormBlock';
import EduFormBlock from './form/EduFormBlock';

export default function Form({
  personalDetails,
  handlePersonalDetailsChanged,
  experienceData,
  educationData,
  handleInputChanged,
  addNewSectionBlock,
  removeSectionBlock,
}) {
  const experienceSectionName = 'experienceSection';
  const educationSectionName = 'educationSection';

  return (
    <div className='form'>
      <h1 className='form-header'>Fill In Details</h1>

      <PersonalDetailsBlock
        personalDetails={personalDetails}
        handlePersonalDetailsChanged={handlePersonalDetailsChanged}
      />

      <div className='experience'>
        <h2>Experience</h2>
        <button
          type='button'
          onClick={(e) => {
            addNewSectionBlock(experienceSectionName);
          }}
        >
          Add New
        </button>
        {experienceData.map((experienceDataObj) => (
          <ExpFormBlock
            key={experienceDataObj.id}
            experienceDataObj={experienceDataObj}
            handleInputChanged={(e) => {
              handleInputChanged(
                experienceSectionName,
                experienceDataObj.id,
                e,
              );
            }}
            removeExperienceBlock={(e) => {
              removeSectionBlock(experienceSectionName, experienceDataObj.id);
            }}
          />
        ))}
      </div>

      <div className='education'>
        <h2>Education</h2>
        <button
          type='button'
          onClick={(e) => {
            addNewSectionBlock(educationSectionName);
          }}
        >
          Add New
        </button>
        {educationData.map((educationDataObj) => {
          return (
            <EduFormBlock
              key={educationDataObj.id}
              educationDataObj={educationDataObj}
              handleInputChanged={(e) => {
                handleInputChanged(
                  educationSectionName,
                  educationDataObj.id,
                  e,
                );
              }}
              removeEducationBlock={(e) => {
                removeSectionBlock(educationSectionName, educationDataObj.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
