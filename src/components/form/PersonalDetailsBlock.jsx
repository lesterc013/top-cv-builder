import Input from './Input';

export default function PersonalDetailsBlock({
  personalDetails,
  handlePersonalDetailsChanged,
}) {
  return (
    <div className='personal-details'>
      <h2>Personal Details</h2>

      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        id='name'
        name='name'
        autoComplete='on'
        value={personalDetails.name}
        onChange={(e) => handlePersonalDetailsChanged(e)}
      />

      <label htmlFor='email'>Email: </label>
      <input
        type='text'
        id='email'
        name='email'
        autoComplete='on'
        value={personalDetails.email}
        onChange={(e) => handlePersonalDetailsChanged(e)}
      />

      <label htmlFor='phone'>Phone: </label>
      <input
        type='tel'
        id='phone'
        name='phone'
        autoComplete='on'
        value={personalDetails.phone}
        onChange={(e) => handlePersonalDetailsChanged(e)}
      />
    </div>
  );
}
