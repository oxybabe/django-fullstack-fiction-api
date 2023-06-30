// import React from "react";
// import Homescreen from "./Homescreen";
// const DeleteBook = ({ id }) => {
//   const deleteData = async () => {
//     let bookId;
//     for (let i = 0; i < data.length; i++) {
//       bookId = data[i].id;
//       console.log(bookId);
//     }
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/books/${bookId}/`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id }),
//       });

//       if (response.ok) {
//         console.log("Book deleted!");
//       } else {
//         console.log("Failed to delete book");
//       }
//     } catch (error) {
//       // Error occurred during the deletion process
//       console.log("An error occurred while deleting the book:", error);
//     }
//   };

//   return <button onClick={deleteData}>Delete Book</button>;
// };

// export default DeleteBook;

// //https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376
