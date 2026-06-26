export default function OneBlock({ dataObj }) {
  const dataDivs = [];

  for (const property in dataObj) {
    // Then for each property in this dataObj, I want to insert it into the above container
    const value = dataObj[property];
    dataDivs.push(<div>{value}</div>);
  }

  return <div>{dataDivs}</div>;
}
