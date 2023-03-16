import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { axiosGetAllSlots, getData } from "../../api/axios";
import { IMentorInfo } from "../../interface";
import MentorCard from "./MentorCard";

const data: IMentorInfo[] = [
  {
    intra: "yooh",
    level: 7.54,
    good: 1250,
    subjects: ["push_swap+", "CPP", "so_long"],
    coalition: "gun",
  },
  {
    intra: "jbok",
    level: 4.35,
    good: 1195,
    subjects: ["philosopher", "libft", "fract-ol"],
    coalition: "gon",
  },
  {
    intra: "yeckim",
    level: 3.95,
    good: 1135,
    subjects: ["minishell", "born_to_be_root"],
    coalition: "gam",
  },
  {
    intra: "jpark2",
    level: 6.95,
    good: 1335,
    subjects: ["minishell+", "mini_rt+", "ft_container+"],
    coalition: "lee",
  },
];

const MentorList = ({}: {}) => {
  useEffect(() => {
    getData(axiosGetAllSlots);
  }, []);
  return (
    <MentorListContainer>
      {data.map((info) => (
        <MentoCardContainer>
          <MentorCard info={info} />
        </MentoCardContainer>
      ))}
    </MentorListContainer>
  );
};

const MentoCardContainer = styled.div`
  width: 100%;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MentorListContainer = styled.div`
  width: 100%;
  height: 710px;
  background: var(--lightgray-color);
  margin-top: 30px;
  border-top-left-radius: 20px;
  box-shadow: 0px 0px 200px 5px rgba(0, 0, 0, 0.33);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: stretch;
`;

export default MentorList;
