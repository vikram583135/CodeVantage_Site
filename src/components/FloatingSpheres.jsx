import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, useSphere, usePlane } from '@react-three/cannon';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const Sphere = ({ position, color, radius = 1 }) => {
    const [ref] = useSphere(() => ({
        mass: 1,
        position,
        args: [radius],
        linearDamping: 0,
        angularDamping: 0,
        friction: 0,
        restitution: 1, // Perfectly elastic collision
        velocity: [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ]
    }));

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshPhysicalMaterial
                color={color}
                roughness={0.2}
                metalness={0.4}
                clearcoat={0.8}
                clearcoatRoughness={0.1}
                emissive={color}
                emissiveIntensity={0.05}
                transparent={true}
                opacity={0.85}
            />
        </mesh>
    );
};

const Boundaries = () => {
    // Invisible planes to keep spheres in view with restitution for bouncing
    const props = { restitution: 1, friction: 0 };
    usePlane(() => ({ position: [0, -10, 0], rotation: [-Math.PI / 2, 0, 0], ...props })); // Floor
    usePlane(() => ({ position: [0, 10, 0], rotation: [Math.PI / 2, 0, 0], ...props })); // Ceiling
    usePlane(() => ({ position: [0, 0, -10], rotation: [0, 0, 0], ...props })); // Back
    usePlane(() => ({ position: [0, 0, 10], rotation: [0, -Math.PI, 0], ...props })); // Front
    usePlane(() => ({ position: [-15, 0, 0], rotation: [0, Math.PI / 2, 0], ...props })); // Left
    usePlane(() => ({ position: [15, 0, 0], rotation: [0, -Math.PI / 2, 0], ...props })); // Right
    return null;
};

const FloatingSpheres = ({ count = 30 }) => {
    const spheres = useMemo(() => {
        // Darker, elegant color palette inspired by the reference
        const colors = [
            '#1a3a52', // Deep navy blue
            '#2d1b3d', // Dark purple
            '#1a4d4d', // Deep teal
            '#2a3d4d', // Dark slate blue
            '#3d2952', // Deep violet
            '#1f3d2f', // Dark forest green
            '#2d2552', // Dark indigo
            '#1a2d3d'  // Deep midnight blue
        ];
        return new Array(count).fill().map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ],
            color: colors[Math.floor(Math.random() * colors.length)],
            radius: 0.5 + Math.random() * 1
        }));
    }, [count]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
            <Canvas shadows camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.4} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.2} color="#1a3a52" />
                <Environment preset="night" />

                <Physics gravity={[0, 0, 0]}> {/* Zero gravity for floating effect */}
                    <Boundaries />
                    {spheres.map((props, i) => (
                        <Sphere key={i} {...props} />
                    ))}
                </Physics>
            </Canvas>
        </div>
    );
};

export default FloatingSpheres;
