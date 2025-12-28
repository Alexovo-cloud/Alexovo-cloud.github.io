// 10种随机中心图案+中等饱和度粉色系梦幻点击特效
document.addEventListener('click', e => {
  // ========== 1. 粉色系粒子（保留中等饱和度+梦幻效果） ==========
  const particleCount = 15;
  const colors = [
    'rgba(255, 200, 210, 0.95)',
    'rgba(255, 180, 200, 0.95)',
    'rgba(255, 160, 190, 0.95)',
    'rgba(180, 220, 255, 0.9)'
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = 3 + Math.random() * 7;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 60;
    const duration = 1 + Math.random() * 1.5;

    particle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '30%'};
      box-shadow: 0 0 ${8 + Math.random() * 6}px ${color};
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: all ${duration}s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    `;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      particle.style.opacity = '0';
      particle.style.filter = 'blur(2px)';
      setTimeout(() => particle.remove(), duration * 1000);
    }, 10);
  }

  // ========== 2. 10种随机中心图案（替换原单一波纹） ==========
  const patternTypes = [
    'circle',    // 圆形
    'star',      // 五角星
    'heart',     // 心形
    'petal',     // 花瓣形
    'diamond',   // 菱形
    'moon',      // 月牙形
    'triangle',  // 三角形
    'hexagon',   // 六边形
    'cross',     // 十字形
    'oval'       // 椭圆形
  ];
  const randomPattern = patternTypes[Math.floor(Math.random() * patternTypes.length)];
  const pattern = document.createElement('div');
  const patternSize = 40;
  let patternStyle = '';

  // 各图案样式定义
  switch (randomPattern) {
    case 'circle':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); border-radius: 50%; box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'star':
      patternStyle = `background: rgba(255, 180, 200, 0.3); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'heart':
      patternStyle = `background: rgba(255, 180, 200, 0.3); clip-path: path('M20,0 C30,10 40,20 20,40 C0,20 10,10 20,0 Z'); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'petal':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); clip-path: polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'diamond':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'moon':
      patternStyle = `background: rgba(255, 180, 200, 0.3); clip-path: ellipse(50% 50% at 50% 50%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6); border-radius: 50%; background: radial-gradient(circle at 30% 30%, transparent 40%, rgba(255, 180, 200, 0.3) 40%);`;
      break;
    case 'triangle':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); clip-path: polygon(50% 0%, 0% 100%, 100% 100%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'hexagon':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'cross':
      patternStyle = `background: rgba(255, 180, 200, 0.3); clip-path: polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%); box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
    case 'oval':
      patternStyle = `border: 1.5px solid rgba(255, 180, 200, 0.85); border-radius: 60% 40% 50% 50% / 30% 30% 70% 70%; box-shadow: 0 0 25px rgba(255, 180, 200, 0.6);`;
      break;
  }

  // 图案基础定位与动画
  pattern.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: ${patternSize}px;
    height: ${patternSize}px;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    z-index: 9998;
    transition: all 1.2s ease-out;
    opacity: 1;
    ${patternStyle}
  `;
  document.body.appendChild(pattern);

  // 触发图案扩散消失动画
  setTimeout(() => {
    pattern.style.transform = 'translate(-50%, -50%) scale(3)';
    pattern.style.opacity = '0';
    setTimeout(() => pattern.remove(), 1200);
  }, 10);
});