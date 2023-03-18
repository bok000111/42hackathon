import styled from "@emotion/styled";

const circleInfo = {
  "Circle 0": ["Libft"],
  "Circle 1": ["ft_printf", "get_next_line", "Born2beroot"],
  "Circle 2": ["so_long", "FdF", "fract-ol", "minitalk", "pipex", "push_swap"],
  "Circle 3": ["Philosophers", "minishell"],
  "Circle 4": [
    "miniRT",
    "cub3d",
    "NetPractice",
    "CPP 00",
    "CPP 01",
    "CPP 02",
    "CPP 03",
    "CPP 04",
  ],
  "Circle 5": [
    "Inception",
    "ft_irc",
    "webserv",
    "CPP 05",
    "CPP 06",
    "CPP 07",
    "CPP 08",
    "CPP 09",
  ],
  "Circle 6": ["ft_transcendence"],
};

const list = [
  "ALL",
  "Circle 0",
  "Circle 1",
  "Circle 2",
  "Circle 3",
  "Circle 4",
  "Circle 5",
  "Circle 6",
];

const Filter = () => {
  return (
    <FilterContainer>
      {list.map((str) => (
        <FilterElement>{str}</FilterElement>
      ))}
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <Input id="search" type="text" maxLength={15} />
    </FilterContainer>
  );
};

const Input = styled.input`
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background: var(--main-color);
  padding-left: 10px;
  color: white;
`;
const SearchIcon = styled.div`
  background-image: url("/assets/SearchIcon.png");
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const FilterContainer = styled.div`
  width: 98%;
  border-radius: 10px;
  height: 50px;
  background: var(--lightgray-color);
  margin-top: 15px;
  display: flex;
  align-items: center;
  position: relative;
`;

const FilterElement = styled.div`
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  background: var(--main-color);
  border: 1px solid var(--main-color);
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
`;

export default Filter;
