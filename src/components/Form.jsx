import EduFormBlock from './form/EduFormBlock';
import ExpFormBlock from './form/ExpFormBlock';
import Input from './form/Input';
import PersonalDetailsBlock from './form/PersonalDetailsBlock';

export default function Form({
  personalDetails,
  handlePersonalDetailsChanged,
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
        <ExpFormBlock />
      </div>

      <div className='education'>
        <h2>Education</h2>
        <EduFormBlock />
      </div>
    </div>
  );
}
