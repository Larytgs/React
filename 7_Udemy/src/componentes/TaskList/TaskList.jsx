// import React from "react";

import { useState } from "react";
import Lista, { Title, Content } from "./style";

export default function TaskList({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  return (
    <div className="bg-[#2C084C] p-1 rounded-md">
      <Lista>
        <Title>{title}</Title>
        <Content>
          {count}
          <button className="bg-white rounded-md" onClick={increment}>
            Incrementar
          </button>
        </Content>
      </Lista>
    </div>
  );
}
