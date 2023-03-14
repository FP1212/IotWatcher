import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import ModelInertial3D from "Components/dashboard/subitem/modelInertial3D";

const Viewer3D = (props) => {
  const data = props.data;

  return (
    //"#C4C4C4"
    <Box sx={{ width: "90%", height: "90%", color: "#C4C4C4" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} />

        <Suspense fallback={null}>
          <ModelInertial3D {...props} data={data} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Viewer3D;
