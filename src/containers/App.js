import React, { useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHanler}
      />
    );
  }

  return (
    <div className={classes.App}>
      <Cockpit
        showPersons={personsState.showPersons}
        persons={personsState.persons}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};

export default app;
