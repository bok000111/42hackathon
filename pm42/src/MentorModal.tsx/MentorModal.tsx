import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import MentorLeftSide from "./MentorLeftSide";
import MentorRightSide from "./MentorRightSide";

const subjectData = [
  { name: "Inception", final_mark: 100, marked_at: "2023-02-18T08:25:04.276Z" },
  { name: "ft_irc", final_mark: 98, marked_at: "2023-02-09T06:10:33.924Z" },
  {
    name: "CPP Module 01",
    final_mark: 97,
    marked_at: "2023-01-19T08:55:00.092Z",
  },
  {
    name: "CPP Module 08",
    final_mark: 100,
    marked_at: "2023-01-26T05:23:31.510Z",
  },
  {
    name: "CPP Module 07",
    final_mark: 100,
    marked_at: "2023-01-26T01:50:35.028Z",
  },
  {
    name: "CPP Module 06",
    final_mark: 100,
    marked_at: "2023-01-25T12:17:11.621Z",
  },
  {
    name: "CPP Module 05",
    final_mark: 100,
    marked_at: "2023-01-25T08:47:52.772Z",
  },
  {
    name: "CPP Module 04",
    final_mark: 100,
    marked_at: "2023-01-25T05:30:07.817Z",
  },
  {
    name: "CPP Module 03",
    final_mark: 100,
    marked_at: "2023-01-24T10:54:25.706Z",
  },
  {
    name: "CPP Module 02",
    final_mark: 100,
    marked_at: "2023-01-24T06:58:55.787Z",
  },
  { name: "cub3d", final_mark: 105, marked_at: "2023-01-18T06:03:48.122Z" },
  {
    name: "CPP Module 00",
    final_mark: 100,
    marked_at: "2023-01-18T02:29:10.062Z",
  },
  {
    name: "NetPractice",
    final_mark: 100,
    marked_at: "2023-01-16T08:22:38.069Z",
  },
  { name: "minishell", final_mark: 101, marked_at: "2023-01-15T06:32:25.654Z" },
  {
    name: "Philosophers",
    final_mark: 100,
    marked_at: "2023-01-13T04:36:44.052Z",
  },
  { name: "push_swap", final_mark: 125, marked_at: "2022-12-29T05:14:32.907Z" },
  { name: "pipex", final_mark: 125, marked_at: "2022-12-14T06:25:36.696Z" },
  { name: "so_long", final_mark: 125, marked_at: "2022-12-07T03:14:34.260Z" },
  {
    name: "Born2beroot",
    final_mark: 125,
    marked_at: "2022-12-01T14:33:01.679Z",
  },
  {
    name: "get_next_line",
    final_mark: 125,
    marked_at: "2022-11-28T02:29:06.451Z",
  },
  { name: "ft_printf", final_mark: 100, marked_at: "2022-11-22T01:54:40.422Z" },
  { name: "Libft", final_mark: 125, marked_at: "2022-11-18T05:21:53.003Z" },
];

const convertDate = (str: string) => {
  const time = new Date(str);
  return `${time.getFullYear() % 100}.${
    time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1
  }.${time.getDate() < 10 ? "0" + time.getDate() : time.getDate()}`;
};

const timeData = subjectData.map((el) => ({
  date: convertDate(el.marked_at),
  subject: el.name,
  max: Math.floor(Math.random() * 4 + 1),
  time: "14:00~16:00",
}));

const MentorModal = () => {
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/me/?token=" + localStorage.getItem("token")
      )
      .then((res) => {
        console.log(res);
        console.log(JSON.stringify(res.data.projects));
      });
  }, []);
  return (
    <MentorModalContainer>
      <Container>
        <MentorLeftSide data={subjectData} />
      </Container>
      <Container>
        <MentorRightSide data={timeData} />
      </Container>
      <Line />
    </MentorModalContainer>
  );
};

const Line = styled.div`
  position: absolute;
  border-right: 1px solid var(--main-color);
  width: 1px;
  height: 81%;
  left: 40%;
  top: 15%;
`;

const Container = styled.div`
  height: 100%;
  padding-left: 25px;
  &:first-child {
    width: 40%;
  }
  &:last-child {
    width: 60%;
  }
`;

const MentorModalContainer = styled.div`
  width: 1000px;
  height: 700px;
  background: var(--white-color);
  border-radius: 20px;
  position: fixed;
  left: calc(50% - 500px);
  top: calc(50% - 350px);
  z-index: 2;
  overflow: hidden;
  display: flex;
`;

export default MentorModal;
