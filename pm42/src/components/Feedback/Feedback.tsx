import styled from "@emotion/styled";
import React, { useState } from "react";

const data = [
  "친절하고 매너가 좋았습니다!",
  "궁금한 점이 모두 사라졌어요!",
  "설명이 귀에 쏙쏙 들어왔어요!",
  "재미있게 설명해주셨어요!",
  "다양한 지식들을 전수해주셨어요!",
];

const Feedback = () => {
  const [count, setCount] = useState([0, 0, 0, 0, 0]);
  return (
    <FeedbackContainer>
      <FeedbackHeader>Feedback</FeedbackHeader>
      <FeedbackInfo>jbok - philosopher</FeedbackInfo>
      <FeedbackInfo>23.03.17 AM 10:00 ~ 11:00</FeedbackInfo>
      {data.map((str: string, idx) => (
        <FeedbackRow
          onClick={() =>
            setCount(count.map((_, i) => (i === idx ? (_ ? 0 : 1) : _)))
          }
        >
          {idx % 2 !== 0 ? <div></div> : ""}
          <FeedbackMessage className={count[idx] ? "active" : ""}>
            {str}
          </FeedbackMessage>
          {idx % 2 === 0 ? <div></div> : ""}
        </FeedbackRow>
      ))}
      <SubmitButton>
        Submit <Thumb /> × {count.filter((el) => el).length}
      </SubmitButton>
    </FeedbackContainer>
  );
};

const FeedbackInfo = styled.div`
  width: 80%;
  font-size: 1.35rem;
  color: var(--main-color);
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: right;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const Thumb = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("/assets/thumb.png");
  background-size: 100% 100%;
  margin-left: 50px;
  margin-right: 10px;
  transition: 0.5s;
`;

const SubmitButton = styled.div`
  width: 80%;
  height: 60px;
  background: var(--main-color);
  color: var(--white-color);
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
`;

const FeedbackRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const FeedbackMessage = styled.div`
  color: var(--main-color);
  border-radius: 10px;
  border: 1px solid var(--main-color);
  padding: 15px 25px;
  cursor: pointer;
  transition: 0.5s;
  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`;

const FeedbackHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 15px;
`;

const FeedbackContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 700px;
  background: var(--white-color);
  border-radius: 10px;
  z-index: 3;
  left: calc(50% - 200px);
  top: calc(50% - 350px);
`;

export default Feedback;
