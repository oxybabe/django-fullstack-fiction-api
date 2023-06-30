import React from "react";

const handlePutRequest = async () => {
  const url = "http://localhost:8000/books/${bookId}";
  const title = { key: book.title };
  const description = { key: book.description };

  try {
    const response = await fetch(`http://127.0.0.1:8000/books/${bookId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      console.log("Book updated!");
    } else {
      console.log("Failed to update book");
    }
  } catch (error) {
    console.log("An error occurred while updating book:", error);
  }
};
