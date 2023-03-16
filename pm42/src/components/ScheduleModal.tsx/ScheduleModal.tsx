import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Select from "./Select";

const getMonday = () => {
  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1
  );

  return monday;
};

const getWeekInfo = (monday: Date) => {
  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);

  const months = [
    "Jan", // January
    "Feb", // February
    "Mar", // March
    "Apr", // April
    "May", // May
    "Jun", // June
    "Jul", // July
    "Aug", // August
    "Sep", // September
    "Oct", // October
    "Nov", // November
    "Dec", // December
  ];
  return `${months[monday.getMonth()]} ${monday.getDate()} ~ ${
    monday.getMonth() !== sunday.getMonth() ? months[sunday.getMonth()] : ""
  } ${sunday.getDate()}, ${monday.getFullYear()}`;
};

function getDayInfoList() {
  const DayInfoList = new Array(9).fill("");
  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1
  );
  const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 1; i <= 7; i++) {
    DayInfoList[i] = `${Days[i - 1]} ${monday.getMonth() + 1}/${
      monday.getDate() + i - 1
    }`;
  }
  return DayInfoList;
}

const getTimeInfo = (monday: Date) =>
  new Array(96).fill(0).map((_, idx) => ({
    mon: monday,
    min: idx * 15,
  }));

const getTimeStamp = (monday: Date, min: number) => {
  const temp = new Date(monday);
  temp.setMinutes(min);
  const h = temp.getHours(),
    m = temp.getMinutes();

  return m % 60 === 0
    ? `${h % 12 === 0 ? 12 : h % 12} : ${m ? m : "0" + m} ${
        h < 12 ? "AM" : "PM"
      }`
    : "";
};

const checkTimeOver = (time: Date) => {
  const now = new Date().getTime();
  return Math.floor((now - time.getTime()) / 1000 / 60) <= -15;
};

const createDateInfo = (mon: Date, day: number, min: number) => {
  const temp = new Date(mon);
  temp.setDate(temp.getDate() + day);
  temp.setMinutes(min);
  return temp;
};

const ScheduleModal = () => {
  const ref = useRef();
  const [start, setStart] = useState<number>(-1);
  const [end, setEnd] = useState<number>(-1);

  const onClickTimeBlock = (e: any) => {
    if (
      e.currentTarget.classList.contains("disabled") ||
      e.currentTarget.classList.contains("active")
    ) {
      console.log("disabled");
      return;
    }
    if (start === -1) {
      setStart(e.currentTarget.dataset.blockNumber);
      e.currentTarget.classList.add("active");
      return;
    }
    const num = e.currentTarget.dataset.blockNumber;
    let i = Math.min(num, start),
      j = Math.max(num, start);
    console.log(ref.current);
    const targert = ref.current as unknown as HTMLElement;
    targert.childNodes.forEach((node) => {
      const t = node as HTMLElement;
      console.log(t);
      if (
        i <= Number(t.dataset.blockNumber && Number(t.dataset.blockNumber) <= j)
      ) {
        t.classList.add("active");
      }
    });
  };

  return (
    <ScheduleModalContainer>
      <InfoContainer>
        <WeekInfo>{getWeekInfo(getMonday())}</WeekInfo>
        <ButtonContainer>
          <MemberIcon />
          <Select />
          <ConfirmButton>Confirm</ConfirmButton>
        </ButtonContainer>
      </InfoContainer>
      <CalendarContainer>
        <DayInfoContainer>
          {getDayInfoList().map((info, idx) => (
            <DayInfo key={idx}>{info}</DayInfo>
          ))}
        </DayInfoContainer>
        <TimeInfoContainer ref={ref}>
          {getTimeInfo(getMonday()).map(({ mon, min }, i) => (
            <TimeInfo>
              <TimeStamp>{getTimeStamp(mon, min)}</TimeStamp>
              {new Array(7).fill(0).map((_, idx) => {
                const time = createDateInfo(mon, idx, min);
                return (
                  <TimeStamp
                    key={idx}
                    className={checkTimeOver(time) ? "" : "disabled"}
                    data-time-stamp={time}
                    data-block-number={i + idx * 96}
                    onClick={onClickTimeBlock}
                  >
                    {i + idx * 96}
                  </TimeStamp>
                );
              })}
            </TimeInfo>
          ))}
        </TimeInfoContainer>
      </CalendarContainer>
    </ScheduleModalContainer>
  );
};

const TimeStamp = styled.div`
  width: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--gray-color);
  color: var(--main-color);
  cursor: grab;
  &.disabled {
    background: var(--lightgray-color);
    cursor: not-allowed;
  }
  &.active {
    background: var(--sub-color);
  }
`;

const TimeInfo = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  &:nth-child(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:nth-child(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const TimeInfoContainer = styled.div`
  overflow-y: scroll;
  height: 545px;
  width: 100%;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 5px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.2rem;
  font-weight: bold;
  width: 12.5%;
  &:last-of-type {
    width: 2%;
  }
`;

const DayInfoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
`;

const CalendarContainer = styled.div`
  width: 900px;
  height: 600px;
  border: 1px solid var(--main-color);
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`;

const ConfirmButton = styled.div`
  width: 110px;
  height: 45px;
  background: var(--main-color);
  border-radius: 10px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
`;

const MemberIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url("/assets/member.png");
  background-size: 100% 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const WeekInfo = styled.div`
  color: var(--main-color);
  font-size: 2.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  align-items: center;
  margin: 50px auto;
`;

const ScheduleModalContainer = styled.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  border-radius: 20px;
  left: calc(50% - 500px);
  top: calc(50% - 400px);
  background: var(--white-color);
  z-index: 3;
`;

export default ScheduleModal;
