import React, { useState } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
  let btnClass = "";
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                click={deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={event => nameChangedHanler(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    );
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (personsState.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={() => togglePersonsHandler()}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};

export default app;
