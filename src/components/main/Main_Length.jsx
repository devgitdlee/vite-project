
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from '../../store/actions';

const Main_Length = () => {
  const menuItems = ['Menu 1', 'Menu 2', 'Menu 3']; // 메뉴 리스트
  const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴
  const dispatch = useDispatch();
  const selectedMenuPayload = useSelector(state => state.selectedMenu);
  console.log(selectedMenuPayload);
  const handleMenuClick = (index) => {
    setSelectedMenu(index); // 선택된 메뉴 업데이트
    dispatch(selectMenu(index)); // Redux를 통해 선택된 메뉴 정보 저장


  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: '0.3' }}>
        {/* 세로 메뉴 3분의 1 크기 설정 */}
        {menuItems.map((menuItem, index) => (
          <div key={index} onClick={() => handleMenuClick(index)}>
            {menuItem}
          </div>
        ))}
      </div>
      <div style={{ flex: '7', display: 'flex', flexWrap: 'wrap' }}>
        {/* 선택된 메뉴에 따라 네모난 div 출력 */}
        {selectedMenu !== null &&
          Array.from(Array(10).keys()).map((num) => ( // 임시로 10개의 div 출력
            <div key={num} style={{ width: '200px', height: '100px', border: '1px solid black', margin: '5px' }}>
              {`Item ${selectedMenuPayload + num}`}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main_Length;
