import { Fragment } from "react";

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function Newlist(props) {
  <>
    {!props.animals ? (
      <div>Loading...</div>
    ) : props.animals.length > 0 ? (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    ) : (
      <div>There are no animals in the list!</div>
    )}
  </>;
}

// // or
// function List(props) {
//   return (
//     <>
//       {!props.animals && <div>Loading...</div>}
//       {props.animals && props.animals.length > 0 && (
//         <ul>
//           {props.animals.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       )}
//       {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
//     </>
//   );
// }

export default function Animal() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);
  const newList = [];
  return (
    <Fragment>
      <div>
        <h1>Animals: </h1>
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
        <ul>{animalsList}</ul>
        <List animals={animals} />
        <Newlist animals={animals} />
        <Newlist animals={newList} />
        <Newlist />
      </div>
    </Fragment>
  );
}
