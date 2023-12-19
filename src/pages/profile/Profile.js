// import React, { useState }  from "react";
// function Profile() {
//   return (
//     <div className="p-2 w-full  bg-blue-50 h-screen ">

//       {/* Profile Image */}
//       <div className=" profile-img shadow-lg rounded-md bg-white  w-11/12 mx-auto mt-16">
//       <div className="flex justify-center items-center">
//   <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-gray-300 ">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//       alt="profile image"
//       className="w-full h-full object-cover "
//       name="profile Image"
//     />
//   </div>
// </div>
//       {/* Input Boxes */}
//       <div className=" main-field mx-12 grid grid-cols-2 gap-8  ">
//         <div>
//           <label
//             className=" Operator-lable block text-gray-700 font-semibold mb-2 "
//             htmlFor="lastName"
//           >
//            Operator
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className=" Operator-field border rounded w-full py-2 px-3 m-1 shadow-lg"
//           />
//         </div>
//         <div>
//           <label
//             className=" Operatorid-lable block text-gray-700 font-semibold mb-2"
//             htmlFor="text"
//           >
//             Operator ID
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className=" Operatorid-field border rounded  w-full py-2 px-3 m-1 shadow-lg"
//           />
//         </div>
//         <div>
//           <label
//             className=" Department-lable block text-gray-700 font-semibold mb-2"
//             htmlFor="text"
//           >
//            Department
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className=" Department-field border rounded w-full py-2 px-3 m-1 shadow-lg"
//           />
//         </div>
//         <div>
//           <label
//             className=" Location-lable block text-gray-700 font-semibold mb-2"
//             htmlFor="text"
//           >
//            Location
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className=" Location-field border rounded w-full py-2 px-3 m-1 shadow-lg"
//           />
//           <div className=" Savebutton col-span-1 flex justify-end m-4">
//           <button className=" Save-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg">
//             Save
//           </button>
//         </div>
//         </div>
//         {/* Left Column - Save Button */}
//       </div>
//     </div>
//     </div>
//   );
// }
// export default Profile;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";

// function Profile() {
//   const [search, setSearch] = useState ("");
//     const [profile, setProfile] = useState([]);
//     const [filterCountries, setFilterCountries]= useState([]);

//   const getProfile = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v2/all");
//       setProfile(response.data);
//       setFilterCountries(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const columns = [
//     {
//       name: "Country name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Country Native Name",
//       selector: (row) => row.nativeName,
//     },
//     {
//       name: "Country Capital",
//       selector: (row) => row.capital,
//     },
//     {
//       name: "Country Flag",
//       selector: (row) => <img width={50} height={50} src={row.flag} />,
//     },
//   ];

//   useEffect(() => {
//     getProfile();
//   }, []);

// useEffect(() =>{
//   const result = profile.filter((country) => {
//     return country.name.toLowerCase().match(search.toLowerCase());
//   });
// setFilterCountries(result);
// },[search]);
//   return (
//     <div className=" mt-16 bg-blue-50 h-screen">
//       <DataTable
//         columns={columns}
//         data={filterCountries}
//         pagination
//         fixedHeader
//         fixedHeaderScrollHeight="450px"
//         highlightOnHover
//         responsive
//         filter
//         subHeader
//         actions={
//           <div className="flex items-center justify-between gap-3 ">
//             {/* Your button code */}
//             <button className="bg-blue-500 rounded-lg p-1 m-2 ">Export</button>

//             {/* Your input field code */}
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="w-25 form-control border"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         }
//         customStyles={{
//           headRow: {
//             style: {
//               width: "100%",

//             },
//           },
//           headCells: {
//             style: {
//               paddingLeft: "8px",
//               paddingRight: "8px",

//             },
//           },
//           cells: {
//             style: {
//               paddingLeft: "12px",
//               paddingRight: "12px",

//             },
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default Profile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

import "tailwindcss/tailwind.css"; // Make sure to import Tailwind CSS in your project

