import styled, { css } from '@emotion/native';

const alignCenteredMixin = css`
  align-items: center;
`;

const justifyCenteredMixin = css`
  justify-content: center;
`;

const justifySpace = css`
  justify-content: space-between;
`;

const fullwidthMixin = css`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;

  ${(props) => props.alignCenter && alignCenteredMixin}
  ${(props) => props.justifyCenter && justifyCenteredMixin}
  ${(props) => props.justifySpace && justifySpace}
  ${(props) => props.fullwidth && fullwidthMixin}
`;

export const Centered = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
