import styled, { css } from "@emotion/native";

const centeredMixin = css`
  align-items: center;
`;

const spacedMixin = css`
  justify-content: space-between;
`;

const fullwidthMixin = css`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;

  ${(props) => props.centered && centeredMixin}
  ${(props) => props.fullwidth && fullwidthMixin}
  ${(props) => props.spaced && spacedMixin}
`;

export const Centered = styled.View`
  ${centeredMixin};
`;
