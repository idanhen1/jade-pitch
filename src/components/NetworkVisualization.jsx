import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NetworkVisualization = () => {
  const canvasRef = useRef(null);
  const [animationId, setAnimationId] = useState(null);
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  // Company logos and threat indicators
  const companies = [
    { name: 'Google', color: '#4285F4', isRisk: false },
    { name: 'AWS', color: '#FF9900', isRisk: true },
    { name: 'Azure', color: '#0078D4', isRisk: false },
    { name: 'Okta', color: '#007DC1', isRisk: false },
    { name: 'Salesforce', color: '#00A1E0', isRisk: false },
    { name: 'Jira', color: '#0052CC', isRisk: false },
    { name: 'Slack', color: '#4A154B', isRisk: false }
  ];

  // Risk indicators (red nodes)
  const riskNodes = [
    { type: 'user', isRisk: true },
    { type: 'admin', isRisk: true },
    { type: 'service', isRisk: true },
    { type: 'api', isRisk: true },
    { type: 'database', isRisk: true }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

    // Initialize nodes
    const allNodes = [...companies, ...riskNodes];
    const nodes = allNodes.map((item, index) => {
      const angle = (index / allNodes.length) * 2 * Math.PI;
      const nodeRadius = radius + (Math.random() - 0.5) * 100;
      
      return {
        x: centerX + Math.cos(angle) * nodeRadius,
        y: centerY + Math.sin(angle) * nodeRadius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: item.isRisk ? 8 : 6,
        color: item.isRisk ? '#ef4444' : (item.color || '#64748b'),
        name: item.name || item.type,
        isRisk: item.isRisk,
        pulse: item.isRisk ? Math.random() * Math.PI * 2 : 0
      };
    });

    // Create connections
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.15) { // 15% chance of connection
          connections.push({
            source: i,
            target: j,
            opacity: Math.random() * 0.3 + 0.1
          });
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;

    let time = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      connections.forEach(conn => {
        const source = nodes[conn.source];
        const target = nodes[conn.target];
        
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = `rgba(148, 163, 184, ${conn.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        // Gentle floating movement
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary bounce
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;
        
        // Keep nodes roughly in bounds
        node.x = Math.max(20, Math.min(width - 20, node.x));
        node.y = Math.max(20, Math.min(height - 20, node.y));

        // Draw node
        ctx.beginPath();
        
        if (node.isRisk) {
          // Pulsing effect for risk nodes
          node.pulse += 0.1;
          const pulseSize = node.radius + Math.sin(node.pulse) * 2;
          ctx.arc(node.x, node.y, pulseSize, 0, 2 * Math.PI);
          ctx.fillStyle = node.color;
          ctx.fill();
          
          // Add warning symbol
          ctx.fillStyle = 'white';
          ctx.font = '10px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('⚠', node.x, node.y + 3);
        } else {
          // Regular nodes
          ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
          ctx.fillStyle = node.color;
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      setAnimationId(requestAnimationFrame(animate));
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-300 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
            <span className="text-slate-600">Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-slate-600">High-Risk Actions</span>
          </div>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute top-4 left-4 right-4 text-center">
        <h4 className="text-lg font-semibold text-slate-700 mb-1">Power Creep Across Every Domain</h4>
        <p className="text-sm text-slate-500">Uncontrolled high-risk actions threaten your entire infrastructure</p>
      </div>
    </div>
  );
};

export default NetworkVisualization;