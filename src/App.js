import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import NewPost from "./NewPost";
import { format } from "date-fns";
import ApiRequest from "./ApiRequest";

function App() {
  //url for api fake using npm run mock-api
  const API_URL = "http://localhost:3001/posts";
  //using useState to store the data
  const [data, setData] = useState([]);

  //suing useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      //in respone fetch the data in to response using url
      const response = await fetch(API_URL);
      //change the  json file to array
      const jsonData = await response.json();
      setData(jsonData.reverse());
    };
    //call the then only it works
    fetchData();
    //given [] so it triggers useEffect when the [] state changes
  }, []);
  //search bar data store
  const [sdata, setSdata] = useState("");
  //get input from user to add post
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const id = data.length ? data[data.length - 1].id + 1 : 1;
    //get date from package while add
    const datetime = format(new Date(), "MMMM dd,yyyy,pp");
    //stores the value that got for newpost
    const newPost = { title: postTitle, datetime, body: postBody };
    const addNewPost = [...data, newPost];
    //store this on setData so it will automatically render while add
    setData(addNewPost);

    const postOption = {
      method: "POST",
      //always mention the type of file and what operation we want to done
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };
    const result = await ApiRequest(API_URL, postOption);
    console.log(result);
    //to empty the input box after submit the form
    setPostTitle("");
    setPostBody("");
  };
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const filteredResult = data.filter(
      (posts) =>
        posts.body.toLowerCase().includes(sdata.toLowerCase()) ||
        posts.title.toLowerCase().includes(sdata.toLowerCase())
    );
    setSearchResult(filteredResult);
    }, [data, sdata]);

  return (
    <div className="App">
      <Header />
      <Navbar setSdata={setSdata} sdata={sdata} />
      <Routes>
        <Route
          path="/"
          element={
            //searchResult is given here for search input
            <Home data={searchResult} setSdata={setSdata} sdata={sdata} />
          }
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/NewPost"
          element={
            <NewPost
              data={data}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
