import React from "react";

const DeleteBook = ({ handleDeleteBook }) => {
  const deleteData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/books/1/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1 }),
      });

      if (response.ok) {
        console.log("Book deleted!");
      } else {
        console.log("Failed to delete book");
      }
    } catch (error) {
      // Error occurred during the deletion process
      console.log("An error occurred while deleting the book:", error);
    }
  };

  return <button onClick={deleteData}>Delete Book</button>;
};

export default DeleteBook;

//https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376

// const deleteBook ={ id: 1}
// fetch("http://127.0.0.1:8000/books/1/", {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(deleteBook)
// })
// .then(response => {
//     return response.json( )
// })
// .then(data =>
//     // this is the data we get after doing the delete request, do whatever you want with this data
//     console.log(data)
// );
