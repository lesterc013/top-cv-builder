export default function Input({ label, id, type }) {
  const textareaRows = 5;
  const textareaCols = 30;

  return (
    <div className='input-row'>
      <label htmlFor={id}>{label}: </label>
      {type === 'textarea' ? (
        <textarea
          name={id}
          id={id}
          rows={textareaRows}
          cols={textareaCols}
        ></textarea>
      ) : (
        <input type={type} id={id} name={id} autoComplete='on' />
      )}
    </div>
  );
}
