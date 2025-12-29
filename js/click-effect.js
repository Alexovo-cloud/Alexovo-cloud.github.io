// 粉色纯色粒子 + 蓝色可爱图案粒子 + 浅蓝紫调随机大小圆形波纹 点击特效
document.addEventListener('click', e => {
  // ========== 1. 粒子：粉色纯色 + 蓝色可爱图案（区分明显） ==========
  const particleCount = 15;
  const colors = [
    'rgba(255, 200, 210, 0.95)',
    'rgba(255, 180, 200, 0.95)',
    'rgba(255, 160, 190, 0.95)',
    'rgba(180, 220, 255, 0.9)' // 蓝色粒子专用色
  ];
  // 可爱图案集合
  const cuteShapes = [
    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // 五角星
    'path(\'M20,0 C30,10 40,20 20,40 C0,20 10,10 20,0 Z\')', // 心形
    'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)', // 花瓣形
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' // 菱形
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = 3 + Math.random() * 7;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 60;
    const duration = 1 + Math.random() * 1.5;
    // 核心区分：蓝色粒子用可爱图案，粉色粒子用圆角/圆形
    let shapeStyle = '';
    if (color === 'rgba(180, 220, 255, 0.9)') {
      shapeStyle = `clip-path: ${cuteShapes[Math.floor(Math.random() * cuteShapes.length)]};`;
    } else {
      shapeStyle = `border-radius: ${Math.random() > 0.5 ? '50%' : '30%'};`;
    }

    particle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      ${shapeStyle}
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

  // ========== 2. 波纹：浅蓝紫调 + 随机大小圆形（非深色） ==========
  const pattern = document.createElement('div');
  // 波纹大小随机：25-50px
  const patternSize = 25 + Math.floor(Math.random() * 25);
  // 浅蓝紫调配色，和粒子呼应，非深色
  const lightWaveColors = [
    'rgba(180, 200, 255, 0.9)',
    'rgba(200, 180, 255, 0.85)',
    'rgba(190, 220, 255, 0.95)'
  ];
  const waveColor = lightWaveColors[Math.floor(Math.random() * lightWaveColors.length)];
  const waveShadow = `0 0 20px ${waveColor}, 0 0 30px rgba(210, 220, 255, 0.6)`;

  pattern.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: ${patternSize}px;
    height: ${patternSize}px;
    border: 2px solid ${waveColor};
    border-radius: 50%;
    box-shadow: ${waveShadow};
    background: transparent;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    z-index: 9998;
    transition: all 0.8s ease-out;
    opacity: 1;
  `;
  document.body.appendChild(pattern);

  // 触发波纹扩散消失动画
  setTimeout(() => {
    pattern.style.transform = `translate(-50%, -50%) scale(3)`;
    pattern.style.opacity = '0';
    setTimeout(() => pattern.remove(), 800);
  }, 10);
});