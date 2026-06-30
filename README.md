# No Styling CV Builder with React

Practiced React concepts of useState and handlers in this project. The main things learnt was how to think in React and then how to optimise the handlers for it.
Left without implementing CSS styles due to time contraints.

Things learnt:
- Thinking in React:
  1. Sketch out the UI first. Dont think about React components. Just focus on the UI.
  2. Ask "what changes over time" to identify what requires state e.g. inputs, new form sections etc. Note: Calculations rendered from state should not be considered as state otherwise become duplicated state.
  3. Ask "who needs the state?" - to tell us WHERE to place the state. Rule of thumb is always Lowest Common Ancestor.
  4. Ask "does this require a React component or primitive HTML?" Usually a React component is something that requires reusing, handle state, has own rendering logic, or just makes it neater to bundle together.
  5. Map out the Data Structure of the UI shape to know how to store the state. Usually, objects to store key-value pairs of data. If we have more than one block of data, then it becomes an array of objects.
- Premature abstraction is the root of all evil...