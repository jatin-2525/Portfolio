import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Ambient 3D artifact — a slowly rotating wireframe torus knot with an
 * inner icosahedron and a particle shell. Reacts to the pointer with a
 * soft parallax. Pure three.js, disposed on unmount.
 */
export function ThreeScene({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    const group = new THREE.Group();
    group.rotation.x = 0.32;
    scene.add(group);

    // wireframe knot
    const knotGeo = new THREE.TorusKnotGeometry(1.55, 0.42, 150, 18, 2, 3);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xd9a85c,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    group.add(knot);

    // inner icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.82, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x5cbfa9,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    group.add(ico);

    // particle shell
    const N = 850;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 2.4 + Math.random() * 3.0;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x7e9cd8,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
    });
    const points = new THREE.Points(pGeo, pMat);
    group.add(points);

    const onResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth || 1;
      const h = parent.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    onResize();
    const ro = new ResizeObserver(onResize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: globalThis.MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    let t = 0;
    let running = true;
    const onVis = () => {
      running = !document.hidden;
      if (running) {
        clock.getDelta();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    const clock = new THREE.Clock();

    const tick = () => {
      if (!running) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;
      tx += (mx * 0.25 - tx) * 0.04;
      ty += (my * 0.2 - ty) * 0.04;
      group.rotation.y += dt * 0.12;
      ico.rotation.y -= dt * 0.22;
      ico.rotation.x += dt * 0.1;
      points.rotation.y -= dt * 0.02;
      group.rotation.x = 0.32 + ty + Math.sin(t * 0.3) * 0.04;
      group.rotation.z = tx * 0.4;
      camera.position.x = tx * 0.5;
      camera.position.y = -ty * 0.45;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      knotGeo.dispose();
      knotMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
