'use client'
import { COLOR_PRIMARY } from '@/constants'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface Params {
  totalImages?: number
  totalItems?: number
  baseWidth?: number
  baseHeight?: number
  sphereRadius?: number
  backgroundColor?: string
}

const Orb = ({
  totalImages = 50,
  totalItems = 100,
  baseWidth = 1,
  baseHeight = 0.6,
  sphereRadius = 2,
  backgroundColor = COLOR_PRIMARY
}: Params) => {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(parseInt(backgroundColor, 16))
    renderer.setPixelRatio(window.devicePixelRatio)
    ;(renderer as any).outputEncoding = (THREE as any).sRGBEncoding
    ;(renderer as any).gammaFactor = 2.2

    orbRef.current?.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 1.2
    controls.minDistance = 6
    controls.maxDistance = 10
    controls.enableZoom = true
    controls.enablePan = false

    const textureLoader = new THREE.TextureLoader()
    let loadedCount = 0
    const getRandomImagePath = () => {
      return `assets/img-${Math.floor(Math.random() * totalImages)}.jpg`
    }

    const createImagePlane = (texture: any) => {
      const imageAspect = texture.image.width / texture.image.height
      let width = baseWidth
      let height = baseHeight
      if (imageAspect > 1) {
        height = width / imageAspect
      } else {
        width = height * imageAspect
      }
      return new THREE.PlaneGeometry(width, height)
    }

    const loadImageMesh = (phi: number, theta: number) => {
      textureLoader.load(
        getRandomImagePath(),
        (texture) => {
          texture.generateMipmaps = false
          texture.minFilter = THREE.LinearFilter
          texture.magFilter = THREE.LinearFilter
          ;(texture as any).encoding = (THREE as any).LinearEncoding

          const geometry = createImagePlane(texture)
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: false,
            depthWrite: true,
            depthTest: true
            // encoding: THREE.LinearEncoding
          })

          const mesh = new THREE.Mesh(geometry, material)

          mesh.position.x = sphereRadius * Math.cos(theta) * Math.sin(phi)
          mesh.position.y = sphereRadius * Math.sin(theta) * Math.sin(phi)
          mesh.position.z = sphereRadius * Math.cos(phi)

          mesh.lookAt(0, 0, 0)
          mesh.rotateY(Math.PI)

          scene.add(mesh)

          loadedCount++
          if (loadedCount === totalItems) {
            animate()
          }
        },
        undefined,
        (error) => {
          console.error(error)
        }
      )
    }

    const createSphere = () => {
      for (let i = 0; i < totalItems; i++) {
        const phi = Math.acos(-1 + (2 * i) / totalItems)
        const theta = Math.sqrt(totalItems * Math.PI) * phi
        loadImageMesh(phi, theta)
      }
    }

    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    createSphere()
    animate()

    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    })

    createSphere()

    return () => {
      orbRef.current?.removeChild(renderer.domElement)
    }
  }, [totalImages, totalItems, baseWidth, baseHeight, sphereRadius, backgroundColor])

  return <div ref={orbRef} className="w-full h-full" />
}

export { Orb }
