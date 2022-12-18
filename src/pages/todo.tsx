/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function TodoPage() {
  const [state, setState] = useState<string>("");

  const onChange = (e: any) => {
    setState(e.target.value);
  };

  return (
    <Wrapper>
      <input css={inputCss} value={state} onChange={onChange}></input>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const inputCss = css`
  border: 2px solid #000;
  border-radius: 5px;
  height: 35px;
  width: 200px;
`;

export default TodoPage;
