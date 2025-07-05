import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const journalmic = props => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 14.5a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 11.5v-6q0-1.25.875-2.125A2.9 2.9 0 0 1 12 2.5q1.25 0 2.125.875T15 5.5v6q0 1.25-.875 2.125A2.9 2.9 0 0 1 12 14.5m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11.5h2q0 2.075 1.463 3.537Q9.926 16.5 12 16.5q2.075 0 3.537-1.463Q17 13.575 17 11.5h2q0 2.625-1.7 4.6T13 18.425V21.5zm1-9q.424 0 .713-.287A.97.97 0 0 0 13 11.5v-6a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 4.5a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 5.5v6q0 .424.287.713.288.287.713.287"
      fill="#14AE5C"
    />
  </Svg>
);
export default journalmic;
