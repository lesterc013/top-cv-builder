export default function Input({ label, id, type }) {
  return (
    <div className='input-row'>
      <label htmlFor={id}>{label}: </label>
      {/* Needed to set the autoComplete attribute else there would be a chrome dev tool error about autoComplete not being set. Nothing major though, functionality still works the same */}
      <input type={type} id={id} name={id} autoComplete='on' />
    </div>
  );
}
