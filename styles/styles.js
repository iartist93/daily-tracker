import styled, { css } from '@emotion/native';

import { blue, purple } from '../utils/colors';

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

export const Card = styled.View`
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`;

export const DateHeader = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: black;
  margin-bottom: 15px;
  color: ${purple};
`;
