import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//   </>,
// )
// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
