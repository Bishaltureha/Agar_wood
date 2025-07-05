import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const supportlocation = props => (
  <Svg
    width={12}
    height={14}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.25 5.833c0 4.084-5.25 7.584-5.25 7.584S.75 9.917.75 5.833a5.25 5.25 0 1 1 10.5 0"
      stroke="#666E6A"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 7.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      stroke="#666E6A"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default supportlocation;
