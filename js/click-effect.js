// 10种随机中心图案+多层级蓝色系梦幻点击特效
document.addEventListener('click', e => {
  // ========== 1. 多梯度蓝色系粒子（丰富层次感） ==========
  const particleCount = 18; // 增加粒子数，强化层次
  const colors = [
    'rgba(200, 230, 255, 0.98)', // 极浅蓝（高光）
    'rgba(170, 210, 255, 0.95)', // 淡天蓝
    'rgba(120, 190, 255, 0.95)', // 湖蓝
    'rgba(80, 160, 255, 0.9)',   // 宝蓝
    'rgba(50, 130, 255, 0.85)',  // 藏青
    'rgba(150, 220, 255, 0.92)'  // 青蓝
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    // 粒子大小分梯度，更有层次
    const size = i % 3 === 0 ? 2 + Math.random() * 5 : 4 + Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    // 粒子扩散距离分远近，形成空间层次
    const distance = i % 2 === 0 ? 15 + Math.random() * 40 : 30 + Math.random() * 70;
    const duration = 1 + Math.random() * 1.8;

    particle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${Math.random() > 0.6 ? '50%' : Math.random() > 0.5 ? '30%' : '10%'};
      box-shadow: 0 0 ${6 + Math.random() * 9}px ${color};
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: all ${duration}s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    `;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      particle.style.opacity = '0';
      particle.style.filter = `blur(${Math.random() > 0.5 ? 1 : 3}px)`; // 模糊度分层
      setTimeout(() => particle.remove(), duration * 1000);
    }, 10);
  }

  // ========== 2. 10种随机中心图案（多层蓝色系，层次更丰富） ==========
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
  const patternSize = 42;
  let patternStyle = '';

  // 定义多组蓝色系变量，按图案类型适配不同深浅
  const lightBlue = 'rgba(170, 210, 255, 0.88)';  // 浅蓝（边框/高光）
  const midBlue = 'rgba(80, 160, 255, 0.35)';    // 中蓝（背景）
  const darkBlue = 'rgba(50, 130, 255, 0.7)';    // 深蓝（阴影）
  const skyBlue = 'rgba(120, 190, 255, 0.4)';    // 天蓝（特殊图案背景）

  // 各图案样式定义（按图案特性分配不同蓝色，强化层次）
  switch (randomPattern) {
    case 'circle':
      patternStyle = `border: 2px solid ${lightBlue}; border-radius: 50%; box-shadow: 0 0 15px ${lightBlue}, 0 0 30px ${darkBlue};`;
      break;
    case 'star':
      patternStyle = `background: linear-gradient(45deg, ${midBlue}, ${skyBlue}); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue};`;
      break;
    case 'heart':
      patternStyle = `background: linear-gradient(135deg, ${skyBlue}, ${midBlue}); clip-path: path('M20,0 C30,10 40,20 20,40 C0,20 10,10 20,0 Z'); box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue};`;
      break;
    case 'petal':
      patternStyle = `border: 2px solid ${lightBlue}; background: ${skyBlue}; clip-path: polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%); box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue};`;
      break;
    case 'diamond':
      patternStyle = `border: 2px solid ${darkBlue}; background: ${midBlue}; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); box-shadow: 0 0 18px ${darkBlue}, 0 0 32px ${lightBlue};`;
      break;
    case 'moon':
      patternStyle = `background: ${skyBlue}; clip-path: ellipse(50% 50% at 50% 50%); box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue}; border-radius: 50%; background: radial-gradient(circle at 30% 30%, transparent 40%, ${midBlue} 40%, ${skyBlue} 60%);`;
      break;
    case 'triangle':
      patternStyle = `border: 2px solid ${lightBlue}; background: ${midBlue}; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); box-shadow: 0 0 18px ${lightBlue}, 0 0 32px ${darkBlue};`;
      break;
    case 'hexagon':
      patternStyle = `border: 2px solid ${darkBlue}; background: ${skyBlue}; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); box-shadow: 0 0 18px ${darkBlue}, 0 0 32px ${lightBlue};`;
      break;
    case 'cross':
      patternStyle = `background: linear-gradient(90deg, ${midBlue}, ${skyBlue}); clip-path: polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%); box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue};`;
      break;
    case 'oval':
      patternStyle = `border: 2px solid ${lightBlue}; background: ${midBlue}; border-radius: 60% 40% 50% 50% / 30% 30% 70% 70%; box-shadow: 0 0 20px ${lightBlue}, 0 0 35px ${darkBlue};`;
      break;
  }

  // 图案基础定位与动画（增加缩放梯度，强化层次）
  pattern.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: ${patternSize}px;
    height: ${patternSize}px;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    z-index: 9998;
    transition: all 1.3s ease-out;
    opacity: 1;
    ${patternStyle}
  `;
  document.body.appendChild(pattern);

  // 触发图案扩散消失动画（不同图案不同缩放比例）
  const scaleRatio = randomPattern === 'star' || randomPattern === 'cross' ? 3.5 : 3;
  setTimeout(() => {
    pattern.style.transform = `translate(-50%, -50%) scale(${scaleRatio})`;
    pattern.style.opacity = '0';
    setTimeout(() => pattern.remove(), 1300);
  }, 10);
});