import { useState } from "react";
import React from "react";

export default function UpdateBook({ book, handleUpdateBook }) {
  const [bookData, setBookData] = useState(book);
  const editFormSubmit = (e) => {
    // const { name, value } = e.target;
    // setBookData((editedBook) => ({
    //   ...editedBook,
    //   [name]: value,
    // }));
    e.preventDefault();
    handleUpdateBook(bookData);
    setBookData({
      id: "",
      title: "",
      author: "",
      description: "",
    });
    // resets the form after submitting
  };
  return (
    <>
      <div>Edit Book</div>
      <form onSubmit={editFormSubmit}>
        Book Title{" "}
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
        />
        {/* Author{" "}
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
        Description{" "}
        <input
          type="text"
          name="description"
          value={bookData.description}
          onChange={handleInputChange}
        /> */}
        <button type="submit">Submit Change</button>
      </form>
    </>
  );
}
