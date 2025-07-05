import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const Homesrc = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#14AE5C"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14 6.667c0 4.666-6 8.666-6 8.666s-6-4-6-8.666a6 6 0 1 1 12 0" />
      <Path d="M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Homesrc;