function Profile() {
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [view, setView] = useState("table"); // 'table' or 'grid'
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // You can adjust the number of items per page as needed

  const [zoomedCountry, setZoomedCountry] = useState(null);

  const toggleZoom = (country) => {
    setZoomedCountry(country === zoomedCountry ? null : country);
  };

  const getProfile = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setProfile(response.data);
      setFilterCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={row.flag}
          alt={row.name}
          onClick={() => toggleZoom(row)}
        />
      ),
    },
  ];

  const smallFlagColumns = [
    {
      name: "Country name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      cell: (row) => (
        <img
          className={`w-24 h-20 object-cover cursor-pointer ${
            zoomedCountry === row ? 'transform scale-150' : ''
          }`}
          src={row.flag}
          alt={row.name}
          onClick={() => toggleZoom(row)}
        />
      ),
    },
    {
      name: "Country Flag",
      cell: (row) => (
        <img
          className={`w-16 h-12 object-cover cursor-pointer ${
            zoomedCountry === row ? 'transform scale-150' : ''
          }`}
          src={row.flag}
          alt={row.name}
          onClick={() => toggleZoom(row)}
        />
      ),
    },
  ];

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    const result = profile.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search]);

  const handleViewChange = (newView) => {
    setView(newView);
    setCurrentPage(0); // Reset current page to the first page
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterCountries.slice(indexOfFirstItem, indexOfLastItem);

  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#96afbfe0', // Set your desired blue color here
        color: '#ffffff', // Set the text color
        
        fontSize: '1rem',
      },
    },
    // ... (other styles you may want to customize)
  };


  return (
    <div className="mt-20 bg-blue-50 h-screen p-2 ">
      <div className="flex justify-between mb-4  flex-col md:flex-row gap-3 ">
        <div>
          <button
            className={`m-2 text-white text-md font-semibold bg-sky-500 p-2 rounded-md shadow-lg`}
            onClick={() => handleViewChange("table")}
          >
            Table View
          </button>
          <button
            className={`m-2 text-white text-md font-semibold bg-sky-500 p-2 rounded-md shadow-lg`}
            onClick={() => handleViewChange("grid")}
          >
            Grid View
          </button>
        </div>
        <input
          type="text"
          placeholder="Search here..."
          className="w-2/4 sm:w-1/4 form-control border px-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {view === "table" ? (
        <DataTable
          columns={smallFlagColumns}
          data={filterCountries}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[ 5,9, 18, 27, 36]}
          paginationComponentOptions={paginationOptions}
          fixedHeader
          fixedHeaderScrollHeight="450px"
          highlightOnHover
          responsive
          filter 
          customStyles={customStyles}
        />
      ) : (
        <div>
          <div className=" card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {currentItems.map((country) => (
              <div
                key={country.name}
                className="bg-gray-100 p-2 rounded-md shadow-lg flex flex-col items-center mb-4"
              >
                <div
                  className={`relative w-full h-full mb-2 ${
                    zoomedCountry === country ? ' fixed top-0 left-0' : ''
                  }`}
                >
                  <img
                    className={`w-full h-full object-cover cursor-pointer ${
                      zoomedCountry === country ? 'transform scale-150' : ''
                    }`}
                    src={country.flag}
                    alt={country.name}
                    onClick={() => toggleZoom(country)}
                  />
                  <h2
                    className={`absolute bottom-0 left-0 text-white text-lg font-semibold p-4 bg-black bg-opacity-50 w-full ${
                      zoomedCountry === country ? '' : ''
                    }`}
                    onClick={() => toggleZoom(country)}
                  >
                    {country.name}
                  </h2>
                  {zoomedCountry === country && (
                    <button
                      className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer"
                      onClick={() => toggleZoom(country)}
                    >
                      X
                    </button>
                  )}
                </div>
                <p className="text-gray-800">{country.nativeName}</p>
                <p className="text-gray-800">{country.capital}</p>
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(filterCountries.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            containerClassName={"flex justify-center mt-6 mx-1 text-sm p-4 m-2 sm:p-6 sm:m-3 md:p-8 md:m-4 lg:p-10 lg:m-6 xl:p-12 xl:m-8"}
            previousClassName={"m-2 text-white text-md font-semibold bg-sky-500 p-2 rounded-md shadow-lg"}
            nextClassName={"m-2 text-white text-md font-semibold bg-sky-500 p-2 rounded-md shadow-lg"}
            pageClassName={" md:mx-2 "}
            activeClassName={"bg-gray-500 text-white p-2 rounded-xxl m-2"}
          />
        </div>
      )}
    </div>
  );
}

export default Profile;
