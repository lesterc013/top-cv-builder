import Section from './form/Section';

export default function Form() {
  return (
    <div className='form'>
      <h1 className='form-header'>Fill In Details</h1>
      <Section title={'General'} />
      <Section title={'Experience'} />
      <Section title={'Education'} />
    </div>
  );
}
