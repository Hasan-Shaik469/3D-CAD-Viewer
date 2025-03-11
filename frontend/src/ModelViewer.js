// import React, { Suspense } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import * as THREE from "three";

// const Model = ({ filename }) => {
//   const extension = filename.split(".").pop().toLowerCase();
//   const url = `http://localhost:5000/models/${filename}`;
//   const geometry = useLoader(extension === "stl" ? STLLoader : OBJLoader, url);

//   return (
//     <mesh>
//       {extension === "stl" ? (
//         <primitive object={new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: "gray" }))} />
//       ) : (
//         <primitive object={geometry} />
//       )}
//     </mesh>
//   );
// };

// const ModelViewer = ({ filename, onBack }) => {
//   return (
//     <div className="full-screen">
//      <button className="back-btn" onClick={() => onBack()}>⬅ Back</button>
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} />
//         <Suspense fallback={null}>
//           <Model filename={filename} />
//         </Suspense>
//         <OrbitControls enablesPan={true} enableZoom={true} enableRotate={true}/>
//       </Canvas>
//     </div>
//   );
// };


// export default ModelViewer;

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const Model = ({ filename }) => {
  const extension = filename.split(".").pop().toLowerCase();
  const url = `http://localhost:5000/models/${filename}`;
  
  let geometry, model;
  if (extension === "stl") {
    geometry = useLoader(STLLoader, url);
    model = <primitive object={new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: "gray" }))} />;
  } else {
    model = <primitive object={useLoader(OBJLoader, url)} />;
  }

  return <mesh>{model}</mesh>;
};

const ModelViewer = ({ filename, onBack }) => {
  return (
    <div className="full-screen">
      <button className="back-btn" onClick={() => onBack()}>⬅ Back</button>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model filename={filename} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
