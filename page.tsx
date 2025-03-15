"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D, Center, OrbitControls } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { MessageCircle, Code, Star, Zap, FlaskRoundIcon as Flask, Brain, PenTool } from "lucide-react"
import Image from "next/image"
import type { Group } from "three"

// Main 3D Code Bracket Component
function CodeBracket() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelSegments={5}
        >
          {"</>"}
          <meshStandardMaterial
            color="#60A5FA"
            metalness={0.8}
            roughness={0.2}
            emissive="#1E40AF"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

// Tech Stack 3D Component
function TechStackIcon() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]}>
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[1.2, 1.2, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.6} roughness={0.3} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

// Python 3D Icon - Snake-like logo
function Python3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Python snake body */}
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#4B8BBE" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Python snake head */}
      <mesh position={[-0.6, -0.2, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#4B8BBE" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Python snake tail */}
      <mesh position={[0.6, -0.2, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#FFD43B" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Java 3D Icon - Coffee Cup
function Java3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Coffee cup body */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.4, 1, 32]} />
        <meshStandardMaterial color="#5382A1" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Coffee cup handle */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#5382A1" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Coffee steam */}
      <mesh position={[0, 0.6, 0]}>
        <torusGeometry args={[0.15, 0.05, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#F89820" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Django 3D Icon - Stylized D
function Django3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelSegments={5}
        >
          {"D"}
          <meshStandardMaterial color="#092E20" metalness={0.7} roughness={0.2} />
        </Text3D>
      </Center>
    </group>
  )
}

// FastAPI 3D Icon - Lightning Bolt
function FastAPI3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Lightning bolt */}
      <mesh position={[0, 0, 0]}>
        <Center>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelSegments={5}
          >
            {"⚡"}
            <meshStandardMaterial color="#009688" metalness={0.7} roughness={0.2} />
          </Text3D>
        </Center>
      </mesh>
    </group>
  )
}

// Flask 3D Icon - Laboratory Flask
function Flask3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Flask neck */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.6, 32]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Flask body */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.2, 0.8, 1, 32]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.2} transparent opacity={0.7} />
      </mesh>
      {/* Flask liquid */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.18, 0.75, 0.8, 32]} />
        <meshStandardMaterial color="#00FF00" metalness={0.5} roughness={0.2} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

// AI 3D Icon - Brain
function AI3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Brain base */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#FF6B6B" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Neural network */}
      <mesh position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.8} roughness={0.2} wireframe={true} />
      </mesh>
      {/* Connection points */}
      <mesh position={[0.3, 0.3, 0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.3, 0.3, 0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, -0.3, 0.3]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Metrics 3D Component
function MetricsChart() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]}>
      {/* Bar chart */}
      <mesh position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.3, 1.5, 0.3]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 1.0, 0.3]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <boxGeometry args={[0.3, 0.7, 0.3]} />
        <meshStandardMaterial color="#2563EB" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.8, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 0.5]} />
        <meshStandardMaterial color="#1E40AF" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Pricing 3D Component
function PricingSymbol() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelSegments={5}
        >
          {"₽"}
          <meshStandardMaterial
            color="#60A5FA"
            metalness={0.8}
            roughness={0.2}
            emissive="#1E40AF"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
      <mesh position={[0, 0, -0.3]} scale={[1.5, 1.5, 0.1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.6} roughness={0.3} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

// Basic Plan 3D Icon - Foundation Block
function BasicPlan3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Foundation block */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.3, 1.5]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Pillar */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Standard Plan 3D Icon - Building Structure
function StandardPlan3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Foundation */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.5, 0.3, 1.5]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Columns */}
      <mesh position={[-0.5, 0, -0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0, -0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-0.5, 0, 0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0, 0.5]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.3, 1.5]} />
        <meshStandardMaterial color="#2563EB" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Premium Plan 3D Icon - Crown
