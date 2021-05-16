import styled, { css } from "@emotion/native";

const centeredMixin = css`
  justify-content: center;
  align-items: center;
`;

const fullwidthMixin = css`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;

  ${(props) => props.centered && centeredMixin}/* ${(props) =>
    props.fullwidth && fullwidthMixin} */
`;

export const Centered = styled.View`
  ${centeredMixin};
`;
