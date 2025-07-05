import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const Homeblack = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M10.039 1.672a3 3 0 0 1 3.922 0l9.692 8.371a1 1 0 0 1-1.226 1.576l-.08-.062L21 10.394V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-8.606l-1.347 1.163a1 1 0 0 1-1.307-1.514zm2.614 1.514a1 1 0 0 0-1.306 0L5 8.666V19a2 2 0 0 0 2 2h3v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6h3a2 2 0 0 0 2-2V8.666z"
        fill="#666E6A"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Homeblack;
