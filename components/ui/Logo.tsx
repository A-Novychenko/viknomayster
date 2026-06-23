import React from 'react';

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = true }: LogoProps) {
  return (
    // Каркас: запрещаем перенос строк (whitespace-nowrap) и фиксируем максимальную ширину контента (w-max)
    <div className="flex items-center gap-3 select-none cursor-pointer w-max whitespace-nowrap">
      
      {/* Контейнер иконки: жесткая фиксация размеров, чтобы флексбоксы не сжимали SVG */}
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
    
              
                <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
       
          <rect width="40" height="40" rx="10" fill={ "#2563EB" } />
          
       
          <rect x="8" y="8" width="10" height="24" rx="2" fill="#FFFFFF" fillOpacity="0.95" />
          
      
          <rect x="22" y="8" width="10" height="10" rx="2" fill="#FFFFFF" fillOpacity="0.95" />
       
          <path d="M22 22C22 20.8954 22.8954 20 24 20H30C31.1046 20 32 20.8954 32 22V30C32 31.1046 31.1046 32 30 32H24C22.8954 32 22 31.1046 22 30V22Z" fill={ "#FBBF24" } />
       
          <path d="M24.5 25.5L26 27.5L29.5 23" stroke={"#1E3A8A" } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Текстовый блок: выравнивание жестко по левому краю */}
      <div className="flex flex-col justify-center text-left">
        <span className={`text-2xl font-black tracking-tight leading-none ${
          light ? 'text-gray-900' : 'text-white'
        }`}>
          Vikno<span className="text-blue-600">Mayster</span>
          {/* Vikno<span className={light ? 'text-blue-600' : 'text-yellow-400'}>Mayster</span> */}
        </span>
        
        {/* Подзаголовок: на светлом фоне используем легкий синий оттенок, на темном - чистый белый с прозрачностью 80% */}
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 leading-none ${
          light ? 'text-blue-800/60' : 'text-white'
        }`}>
          Ремонт Вікон
        </span>
      </div>
    </div>
  );
}