import ExpFormBlock from './form/ExpFormBlock';
import Input from './form/Input';

export default function Form() {
  return (
    <div className='form'>
      <h1 className='form-header'>Fill In Details</h1>

      <div className='personal-details'>
        <h2>Personal Details</h2>
        <Input label={'Name'} id={'name'} type={'text'} />
        <Input label={'Email'} id={'email'} type={'email'} />
        <Input label={'Tel'} id={'tel'} type={'tel'} />
      </div>

      <div className='experience'>
        <h2>Experience</h2>
        <ExpFormBlock />
      </div>

      <div className='education'>
        <h2>Education</h2>
        {/* Use reusable blocks here */}
      </div>
    </div>
  );
}
