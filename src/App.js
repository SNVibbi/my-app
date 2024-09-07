import React, { useState } from "react";

// // Create a component..

// function Greetings() {
//   return <p>Hello there! Good morning!</p>;
// }

// // Avatar component...
// function Avatar() {
//   return (
//     <img
//       className="card-image"
//       src="https://images.unsplash.com/photo-1706885093487-7eda37b48a60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       alt="Avatar"
//       style={{ width: 100 }}
//     />
//   );
// }

// // Profile card....
// function UserProfileCard() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="card-name">Josephine Kargbo</div>
//       <div>Josephine Kargbo is a diligent relator agent</div>
//     </div>
//   );
// }

// // A list item component...
// function ListItem() {
//   return <li>Tesla</li>;
// }

// // Create our root component => App component
// const App = () => {

//   // List of items..
//   const items = ['Tesla', 'Audi', 'BMW', 'Mercedes', 'Volkswagon'];

//   // Create a list of list items..
//   const ListItems = items.map(item => {
//     return <li key={item}>{item}</li>
//   })

//   return (
//     <ol>
//       { ListItems}
//     </ol>
//   );
// };

function App() {
  // State...
  const [counter, setCounter] = useState(0);

  // Handle increment...
  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  // Handle decrement...
  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  // Render...
  return (
    <section className="counter-container">
      <div className="counter-label">{counter}</div>
      <button className="action-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="action-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </section>
  );
}

export default App;
