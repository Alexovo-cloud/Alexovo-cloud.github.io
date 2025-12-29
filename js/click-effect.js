// 嫩粉+深粉粒子 + 星光效果 + 粉色系波纹 点击特效
document.addEventListener('click', e => {
  // ========== 1. 粒子：嫩粉+深粉系 + 星光效果 ==========
  const particleCount = 18; // 适度增加粒子数，星光效果更明显
  // 颜色：保留嫩粉，新增深粉系，蓝色粒子保留做点缀
  const colors = [
    // 嫩粉色系
    'rgba(255, 200, 210, 0.95)',
    'rgba(255, 180, 200, 0.95)',
    'rgba(255, 160, 190, 0.95)',
    // 深粉色系
    'rgba(245, 150, 170, 0.95)',
    'rgba(235, 120, 150, 0.95)',
    'rgba(225, 100, 130, 0.95)',
    // 蓝色点缀
    'rgba(180, 220, 255, 0.9)'
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
    const size = 3 + Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 70;
    const duration = 1 + Math.random() * 1.8;
    // 星光效果：随机生成高光点和星光模糊
    const starGlow = `0 0 ${5 + Math.random() * 10}px ${color}, 0 0 ${10 + Math.random() * 15}px rgba(255, 255, 255, 0.4)`;
    // 核心区分：蓝色/深粉粒子用可爱图案，嫩粉粒子用圆角/圆形
    let shapeStyle = '';
    if (color.includes('245, 150') || color.includes('235, 120') || color.includes('225, 100') || color.includes('180, 220, 255')) {
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
      box-shadow: ${starGlow};
      // 星光高光点
      background-image: radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,255,255,0.8) 0%, transparent 20%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: all ${duration}s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    `;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${Math.random() * 360}deg)`;
      particle.style.opacity = '0';
      particle.style.filter = 'blur(3px)';
      setTimeout(() => particle.remove(), duration * 1000);
    }, 10);
  }

  // ========== 2. 波纹：粉色系 + 星光阴影 ==========
  const pattern = document.createElement('div');
  // 波纹大小随机：25-50px
  const patternSize = 25 + Math.floor(Math.random() * 25);
  // 粉色系波纹颜色，匹配粒子色调
  const pinkWaveColors = [
    'rgba(255, 200, 210, 0.9)',
    'rgba(255, 180, 200, 0.85)',
    'rgba(245, 150, 170, 0.95)'
  ];
  const waveColor = pinkWaveColors[Math.floor(Math.random() * pinkWaveColors.length)];
  // 波纹星光阴影
  const waveShadow = `0 0 20px ${waveColor}, 0 0 40px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 180, 200, 0.8)`;

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
    // 波纹星光点
    background-image: radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${waveColor} 0%, transparent 15%);
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    z-index: 9998;
    transition: all 0.8s ease-out;
    opacity: 1;
  `;
  document.body.appendChild(pattern);

  // 触发波纹扩散消失动画
  setTimeout(() => {
    pattern.style.transform = `translate(-50%, -50%) scale(3.5)`;
    pattern.style.opacity = '0';
    setTimeout(() => pattern.remove(), 800);
  }, 10);
});