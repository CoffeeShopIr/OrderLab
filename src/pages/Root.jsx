import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/navigationHeader";
import LiquidEther from "../LiquidEther";

export default function Root(){
    return(
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
    {/* انیمیشن پس‌زمینه */}
    <div style={{
      position: 'fixed',      // یا absolute (اگر نمی‌خوای اسکرول شه)
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,             // پایین‌ترین لایه
      pointerEvents: 'none'  // انیمیشن کلیک رو قورت نده
    }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    color0="#5227FF"
    color1="#FF9FFC"
    color2="#B19EEF"
/>
    </div>
    <NavigationHeader/>
    <Outlet/>
    {/* محتوای اصلی
    <div style={{
      position: 'relative',
      zIndex: 1,            // بالاتر از انیمیشن
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',       // متن سفید روی ذرات سفید؟ بهتره رنگ متضاد بدی
      textShadow: '0 0 10px rgba(0,0,0,0.5)'
    }}>
      <h1>hello</h1>
    </div> */}
    
  </div>
    )
}