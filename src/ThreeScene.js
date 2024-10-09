// src/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const refContainer = useRef(null); // Create a ref to attach to the div

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    // Set renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current.appendChild(renderer.domElement); // Append to refContainer

    // Add a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      // Remove renderer from DOM
      refContainer.current.removeChild(renderer.domElement);
      renderer.dispose(); // Dispose of the renderer to free memory
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div ref={refContainer} style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default ThreeScene;
