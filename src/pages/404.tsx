/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Page404() {
  return (
    <div css={wrapperCss}>
      <h1 css={errorTextCss}>404</h1>
      <p>oops!!</p>
    </div>
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const errorTextCss = css`
  font-size: 100px;
  font-family: serif;
`;

export default Page404;
