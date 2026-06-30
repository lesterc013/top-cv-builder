import PersonalDetailsBlock from './form/PersonalDetailsBlock';
import ExpFormBlock from './form/ExpFormBlock';
import EduFormBlock from './form/EduFormBlock';

export default function Form({
  personalDetails,
  handlePersonalDetailsChanged,
  experienceData,
  handleAddExperience,
  handleExperienceInputChanged,
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
            // LEARNING MOMENT: Close over info that the handler should keep - in this case, I provide each handler with the corresponding experienceDataObj.id so that when its called in future they know which experienceDataObj its for.
            // So now, we have create a single arg wrapper over the original handler from App.jsx that has closed over the id so the downwards onChange that only passes in 1 argument will work.
            handleExperienceInputChanged={(e) =>
              handleExperienceInputChanged(experienceDataObj.id, e)
            }
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
