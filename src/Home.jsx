import React, { useState, useRef, useEffect } from "react";
import New from "./New";
import List from "./List";

function Home() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataList"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const onCreate = (name, phoneNumber, category) => {
    const newItem = {
      name,
      phoneNumber,
      category,
      id: dataId.current,
    };

    setData((prevData) => {
      const updatedData = [newItem, ...prevData];
      localStorage.setItem("dataList", JSON.stringify(updatedData));
      return updatedData;
    });

    dataId.current += 1;
  };

  return (
    <>
      <h1> 내 주소록 </h1>
      <div className="homeWrapper">
        <New onCreate={onCreate} />
        <List dataList={data} />
      </div>
    </>
  );
}

export default Home;
