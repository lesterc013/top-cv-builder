import Input from './Input';

export default function ExpFormBlock({
  experienceDataObj,
  handleExperienceInputChanged,
}) {
  const blockId = experienceDataObj.id;

  return (
    <div className='exp-form-block' id={blockId}>
      <Input
        labelDisplay={'Company'}
        inputId={`${blockId}-company`}
        name={'company'}
        type={'text'}
        value={experienceDataObj.company}
        handleValueChanged={handleExperienceInputChanged}
      />

      <Input
        labelDisplay={'Position'}
        inputId={`${blockId}-position`}
        name={'position'}
        type={'text'}
        value={experienceDataObj.position}
        handleValueChanged={handleExperienceInputChanged}
      />

      <Input
        labelDisplay={'Start Date'}
        inputId={`${blockId}-startDate`}
        name={'startDate'}
        type={'text'}
        value={experienceDataObj.startDate}
        handleValueChanged={handleExperienceInputChanged}
      />

      <Input
        labelDisplay={'End Date'}
        inputId={`${blockId}-endDate`}
        name={'endDate'}
        type={'text'}
        value={experienceDataObj.endDate}
        handleValueChanged={handleExperienceInputChanged}
      />

      <Input
        labelDisplay={'Description'}
        inputId={`${blockId}-description`}
        name={'description'}
        type={'textarea'}
        value={experienceDataObj.description}
        handleValueChanged={handleExperienceInputChanged}
      />
    </div>
  );
}
