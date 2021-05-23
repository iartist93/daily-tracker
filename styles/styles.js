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

/**
 * TODO: Convert to typescrip component
 * Display contnet in row
 *
 * Options : `alignCenter`, `justifyCenter`, `justifySpace`, `fullwidth`
 */
export const Row = styled.View`
  flex-direction: row;

  ${(props) => props.alignCenter && alignCenteredMixin}
  ${(props) => props.justifyCenter && justifyCenteredMixin}
  ${(props) => props.justifySpace && justifySpace}
  ${(props) => props.fullwidth && fullwidthMixin}
`;

/**
 * Center the content vertically and horizontally
 */
export const Centered = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;
