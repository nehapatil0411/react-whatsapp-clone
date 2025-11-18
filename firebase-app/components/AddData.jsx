import React, { useEffect, useState } from "react";
import { store } from "../firebase";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";

export default function AddData() {
  const [bookList, setBookList] = useState([]);

  const handleInput = () => {
    addDoc(collection(store, "books"), {
      title: "The Secret Part 2",
      price: 899.9,
      author: "Rhonda Byrne",
      createdAt: Timestamp.now(),
    })
      .then((result) => alert("book added successfully !!"))
      .catch((err) => alert("input failed !", err));
  };

  const handleReadBooks = async () => {
    const querySnapshot = await getDocs(collection(store, "books"));
    let res = querySnapshot.docs.map((doc) => doc.data());
    setBookList(res);
  };

  useEffect(() => {
    handleReadBooks();
  }, []);

  return (
    <div>
      {bookList.map((book, index) => (
        <p key={index}>{book.title}</p>
      ))}
      <button onClick={handleInput}>Add Data</button>
    </div>
  );
}

// firebase - chat web app
