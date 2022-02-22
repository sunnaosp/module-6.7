// e.g. ~/pages/slice-simulator.jsx
import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../.slicemachine/libraries-state.json";

import * as Slices from "../slices";
const resolver = ({ sliceName }) =>{
	var k = Slices[sliceName]
	console.log(k);
return k;
}

const SliceSimulatorPage = () => (<SliceSimulator
	// The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
	sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
	state={state}
/>);

export default SliceSimulatorPage;