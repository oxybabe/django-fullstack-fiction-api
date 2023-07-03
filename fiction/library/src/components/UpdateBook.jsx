import { useState } from "react";
import React from "react";

export default function UpdateBook({ book, handleUpdateBook }) {
  const [bookData, setBookData] = useState(book);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //creates a new object by spreading the properties of prevState and then adding the [name] property with the value obtained from the input field
  };
  const editFormSubmit = (e) => {
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
          onChange={handleInputChange}
        />
        Author{" "}
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
        />
        <button type="submit">Submit Change</button>
      </form>
    </>
  );
}
