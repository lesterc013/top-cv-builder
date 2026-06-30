import Input from './Input';

export default function ExpFormBlock({
  experienceDataObj,
  handleInputChanged,
  removeExperienceBlock,
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
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'Position'}
        inputId={`${blockId}-position`}
        name={'position'}
        type={'text'}
        value={experienceDataObj.position}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'Start Date'}
        inputId={`${blockId}-startDate`}
        name={'startDate'}
        type={'text'}
        value={experienceDataObj.startDate}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'End Date'}
        inputId={`${blockId}-endDate`}
        name={'endDate'}
        type={'text'}
        value={experienceDataObj.endDate}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'Description'}
        inputId={`${blockId}-description`}
        name={'description'}
        type={'textarea'}
        value={experienceDataObj.description}
        handleValueChanged={handleInputChanged}
      />

      <button type='button' onClick={removeExperienceBlock}>
        Remove
      </button>
    </div>
  );
}
