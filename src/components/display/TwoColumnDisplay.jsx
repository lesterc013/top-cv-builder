import OneBlock from './OneBlock';

export default function TwoColumnDisplay({ title, sectionName, data }) {
  // data is an array of objects
  const displayArray = [];

  data.forEach((dataObj) => displayArray.push(<OneBlock dataObj={dataObj} />));

  return <div className={`two-col-display ${sectionName}`}>{displayArray}</div>;
}
