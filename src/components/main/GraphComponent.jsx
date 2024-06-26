import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
// import GridItem from './GridItem'; // 각 영역 컴포넌트

const GraphComponent = () => {
  const [layouts, setLayouts] = useState({
   lg:[ { i: '1', x: 0, y: 0, w: 2, h: 2 },
    { i: '2', x: 2, y: 0, w: 2, h: 2 },
    { i: '3', x: 4, y: 0, w: 2, h: 2 },
    { i: '4', x: 6, y: 0, w: 2, h: 2 },
    { i: '5', x: 8, y: 0, w: 2, h: 2 },
    { i: '6', x: 0, y: 2, w: 2, h: 2 },
    { i: '7', x: 2, y: 2, w: 2, h: 2 },
    { i: '8', x: 4, y: 2, w: 2, h: 2 },
    { i: '9', x: 6, y: 2, w: 2, h: 2 },
    { i: '10', x: 8, y: 2, w: 2, h: 2 },
  ]
});
  const cols = 10;
  const rowHeight = 108;

  const onResizeStop = (layout, oldItem, newItem, placeholder, e, element) => {
    const newLayouts = { ...layouts };
    const currentLayout = newLayouts.lg;
    const index = currentLayout.findIndex(item => item.i === newItem.i);
    if (index > -1) {
      // 리사이징 된 아이템
      const currentItem = currentLayout[index];

      // 다음 아이템 찾기
      const nextItem = currentLayout[index + 1];
      if (nextItem) {
        // 다음 아이템의 너비 조절
        const totalWidth = currentItem.w + nextItem.w;
        const newWidthCurrent = newItem.w;
        const newWidthNext = totalWidth - newWidthCurrent;
        currentItem.w = newWidthCurrent;
        nextItem.w = newWidthNext;
      }
    }
    setLayouts(newLayouts);
  };
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <GridLayout
        className="layout"
        layout={layout}
        onResizeStop={onResizeStop}
        cols={cols}
        rowHeight={rowHeight}
        width={1920}
        isDraggable={false}
        isResizable={true}
        preventCollision={true}
        compactType={null}
        margin={[0, 0]}
        resizeHandles={['se']}
      >
        {layout.map(item => (
          <div key={item.i}>
            <div style={{ backgroundColor: '#ccc', border: '1px solid #000', width: '100%', height: '100%' }}>
              
            </div>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default GraphComponent;
