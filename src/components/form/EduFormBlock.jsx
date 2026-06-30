import Input from './Input';

export default function EduFormBlock({
  educationDataObj,
  handleInputChanged,
  removeEducationBlock,
}) {
  const blockId = educationDataObj.id;

  return (
    <div className='edu-form-block' id={blockId}>
      <Input
        labelDisplay={'School'}
        inputId={`${blockId}-school`}
        name={'school'}
        type={'text'}
        value={educationDataObj.school}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'Degree'}
        inputId={`${blockId}-degree`}
        name={'degree'}
        type={'text'}
        value={educationDataObj.degree}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'Start Date'}
        inputId={`${blockId}-startDate`}
        name={'startDate'}
        type={'text'}
        value={educationDataObj.startDate}
        handleValueChanged={handleInputChanged}
      />

      <Input
        labelDisplay={'End Date'}
        inputId={`${blockId}-endDate`}
        name={'endDate'}
        type={'text'}
        value={educationDataObj.endDate}
        handleValueChanged={handleInputChanged}
      />

      <button type='button' onClick={removeEducationBlock}>
        Remove
      </button>
    </div>
  );
}
