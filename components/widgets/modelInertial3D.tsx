import React, { useRef } from "react";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const deg2rad = (degrees) => degrees * (Math.PI / 180);

const inRange = (value, min, max, center) => {
  const val = parseInt(value);

  if (val >= min && val <= max) {
    if (val > 0) return val + center;
    else return val + center;
  } else if (val < min) return min;
  else return max;
};

const ModelInertial3D = (props) => {
  const { url, data } = props;

  const geom = useLoader(STLLoader, url);
  const ref = useRef();

  useFrame((state, delta, xrFrame) => {
    ref.current.rotation.set(
      // deg2rad(inRange(pitch, -90, 90, 45)),
      // deg2rad(135), // Heading fijo para mantener la orientacion del 3D
      // deg2rad(inRange(roll, -90, 90, 0))

      deg2rad(inRange(data.pitch, -135, 45, -45)), //
      deg2rad(inRange(data.roll, -90, 90, 0)),
      -180
    ); // Z= Roll Y=Heading X=Pitch
    ref.current.scale.set(0.06, 0.06, 0.06);
    //ref.current.scale.set(0.000375, 0.00035, 0.00035);
  });

  return (
    <React.Fragment>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial attach="material" color={"#333"} />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </React.Fragment>
  );
};

export default ModelInertial3D;
