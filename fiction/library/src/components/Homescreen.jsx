import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";

const Homescreen = () => {
  const [data, setData] = useState([]);
  const [addBookForm, setAddBookForm] = useState(false);

  async function postJSON(data) {
    const response = await fetch("http://127.0.0.1:8000/books/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
      const response = await response.json("http://127.0.0.1:8000/books/");
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
  return (
    <div>
      {/*Display fetched data*/}

      {data.map((item) => (
        <>
          <div key={item.id}>{item.title}</div>
        </>
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