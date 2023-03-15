import styled from "@emotion/styled";

interface IMentorInfo {
  intra: string;
  level: number;
  rating: number;
  subjects: string[];
  image?: string | undefined;
  coalition: string;
}

const data: IMentorInfo[] = [
  {
    intra: "yooh",
    level: 7.54,
    rating: 1250,
    subjects: ["push_swap+", "CPP", "so_long"],
    coalition: "gun",
  },
  {
    intra: "jbok",
    level: 4.35,
    rating: 1195,
    subjects: ["philosopher", "libft", "fract-ol"],
    coalition: "gon",
  },
  {
    intra: "yeckim",
    level: 3.95,
    rating: 1135,
    subjects: ["minishell, born_to_beroot"],
    coalition: "gam",
  },
  {
    intra: "jpark2",
    level: 6.95,
    rating: 1335,
    subjects: ["minishell+, mini_rt+, ft_container+"],
    coalition: "lee",
  },
];

const MentorList = () => {
  return <MentorListContainer>MentorList</MentorListContainer>;
};

const MentorListContainer = styled.div`
  width: 100%;
  height: 510px;
  background: var(--lightgray-color);
  margin-top: 30px;
  border-top-left-radius: 20px;
  box-shadow: 0px 0px 200px 5px rgba(0, 0, 0, 0.33);
`;

export default MentorList;
