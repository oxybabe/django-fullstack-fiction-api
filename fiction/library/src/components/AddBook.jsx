import React, { useState } from "react";

export default function AddBook({ handleAddBook }) {
  const [bookData, setBookData] = useState({
    book_title: "",
    book_author: "",
    book_description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //creates a new object by spreading the properties of prevState and then adding the [name] property with the value obtained from the input field
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddBook(bookData);
    setBookData({
      book_title: "",
      book_author: "",
      book_description: "",
    });
    // resets the form after submitting
  };
  return (
    <>
      <div>AddBook</div>
      <form onSubmit={handleFormSubmit}>
        Book Title{" "}
        <input
          type="text"
          name="book_title"
          value={bookData.book_title}
          onChange={handleInputChange}
        />
        Author{" "}
        <input
          type="text"
          name="book_author"
          value={bookData.book_author}
          onChange={handleInputChange}
        />
        Description{" "}
        <input
          type="text"
          name="book_description"
          value={bookData.book_description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