function PremiumPlan3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Crown base */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Crown points */}
      <mesh position={[0, 0.3, 0]}>
        <coneGeometry args={[0.2, 0.5, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, 0.2, 0]}>
        <coneGeometry args={[0.15, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.4, 0.2, 0]}>
        <coneGeometry args={[0.15, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.2, 0.4]}>
        <coneGeometry args={[0.15, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.2, -0.4]}>
        <coneGeometry args={[0.15, 0.4, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Jewels */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#FF0000"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF0000"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

// Contact 3D Component
function ContactSymbol() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]}>
      {/* Envelope base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#60A5FA" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Envelope flap */}
      <mesh position={[0, 0.3, 0.05]} rotation={[Math.PI / 8, 0, 0]}>
        <coneGeometry args={[1, 1, 4, 1, true]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Telegram 3D Icon - Paper Airplane
function Telegram3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={[0.7, 0.7, 0.7]}>
      {/* Paper airplane body */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.5, 1.5, 4]} />
        <meshStandardMaterial color="#0088cc" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Paper airplane wing */}
      <mesh position={[0.2, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.3, 0.8, 3]} />
        <meshStandardMaterial color="#0088cc" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Technology stack with Lucide icons and 3D components
const technologies = [
  {
    name: "Python",
    description: "Быстрая разработка и анализ данных",
    icon: <PenTool className="w-10 h-10 text-white" />,
    model3D: Python3D,
  },
  {
    name: "Java",
    description: "Надежные корпоративные решения",
    icon: <Code className="w-10 h-10 text-white" />,
    model3D: Java3D,
  },
  {
    name: "Django",
    description: "Быстрая веб-разработка",
    icon: <Zap className="w-10 h-10 text-white" />,
    model3D: Django3D,
  },
  {
    name: "FastAPI",
    description: "Высокопроизводительные API",
    icon: <Zap className="w-10 h-10 text-white" />,
    model3D: FastAPI3D,
  },
  {
    name: "Flask",
    description: "Гибкие веб-приложения",
    icon: <Flask className="w-10 h-10 text-white" />,
    model3D: Flask3D,
  },
  {
    name: "AI",
    description: "Интеллектуальные решения",
    icon: <Brain className="w-10 h-10 text-white" />,
    model3D: AI3D,
  },
]

const pricingPlans = [
  {
    name: "Базовый",
    price: "от 50$",
    description: "Идеально для старта вашего проекта",
    features: ["Анализ требований", "Разработка прототипа", "Базовая поддержка"],
    model3D: BasicPlan3D,
  },
  {
    name: "Стандарт",
    price: "от 150$",
    description: "Расширенные возможности для вашего бизнеса",
    features: ["Полный цикл разработки", "Интеграция API", "Приоритетная поддержка"],
    model3D: StandardPlan3D,
  },
  {
    name: "Премиум",
    price: "от 500$",
    description: "Индивидуальные решения для вашего успеха",
    features: ["Персональный менеджер", "Неограниченная поддержка", "Оптимизация производительности"],
    model3D: PremiumPlan3D,
  },
]

