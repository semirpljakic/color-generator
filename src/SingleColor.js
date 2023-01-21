import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;
  console.log(hexValue);
  useEffect(() => {
    const copied = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearInterval(copied);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `rgb(${bcg})` }}
      onMouseDown={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='perecent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>coppied to cliboard</p>}
    </article>
  );
};

export default SingleColor;
