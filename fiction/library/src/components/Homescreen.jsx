import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
// import UpdateBook from "./UpdateBook";
// import DeleteBook from "./DeleteBook";

const Homescreen = () => {
  const [data, setData] = useState([]);
  const [addBookForm, setAddBookForm] = useState(false);
  const [updateBookForm, setUpdateBookForm] = useState(false);

  async function postJSON(bookData) {
    const response = await fetch("http://localhost:8000/books/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      fetchData();
    } else {
      console.error("Error:", error);
    }
  }
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/books/");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddBook = async (data) => {
    await postJSON(data);
    setAddBookForm(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/books/");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const DeleteBook = ({ id }) => {
    const deleteData = async () => {
      let bookId;
      for (let i = 0; i < data.length; i++) {
        bookId = data[i].id;
        console.log(bookId);
      }
      try {
        const response = await fetch(`http://127.0.0.1:8000/books/${bookId}/`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
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

  const handleUpdateBook = async (bookData) => {
    // const url = `http://localhost:8000/books/${bookId}/`;
    // const title = { key: title };
    // const description = { key: description };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/books/update/${bookData.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      if (response.ok) {
        console.log("Book updated!");
      } else {
        console.log("Failed to update book");
      }
    } catch (error) {
      console.log("An error occurred while updating book:", error);
    }
    // return <button onClick={handleUpdateBook}>Edit Book</button>;
  };

  return (
    <div>
      {/*Display fetched data*/}

      {data.map((book) => (
        <div key={book.id}>
          <div>Title: {book.title}</div>
          <div>Description: {book.description}</div>
          <DeleteBook handleDeleteBook={book.id} />
          {updateBookForm ? (
            <UpdateBook book={book} handleUpdateBook={handleUpdateBook} />
          ) : (
            <button onClick={() => setUpdateBookForm(true)}>Edit Book</button>
          )}
        </div>
      ))}
      {addBookForm ? (
        <AddBook handleAddBook={handleAddBook} />
      ) : (
        <button onClick={() => setAddBookForm(true)}>Add Book</button>
      )}
    </div>
  );
};

export default Homescreen;