const contactLinks = [
  {
    name: "t.me/chatcoder",
    description: "Поможем с составлением ТЗ с помощью ИИ.",
    href: "https://t.me/chatcoder",
    model3D: Telegram3D,
  },
  {
    name: "t.me/apicontrol",
    description: "Начни с малого - добейся большего.",
    href: "https://t.me/apicontrol",
    model3D: Telegram3D,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <CodeBracket />
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Stars background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ava-2ovGkbe8ZF5oeoKC4zi61MG9cXCXXy.png"
                alt="Цитадель Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold">Цитадель</h1>
            <span className="px-4 py-1 bg-blue-900/50 backdrop-blur-sm rounded-full text-sm">Coding</span>
          </div>

          {/* Hero Section */}
          <div className="max-w-2xl mb-20 mt-20">
            <h2 className="text-5xl font-bold leading-tight mb-6">На вершине возможностей.</h2>
            <p className="text-2xl text-blue-200">Технологии будущего — уже сегодня.</p>
          </div>

          {/* Tech Stack */}
          <Card className="p-8 bg-blue-950/50 backdrop-blur-sm mb-12 border-blue-900/50 relative">
            {/* 3D Tech Icon */}
            <div className="absolute top-2 right-2 w-16 h-16 z-10">
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <Suspense fallback={null}>
                  <TechStackIcon />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                </Suspense>
              </Canvas>
            </div>

            <h2 className="text-3xl font-bold mb-6">Стек технологий</h2>
            <p className="text-xl text-blue-200 mb-8">Делаем сложное — простым.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="p-6 bg-blue-900/20 backdrop-blur-sm border-blue-800/30 hover:bg-blue-800/30 transition-colors relative"
                >
                  {/* 3D Tech Icon for each card */}
                  <div className="absolute top-2 right-2 w-16 h-16 z-10">
                    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                      <Suspense fallback={null}>
                        <tech.model3D />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={1.5} />
                      </Suspense>
                    </Canvas>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-blue-950/80 rounded-full flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{tech.name}</h3>
                      <p className="text-sm text-blue-200 mt-1">{tech.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Metrics */}
          <Card className="p-8 bg-blue-950/50 backdrop-blur-sm mb-12 border-blue-900/50 relative">
            {/* 3D Metrics Chart */}
            <div className="absolute top-2 right-2 w-16 h-16 z-10">
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <Suspense fallback={null}>
                  <MetricsChart />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                </Suspense>
              </Canvas>
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Опыт, который работает на ваш успех <Star className="inline-block ml-2 w-6 h-6 text-yellow-400" />
            </h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between mb-2">
                  <span>Результаты без задержек. Полная прозрачность</span>
                  <span className="font-bold text-blue-300">95%</span>
                </div>
                <div className="relative h-4 w-full bg-blue-950 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[95%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between mb-2">
                  <span>Ваши идеи - наша точка опоры. Внимание к вашим запросам.</span>
                  <span className="font-bold text-blue-300">80%</span>
                </div>
                <div className="relative h-4 w-full bg-blue-950 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[80%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-8 bg-blue-950/50 backdrop-blur-sm mb-12 border-blue-900/50 relative">
            {/* 3D Pricing Symbol */}
            <div className="absolute top-2 right-2 w-16 h-16 z-10">
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <Suspense fallback={null}>
                  <PricingSymbol />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                </Suspense>
              </Canvas>
            </div>

            <h2 className="text-3xl font-bold mb-6">Наши цены</h2>
            <p className="text-xl text-blue-200 mb-8">Прозрачное ценообразование для вашего проекта</p>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className="p-6 bg-blue-900/20 backdrop-blur-sm border-blue-800/30 hover:bg-blue-800/30 transition-colors flex flex-col relative"
                >
                  {/* 3D Plan Icon for each card */}
                  <div className="absolute top-2 right-2 w-16 h-16 z-10">
                    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                      <Suspense fallback={null}>
                        <plan.model3D />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={1.5} />
                      </Suspense>
                    </Canvas>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-300 mb-4">{plan.price}</div>
                  <p className="text-sm text-blue-200 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Star className="w-5 h-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                    Выбрать план
                  </button>
                </Card>
              ))}
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-blue-950/50 backdrop-blur-sm border-blue-900/50 relative">
            {/* 3D Contact Symbol */}
            <div className="absolute top-2 right-2 w-16 h-16 z-10">
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <Suspense fallback={null}>
                  <ContactSymbol />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                </Suspense>
              </Canvas>
            </div>

            <h2 className="text-3xl font-bold mb-6">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactLinks.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-6 bg-blue-900/20 rounded-lg hover:bg-blue-900/30 transition-colors relative"
                >
                  {/* 3D Contact Icon for each card */}
                  <div className="absolute top-2 right-2 w-16 h-16 z-10">
                    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                      <Suspense fallback={null}>
                        <contact.model3D />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={1.5} />
                      </Suspense>
                    </Canvas>
                  </div>

                  <MessageCircle className="w-8 h-8 text-blue-400" />
                  <div>
                    <span className="block text-lg font-bold">{contact.name}</span>
                    <span className="text-blue-300">{contact.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}

