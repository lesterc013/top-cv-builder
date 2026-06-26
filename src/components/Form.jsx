import Input from './form/Input';
import Section from './form/Section';

export default function Form() {
  return (
    <div className='form'>
      <h1 className='form-header'>Fill In Details</h1>
      {/* How to reuse Section? Use children prop instead of making GeneralSection ExperienceSection etc */}
      <Section title={'General'}>
        <Input label={'Name'} id={'name'} type={'text'} />
        <Input label={'Email'} id={'email'} type={'email'} />
        <Input label={'Tel'} id={'tel'} type={'tel'} />
      </Section>
      <Section title={'Experience'} />
      <Section title={'Education'} />
    </div>
  );
}
