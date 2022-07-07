import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const wrapper = css`
  ${"" /* background: linear-gradient(#e0dfdd 50%, #212529 50%); */}
  background-color: #212529;
`;

export const bigText = css`
  font-size: 9vw;
  color: #e0dfdd;
  ${"" /* text-shadow: 0 0 3px #e0dfdd; */}
`;

export const Neumorphism = styled.div`
  border-radius: 25px;
  background: #212529;
  box-shadow: 22px 22px 46px #1a1d20, -22px -22px 46px #282d32;
`;
