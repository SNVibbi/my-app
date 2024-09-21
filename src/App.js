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

// function Car({data }) {
//   return <div className="car">{` ${data.year} ${data.color} ${data.brand}`}</div>;
// }

// Loader component
function Loader() {
  return <div className="loader">Loading...</div>;
}

// Content component...
// function Content() {
//   return (
//     <div className="content">
//       <p>
//         React is a Javascript Library for building user interfaces. It is maintained by
//         Facebook and a community of individual developers and companies. React can be used as a
//         base in development or mobile applications. However, React components
//         are most often used in the context of a more traditional web applications, as it allows to render a virtual DOM on the server side then diff it and apply the
//         changes to the UI in Javascript, without ever touching the DOM.
//       </p>
//     </div>
//   );
// }

function App() {
  // // State...
  // const [counter, setCounter] = useState(0);

  // // Handle increment...
  // const handleIncrement = (event) => {
  //   event.preventDefault();
  //   setCounter((prev) => prev + 1);
  // };

  // // Handle decrement...
  // const handleDecrement = (event) => {
  //   event.preventDefault();
  //   setCounter((prev) => prev - 1);
  // };

  // Render...

  // // Handle change...
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log('Value :', event.target.value);
  // }

  // const [state, setState] = useState("Magic Is Here");

  //Handle mouse over...
  // const handleMouseOver = (event) => {
  //   setState("Welcome to the Jungle")
  //   setTimeout(() => {
  //     setState("Magic Is Here");
  //   }, 1000)
  // }

  // Car component...

  // const data = {
  //   brand: "Ford",
  //   color: "Red",
  //   year: "2020",
  // };
  //     <section className="counter-container">
  //       <div className="counter-label">{counter}</div>
  //       <button className="action-btn" onClick={handleIncrement}>
  //         Increment
  //       </button>
  //       <button className="action-btn" onClick={handleDecrement}>
  //         Decrement
  //       </button>
  //     </section>

  //     <section className="form-container">
  //       <form
  //         onSubmit={(event) => {
  //           event.preventDefault();
  //           const { name, email, tel } = event.target.elements;
  //           alert(`Hello ${name.value}! and Your email is ${email.value} and your phone number is ${tel.value} `)

  //         }}
  //       >
  //         <input type="text" placeholder="Enter your name" name="name" />
  //         <input type="text" placeholder="Enter your email" name="email" />
  //         <input type="tel" placeholder="Enter your phone number" name="tel" />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </section>

  // <section className="main-container">
  //   <h1
  //     onMouseOver={handleMouseOver}
  //     className="hover-me"
  //   >
  //    {state}
  //   </h1>
  // </section>

  //   const cars = [{
  //     brand: "Ford",
  //     color: "red",
  //     year: "2020",
  //   }, {
  //     brand: "Audi",
  //     color: "blue",
  //     year: "2019",
  //   }, {
  //     brand: "BMW",
  //     color: "black",
  //     year: "2018",
  //   }
  // ];

  // List of cars...
  // const listOfCars = cars.map((car) => {
  //   return <Car data={car} />
  // })

  // const [isLoading, setIsLoading] = useState(true);

  // // Set a timeout to simulate data loading...
  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 5000);

  // return <section className="main-container">
  //   {isLoading ? <Loader /> : <Content />}
  // </section>;

  const [count, setCount] = useState(8);

  return (
    <section className="main-container">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
}

export default App;
