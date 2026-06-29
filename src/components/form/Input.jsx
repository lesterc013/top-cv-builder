export default function Input({
  inputRowId,
  labelDisplay,
  inputId,
  type,
  value,
  handleValueChanged,
}) {
  const textareaRows = 5;
  const textareaCols = 30;

  return (
    <div className='input-row' id={inputRowId}>
      <label htmlFor={inputId}>{labelDisplay}: </label>
      {type === 'textarea' ? (
        <textarea
          name={inputId}
          id={inputId}
          rows={textareaRows}
          cols={textareaCols}
          value={value}
          onChange={(e) => handleValueChanged(e)}
        ></textarea>
      ) : (
        <input
          type={type}
          id={inputId}
          name={inputId}
          autoComplete='on'
          value={value}
          onChange={(e) => handleValueChanged(e)}
        />
      )}
    </div>
  );
}
