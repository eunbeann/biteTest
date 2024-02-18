import React from "react";
import Item from "./Item";

function List({ dataList }) {
  const renderItems = (category) => {
    const filteredItems = dataList.filter((item) => item.category === category);
    return (
      <div className="AddressItem">
        <div className="info">
          <span className="name_info"> {category} </span>
        </div>
        {filteredItems.map((item) => (
          <Item key={`DataList${item.id}`} {...item} />
        ))}
      </div>
    );
  };

  return (
    <div className="AddressList">
      <h2> 주소록 </h2>
      <h4> 전체: {dataList.length}</h4>
      {["회사", "가족", "친구", "기타"].map((category, index) => (
        <div key={index}>{renderItems(category)}</div>
      ))}
    </div>
  );
}

List.defaultProps = {
  dataList: [],
};

export default List;
