import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { StyleRoot } from "radium";

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Lucian", age: 22 }
    ],
    showPersons: false
  });

  // console.log(personsState);

  const deletePersonHandler = personIndex => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    curson: "pointer"
    // ":hover": {
    //   backgroundColor: "lightgreen",
    //   color: "black"
    // }
  };

  const togglePersonsHandler = event => {
    setPersonsState({
      persons: personsState.persons,
      showPersons: !personsState.showPersons
    });
  };

  const nameChangedHanler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons
    });
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => nameChangedHanler(event, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
    // style[":hover"] = {
    //   backgroundColor: "lightgreen",
    //   color: "black"
    // };
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
  }

  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={() => togglePersonsHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    </StyleRoot>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};

export default app;
