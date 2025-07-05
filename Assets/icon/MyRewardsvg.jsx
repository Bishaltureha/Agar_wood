import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MyRewardsvg = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 5H5v14h14zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
      fill="#142E14"
      fillOpacity={0.62}
    />
  </Svg>
);
export default MyRewardsvg;
