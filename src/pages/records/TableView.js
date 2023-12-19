// import React from 'react';

// function TableView({ data, columnVisibility, startIndex, endIndex }) {
//   return (
//     <div className="p-4">
//       <div className="overflow-x-auto ">
//         <table className="w-full border-collapse border text-center rounded-lg shadow-lg bg-white p-2">
//           <thead>
//             <tr>
//               {Object.keys(columnVisibility).map((column) =>
//                 columnVisibility[column] && (
//                   <th key={column} className="border text-center p-2 md:p-4">
//                     {column}
//                   </th>
//                 )
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(startIndex, endIndex).map((item, index) => (
//               <tr key={index}>
//                 {Object.keys(columnVisibility).map((column) =>
//                   columnVisibility[column] && (
//                     <td
//                       key={column}
//                       className="border border-gray-300 text-center bg-white p-2 md:p-4"
//                     >
//                       {item[column]}
//                     </td>
//                   )
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TableView;
