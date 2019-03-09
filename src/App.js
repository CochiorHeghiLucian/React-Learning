import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Lucian", age: 22 }
    ],
    showPersons: false
  });

  console.log(personsState);

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Lucian", age: 20 }
      ],
      showPersons: personsState.showPersons
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Lucian", age: 26 }
      ],
      showPersons: personsState.showPersons
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    curson: "pointer"
  };

  const togglePersonsHandler = event => {
    setPersonsState({
      persons: personsState.persons,
      showPersons: !personsState.showPersons
    });
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, "Max!")}
          changed={nameChangedHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={() => togglePersonsHandler()}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};

export default app;
