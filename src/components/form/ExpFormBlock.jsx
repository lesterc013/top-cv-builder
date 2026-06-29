import Input from './Input';

export default function ExpFormBlock() {
  return (
    <div className='exp-form-block'>
      <Input label={'Company'} id={'company'} type={'text'} />
      <Input label={'Position'} id={'position'} type={'text'} />
      <Input label={'Start'} id={'startDate'} type={'text'} />
      <Input label={'End'} id={'endDate'} type={'text'} />
      <Input label={'Description'} id={'description'} type={'textarea'} />
    </div>
  );
}
