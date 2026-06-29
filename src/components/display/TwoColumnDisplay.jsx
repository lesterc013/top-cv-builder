// Takes in a data object. Composes a container to house the date and info for a specific section
// This is so we can separate the displays using CSS.
export default function TwoColumnDisplay({ data }) {
  const date = [];
  const info = [];

  for (const property in data) {
    if (property.toLowerCase().includes('id')) {
      continue;
    }

    if (property.toLowerCase().includes('date')) {
      // Store as a div inside date array
      date.push(
        <div key={`${data.id}-${property}`} className={property}>
          {data[property]}
        </div>,
      );
    } else {
      info.push(
        <div key={`${data.id}-${property}`} className={property}>
          {data[property]}
        </div>,
      );
    }
  }

  return (
    <div className={`two-col-display`}>
      <div className='date'>{date}</div>
      <div className='info'>{info}</div>
    </div>
  );
}
