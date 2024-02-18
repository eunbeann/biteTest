import React, { useState, useRef } from "react";

function New({ onCreate }) {
  const nameInput = useRef();
  const phoneNumberInput = useRef();

  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    category: "가족",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.name.length < 1) {
      nameInput.current.focus();
      return;
    }

    if (state.phoneNumber.replace(/\D/g, "").length < 5) {
      alert("전화번호는 숫자로 최소 5자 이상 입력해주세요.");
      phoneNumberInput.current.focus();
      return;
    }

    onCreate(state.name, state.phoneNumber, state.category);
    alert("저장 성공");
    setState({
      name: "",
      phoneNumber: "",
      category: "가족",
    });
  };

  return (
    <div className="NewAddress">
      <div>
        <span>카테고리 </span>
        <select
          name="category"
          value={state.category}
          onChange={handleChangeState}
        >
          <option value="가족">가족</option>
          <option value="친구">친구</option>
          <option value="회사">회사</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div>
        <span>이름 : </span>
        <input
          name="name"
          ref={nameInput}
          value={state.name}
          onChange={handleChangeState}
          placeholder="김구름"
          type="text"
        />
      </div>
      <div>
        <span>전화번호 : </span>
        <input
          name="phoneNumber"
          ref={phoneNumberInput}
          value={state.phoneNumber}
          onChange={handleChangeState}
          placeholder="01012345678"
          maxLength="11"
          type="tel"
        />
      </div>
      <button onClick={handleSubmit}> 저장 </button>
    </div>
  );
}

export default New;
