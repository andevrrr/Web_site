import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import CanvasLoader from "../Loader";

const HeroObject = ({ modelPath, scale, position, rotation }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef(); // create a ref to access the mesh object

  // This will be called on every frame
  useFrame((state, delta) => {
    // Increment the x-rotation of the mesh by a small amount on each frame
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03; // You can adjust the speed by changing the multiplier
    }
  });

  // Bind the ref to the primitive object
  return (
    <primitive ref={meshRef} object={scene} scale={scale} position={position} rotation={rotation} />
  );
};

const Button = ({ position, link, imagePath, isMobile }) => {
  const buttonRef = useRef();
  const cylinderRef = useRef();
  const { camera, size } = useThree();
  const [isHovered, setIsHovered] = useState(false);

  const texture = useLoader(TextureLoader, imagePath);
  texture.flipY = false;

  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      event.preventDefault();

      // Calculate normalized device coordinates
      mouse.x = (event.clientX / size.width) * 2 - 1;
      mouse.y = -(event.clientY / size.height) * 2 + 1;

      // Update the raycaster with the mouse coordinates
      raycaster.setFromCamera(mouse, camera);

      // Check for intersection with the button
      const intersects = raycaster.intersectObject(cylinderRef.current);

      if (intersects.length > 0) {
        // Mouse is over the button
        setIsHovered(true);
      } else {
        // Mouse is not over the button
        setIsHovered(false);
      }
    };

    // Attach event listener to the canvas
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }

    // Clean up event listener
    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [camera, size, setIsHovered]);

  const handleClick = () => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (cylinderRef.current) {
      // Change scale of the cylinder on hover
      cylinderRef.current.scale.y = isHovered ? 0.5 : 1;
    }
  }, [isHovered]);

  const materials = [
    new THREE.MeshBasicMaterial({ color: "white" }), // side // top
    new THREE.MeshBasicMaterial({ color: "white" }),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true }),// bottom
  ]

  const adjustedPosition = isMobile ? [position[2] , position[1] + 1, position[2] - 0.5] : position;
  const adjustedSize = isMobile ? 0.35 : 0.5;

  return (
    <group position={adjustedPosition} ref={buttonRef} rotation={[0, 0, 2]} onClick={handleClick}>
      {/* Add your button geometry here */}
      <mesh ref={cylinderRef} material={materials}>
        <cylinderGeometry args={[adjustedSize, adjustedSize, 0.5, 32, 1, false, 0, Math.PI * 2]} />
      </mesh>
      <spotLight intensity={1} position={[0, 0, 2]} />
    </group>
  );
};

const Hero = ({ isMobile }) => {
  const objects = [
    {
      modelPath: "./space_exploration/scene.gltf",
      scale: isMobile ? 0.3 : 0.4,
      position: isMobile ? [-10, -2, -5] : [-10, -1.5, -6],
      rotation: [-0.01, 5, -0.1],
    },
    // Add more objects as needed
  ];

  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const starCount = 100;
      const newStars = [];

      for (let i = 0; i < starCount; i++) {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
        star.position.set(x, y, z);

        newStars.push(star);
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {objects.map((obj, index) => (
        <HeroObject
          key={index}
          modelPath={obj.modelPath}
          scale={obj.scale}
          position={obj.position}
          rotation={obj.rotation}
        />
      ))}
      {stars.map((star, index) => (
        <primitive key={index} object={star} />
      ))}
      <Button position={[0, -1, 2.5]} link="https://github.com/andevrrr" imagePath="./github.png"  isMobile={isMobile} />
      <Button position={[0, -1, 1.3]} link="https://www.linkedin.com/in/antonkuch/" imagePath="./linkedin.png" isMobile={isMobile} />
      <Button position={[0, -1, 0.1]} link="https://pdfhost.io/v/NEZZusw6Q_cv_anton_kucherenko" imagePath="./cv.png" isMobile={isMobile} />
    </mesh>
  );
};

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hero isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;
