import React from 'react';

const GraphComponent = () => {
  return (
    <div style={containerStyle}>
      {[...Array(3)].map((_, row) => (
        <div key={row} style={rowStyle}>
          {[...Array(4)].map((_, col) => (
            <div key={col} style={frameStyle}>
              {/* 숫자 표시 막대 그래프 */}
              <div style={barGraphStyle}>
                <div style={barStyle}></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  gridTemplateColumns: 'repeat(3, 1fr)',
  //gridGap: '1px',
  width: '100vw',
  height: '100vh',
  //padding: '1px',
  marginTop: '0px',
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '10px',
  height: 'calc(100% / 3)',
};

const frameStyle = {
  width: '100%',
  height: '100%',
  //padding: '0.1rem',
  boxSizing: 'border-box',
};

const barGraphStyle = {
  width: '100%',
  height: '99%',
  backgroundColor: 'black',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
};

const barStyle = {
  width: '50%',
  backgroundColor: 'blue',
};

const lineGraphStyle = {
  width: '100%',
  height: '20%',
  backgroundColor: 'lightgray',
  position: 'relative',
  marginTop: '0.25rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const lineStyle = {
  width: '20%',
  backgroundColor: 'gray',
};

export default GraphComponent;