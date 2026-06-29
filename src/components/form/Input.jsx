export default function Input({
  labelDisplay,
  inputId,
  name,
  type,
  value,
  handleValueChanged,
}) {
  const textareaRows = 5;
  const textareaCols = 30;

  return (
    <div className='input-row'>
      <label htmlFor={inputId}>{labelDisplay}: </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={inputId}
          rows={textareaRows}
          cols={textareaCols}
          value={value}
          onChange={(e) => handleValueChanged(e)}
        ></textarea>
      ) : (
        <input
          name={name}
          id={inputId}
          type={type}
          autoComplete='on'
          value={value}
          onChange={(e) => handleValueChanged(e)}
        />
      )}
    </div>
  );
}
