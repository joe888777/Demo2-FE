import React, { useState } from 'react';

function MyComponent() {
  // 使用useState来追踪滑动条的值
  const [sliderValue, setSliderValue] = useState(100);

  // 处理滑动条值的变化
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="slider">Tx Counts </label>
      <input
        type="range"
        id="slider"
        name="slider"
        min="100"
        max="1000"
        step="5"
        value={sliderValue}
        onChange={handleSliderChange}
      />
       <text style={{ marginLeft: '10px' }}>{sliderValue}</text>
    </div>
  );
}

export default MyComponent;
