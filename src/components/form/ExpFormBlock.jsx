import Input from './Input';

export default function ExpFormBlock({ experienceDataObj }) {
  const blockId = experienceDataObj.id;

  return (
    <div className='exp-form-block' id={experienceDataObj.id}>
      <Input
        inputRowId={`${blockId}-company`}
        labelDisplay={'Company'}
        inputId={`${blockId}-company`}
        type={'text'}
        value={experienceDataObj.company}
        // handleValueChanged={}
      />

      <Input
        inputRowId={`${blockId}-position`}
        labelDisplay={'Position'}
        inputId={`${blockId}-position`}
        type={'text'}
        value={experienceDataObj.position}
        // handleValueChanged={}
      />

      <Input
        inputRowId={`${blockId}-startDate`}
        labelDisplay={'Start Date'}
        inputId={`${blockId}-startDate`}
        type={'text'}
        value={experienceDataObj.startDate}
        // handleValueChanged={}
      />

      <Input
        inputRowId={`${blockId}-endDate`}
        labelDisplay={'End Date'}
        inputId={`${blockId}-endDate`}
        type={'text'}
        value={experienceDataObj.endDate}
        // handleValueChanged={}
      />

      <Input
        inputRowId={`${blockId}-description`}
        labelDisplay={'Description'}
        inputId={`${blockId}-description`}
        type={'textarea'}
        value={experienceDataObj.description}
        // handleValueChanged={}
      />
    </div>
  );
}
