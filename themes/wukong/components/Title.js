import React from 'react';

const Image = ({ src, style }) => (
  <img 
    src={src}
    style={{ ...style, backgroundSize: 'cover' }}
    alt="" // 添加 alt 属性以提高可访问性
  />
);

const Title = ({text}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ margin: '10px 0' }}>
        <Image 
          src="/Wu-title.png" 
          style={{ width: '134px', marginBottom: '-10px' }} 
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          src="/Wuicon.jpg" 
          style={{ width: '25px', transform: 'rotate(180deg)' }} 
        />
        <div 
          style={{ 
            fontFamily: "'EB Garamond', serif", 
            fontSize: '28px', 
            color: '#af9b7a', 
            padding: '0 15px', 
            marginTop: '-2px' 
          }}
        >
          {text}
        </div>
        <Image 
          src="/Wuicon.jpg" 
          style={{ width: '25px' }} 
        />
      </div>
    </div>
  );
};

export default Title;
