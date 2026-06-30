import Input from './Input';

export default function PersonalDetailsBlock({
  personalDetails,
  handlePersonalDetailsChanged,
}) {
  return (
    <div className='personal-details'>
      <h2>Personal Details</h2>

      <Input
        labelDisplay={'Name'}
        inputId={'name'}
        name={'name'}
        type={'text'}
        value={personalDetails.name}
        handleValueChanged={handlePersonalDetailsChanged}
      />

      <Input
        labelDisplay={'Email'}
        inputId={'email'}
        name={'email'}
        type={'text'}
        value={personalDetails.email}
        handleValueChanged={handlePersonalDetailsChanged}
      />

      <Input
        labelDisplay={'Phone'}
        inputId={'phone'}
        name={'phone'}
        type={'tel'}
        value={personalDetails.phone}
        handleValueChanged={handlePersonalDetailsChanged}
      />
    </div>
  );
}
