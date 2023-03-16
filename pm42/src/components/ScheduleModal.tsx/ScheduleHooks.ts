export function getDayInfoList() {
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

export const getTimeStamp = (monday: Date, min: number) => {
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

export const checkTimeOver = (time: Date) => {
  const now = new Date().getTime();
  return Math.floor((now - time.getTime()) / 1000 / 60) <= -15;
};

export const createDateInfo = (mon: Date, idx: number) => {
  const temp = new Date(mon);
  temp.setMinutes(idx * 15);
  return temp;
};

export const getMonday = () => {
  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1
  );

  return monday;
};

export const getWeekInfo = (monday: Date) => {
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
