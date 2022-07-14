import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const wrapper = css`
  background-color: #212529;
  color: #e0dfdd;
`;

export const Neumorphism = styled.div`
  border-radius: 50px;
  background: #e0dfdd;
  box-shadow: 38px 38px 76px #9d9c9b, -38px -38px 76px #ffffff;
`;

export const bigText = css`
  font-size: 9vw;
`;

export const socialLinks = css`
  & > a {
    text-decoration: none;
    color: #e0dfdd;
    border: 3px solid transparent;
    border-top: 3px solid #0d6efd;
    transition-duration: 0.3s;
    &:hover {
      ${"" /* background-color: #e0dfdd; */}
      ${"" /* color: #212529; */}
      border: 3px solid #e0dfdd;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
  }
`;
