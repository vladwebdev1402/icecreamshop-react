import React, { useState } from "react";
import HiddenBlock from "../ui/HiddenBlock/HiddenBlock";
import Input from "../ui/input/Input/Input";
import st from "./Header.module.scss";
const Search = () => {
  const [value, setValue] = useState("");
  return (
    <HiddenBlock
      st__head__active={st.btn_search_active}
      st__btn={st.btn_search}
      blockChild={
        <>
          <Input
            className={st.input__search}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
            }}
            placeholder="Крем-брюле"
          />
        </>
      }
      headChild={
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 14.6652L11.0785 9.73294C11.9827 8.48188 12.3826 6.93501 12.1984 5.40134C12.0141 3.86767 11.2594 2.4601 10.0848 1.45982C8.91022 0.45954 7.40233 -0.0598191 5.86234 0.00548954C4.32234 0.0707982 2.86363 0.715967 1.77757 1.81212C0.691516 2.90827 0.0580813 4.3747 0.0038002 5.91849C-0.050481 7.46228 0.478388 8.96976 1.48476 10.1398C2.49113 11.3098 3.90092 12.0563 5.43251 12.2301C6.96409 12.4039 8.50472 11.9922 9.74663 11.0772L14.6586 16L16 14.6652ZM6.08152 10.3767C5.24079 10.3767 4.41895 10.1268 3.71991 9.65874C3.02087 9.19063 2.47604 8.5253 2.15431 7.74687C1.83258 6.96844 1.7484 6.11188 1.91241 5.28551C2.07643 4.45913 2.48128 3.70006 3.07576 3.10427C3.67024 2.50849 4.42766 2.10276 5.25223 1.93838C6.0768 1.77401 6.93149 1.85837 7.70822 2.1808C8.48495 2.50324 9.14883 3.04927 9.61591 3.74983C10.083 4.4504 10.3323 5.27404 10.3323 6.11661C10.3298 7.24568 9.88115 8.3278 9.08451 9.12618C8.28788 9.92456 7.20813 10.3742 6.08152 10.3767Z"
            fill="white"
          />
        </svg>
      }
    />
  );
};

export default Search;
