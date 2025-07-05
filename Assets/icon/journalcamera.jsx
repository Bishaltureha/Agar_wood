import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const journalcamera = props => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#14AE5C"
      strokeWidth={2.89}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M39.785 15.22a2.89 2.89 0 0 0-2.89-2.89h-5.78L26.78 6.548H15.22l-4.336 5.78h-5.78a2.89 2.89 0 0 0-2.89 2.89V32.56a2.89 2.89 0 0 0 2.89 2.89h31.791a2.89 2.89 0 0 0 2.89-2.89z" />
      <Path d="M21 28.947a6.502 6.502 0 1 0 0-13.005 6.502 6.502 0 0 0 0 13.005" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.769.769h40.462v40.462H.769z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default journalcamera;
