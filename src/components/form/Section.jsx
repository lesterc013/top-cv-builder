export default function Section({ title, children }) {
  return (
    <div className='form-section'>
      <h2 className='title'>{title}</h2>
      {children}
    </div>
  );
}
