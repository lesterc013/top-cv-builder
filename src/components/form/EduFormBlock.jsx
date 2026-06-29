import Input from './Input';

export default function EduFormBlock() {
  return (
    <div className='edu-form-block'>
      <Input label={'School'} id={'school'} type={'text'} />
      <Input label={'Degree'} id={'degree'} type={'text'} />
      <Input label={'Start'} id={'startDate'} type={'text'} />
      <Input label={'End'} id={'endDate'} type={'text'} />
    </div>
  );
}
