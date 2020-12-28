export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  <div id="block">
    <p>{props.name}<button id="delete" onClick = {() =>props.del(props.name)} >delete</button></p>
    <p>{props.grd}</p>
    <p>{props.crd}</p>
  </div>
  </>;
};