"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  region: "americas" | "emea" | "apac";
}

interface Packet {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export function GlobalNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let mouse = { x: -1000, y: -1000 };

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Node topology
    const nodeCount = 36;
    const nodes: Node[] = [];
    const width = canvas.width;
    const height = canvas.height;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() > 0.8 ? 3.5 : 2,
        region: i % 3 === 0 ? "americas" : i % 3 === 1 ? "emea" : "apac",
      });
    }

    // Packets travelling along active edges
    const packets: Packet[] = [];
    const maxPackets = 12;

    const maybeAddPacket = () => {
      if (packets.length >= maxPackets) return;
      const i = Math.floor(Math.random() * nodes.length);
      const j = Math.floor(Math.random() * nodes.length);
      if (i !== j) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 40) {
          packets.push({
            fromIndex: i,
            toIndex: j,
            progress: 0,
            speed: 0.008 + Math.random() * 0.012,
          });
        }
      }
    };

    // Parallax mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Intersection observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nodes & connections
      const maxDistance = 160;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          // Gentle mouse gravity / repulsion
          const dxM = mouse.x - node.x;
          const dyM = mouse.y - node.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < 120 && distM > 0) {
            node.x -= (dxM / distM) * 0.4;
            node.y -= (dyM / distM) * 0.4;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(30, 43, 69, ${alpha * 2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Node Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.radius > 3 ? "#0D9488" : "#1D58D8";
        ctx.fill();

        // Node aura for core hubs
        if (node.radius > 3) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(13, 148, 136, 0.06)";
          ctx.fill();
        }
      }

      // Draw and update secure telemetry packets
      if (!prefersReducedMotion) {
        maybeAddPacket();
        for (let k = packets.length - 1; k >= 0; k--) {
          const p = packets[k];
          p.progress += p.speed;

          if (p.progress >= 1) {
            packets.splice(k, 1);
            continue;
          }

          const n1 = nodes[p.fromIndex];
          const n2 = nodes[p.toIndex];
          if (!n1 || !n2) continue;

          const px = n1.x + (n2.x - n1.x) * p.progress;
          const py = n1.y + (n2.y - n1.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "#0D9488";
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}
