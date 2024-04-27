import { useState, useRef } from "react";
import Result from "./Result";

const Body = () => {
  const searchBar = useRef();
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isFeching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const fetchData = async () => {
    if (!searchBar.current.value) {
        setIsError(true)
        setErrorMessage("Please enter something to search")
        return
    }
    setIsFetching(true)
    const response = await fetch(
      `${process.env.REACT_APP_WEATHER_API}?q=${searchBar.current.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const fetchedData = await response.json();
    if (fetchedData.cod === 200) {
      setIsError(false);
      setErrorMessage(undefined);
      setData(fetchedData);
      searchBar.current.value = ""
    } else {
      setIsError(true);
      setErrorMessage(fetchedData.message);
    }
    setIsFetching(false)
  };
  return (
    <div className="my-5">
      <div className="m-4 flex gap-2 justify-center items-center">
        <input
          ref={searchBar}
          className="pl-2 pr-4 h-10 w-80 break-words border-2 border-solid border-gray-700 rounded-lg"
          type="text"
          id="search-bar"
          placeholder="Search city name..."
        />
        <span className="cursor-pointer" onClick={fetchData}>
          🔍
        </span>
      </div>
      <div className="flex justify-center">{isFeching ? <span>Fetching...</span> : isError ? <h2 className="text-red-700">❌{errorMessage}</h2> : data ? <Result data={data}/> : <span>Start exploring...</span>}</div>
    </div>
  );
};

export default Body;