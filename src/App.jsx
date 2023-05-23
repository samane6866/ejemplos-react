import "./App.css";
// En esta versión con Vite no necesita el .jsx ni .js
import Tarjeta from "./Tarjeta";

// function App() {
//   const descripcionPerro = "Guau! Guau! Guau!";
//   const persona = { name: "pepe" };
//   return (
//     <>
//       <h1>Hola!</h1>
//       <p>{new Date().toLocaleDateString()}</p>
//       <Tarjeta titulo="Gato" descripcion="Miau!" />
//       <Tarjeta titulo="Perro" descripcion={descripcionPerro} />
//     </>
//   );
// }

const transactions = [
  {
    id: 1,
    concept: "Initial balance",
    value: 2000,
  },
  {
    id: 2,
    concept: "Delicious Iranian lunch",
    value: -28,
  },
  {
    id: 3,
    concept: "Payroll",
    value: 1300,
  },
];

/**
 * Let's create a componente to display a list of bank deposits and withdraws.
 *
 */

// function TransactionsPanel({ movements }) {
//   const filtredMovements=
//   return (
//     <div>
//       {/* movements is an array of objects. We transform each object into a <p> tag. Its content it's the transacion concept and value */}
//       {/* React need an unique id for each element rendered from a list. */}
//       {movements.map((m) => (
//         <p
//           key={m.id}
//           style={{ backgroundColor: m.value > 0 ? "green" : "red" }}
//         >
//           {m.concept} {m.value}
//         </p>
//       ))}
//     </div>
//   );
// }

function TransactionsPanel({ movements, type }) {
  /**
   * If the value of variable 'type' is 'deposit', you should filter movements array to keep only the transactions that have a positive value
   *
   * If the value of variable 'type' is 'withdraw', you should filter movements array to keep only the transactions that have a negative value
   */
  let filteredMovements =
    movements.filter((m) => m.type === "deposit" && m.value > 0) ||
    (tyep == "witdrow" && m.value < 0) ||
    type == "all";
  console.log(filteredMovements);
  let jsxMovements = filteredMovements.map((m) => (
    <p key={m.id} style={{ color: m.value > 0 ? "#98fb98" : "#d65050" }}>
      The concept is {m.concept} and the value is {m.value}
    </p>
  ));

  return (
    <div>
      {/* movements is an array of objects. We transform each object into a <p> tag. Its content it's the transacion concept and value */}
      {/* React need an unique id for each element rendered from a list. */}
      {/* We'll use a ternary operator to evaluate m.value. If m.value is greater than 0, backgroundColor should be set to green. Otherwise, it should be set to red.*/}
      {jsxMovements}
      {filteredMovements}
    </div>
  );
}

// function App() {

//   return (
//     <>
//       {/* TransactionPanel must accept a new prop. Its value may be "all", "withdraw", "deposit" */}
//       <TransactionsPanel movements={transactions} type="deposit" />
//       {/* <p>{new Date().toLocaleDateString()}</p>
//       <Tarjeta titulo="Gato" descripcion="Miau!" />
//       <Tarjeta titulo="Perro" descripcion={descripcionPerro} /> */}
//     </>
//   );
// }

// export default App

function App() {
  return (
    <>
      <TransactionsPanel movements={transactions} />
      {/* <p>{new Date().toLocaleDateString()}</p>
      <Tarjeta titulo="Gato" descripcion="Miau!" />
      <Tarjeta titulo="Perro" descripcion={descripcionPerro} /> */}
    </>
  );
}

export default App;
