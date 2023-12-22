import React from "react";
import styled, { keyframes } from "styled-components";
import "./index.css";

const index = (props) => {
  const { data } = props;
  console.log(data);

  const Players = [
    <Player1></Player1>,
    <Player2></Player2>,
    <Player3></Player3>,
    <Player4></Player4>,
    <Player5></Player5>,
    <Player6></Player6>,
    <Player7></Player7>,
    <Player8></Player8>,
    <Player9></Player9>,
    <Player10></Player10>,
  ];
  return (
    <div className="race">
      <div>
        {data.map((item, index) => (
          <div className={`track${data.length - index}`} key={item.id}></div>
        ))}
        <div className="race__container_outline"></div>
        <div className="race__container_CenterPart">
          <h2>Elapsed Time</h2>
          <h2>02:00</h2>
          <div>
            <p>Track length 400m</p>
          </div>
        </div>
        {data.map((item, index) => {
          return Players[index];
        })}
      </div>
    </div>
  );
};

const identifier1 = keyframes`
 0%{
        transform: rotate(0deg) translate(220px);
    }
    8.3%{
        transform: rotate(30deg) translate(210px);
    }
    16.6%{
        transform: rotate(60deg) translate(162px);
    }
    24.9%{
        transform: rotate(90deg) translate(145px);
    }
    33.2%{
        transform: rotate(120deg) translate(162px);
    }
    41.5%{
        transform: rotate(150deg) translate(210px);
    }
    49.8%{
        transform: rotate(180deg) translate(220px);
    }
    58.1%{
        transform: rotate(210deg) translate(210px);
    }
    66.4%{
        transform: rotate(240deg) translate(162px);
    }
    74.7%{
        transform: rotate(270deg) translate(145px);
    }
    83.1%{
        transform: rotate(300deg) translate(162px);
    }
    91.3%{
        transform: rotate(330deg) translate(210px);
    }
    100%{
        transform: rotate(360deg) translate(220px,0);
    }

`;
const identifier2 = keyframes`
  0%{
        transform: rotate(0deg) translate(240px);
    }
    8.3%{
        transform: rotate(30deg) translate(230px);
    }
    16.6%{
        transform: rotate(60deg) translate(182px);
    }
    24.9%{
        transform: rotate(90deg) translate(165px);
    }
    33.2%{
        transform: rotate(120deg) translate(182px);
    }
    41.5%{
        transform: rotate(150deg) translate(230px);
    }
    49.8%{
        transform: rotate(180deg) translate(240px);
    }
    58.1%{
        transform: rotate(210deg) translate(230px);
    }
    66.4%{
        transform: rotate(240deg) translate(182px);
    }
    74.7%{
        transform: rotate(270deg) translate(165px);
    }
    83.1%{
        transform: rotate(300deg) translate(182px);
    }
    91.3%{
        transform: rotate(330deg) translate(230px);
    }
    100%{
        transform: rotate(360deg) translate(240px,0);
    }

`;

const identifier3 = keyframes`
  0%{
        transform: rotate(0deg) translate(260px);
    }
    8.3%{
        transform: rotate(30deg) translate(250px);
    }
    16.6%{
        transform: rotate(60deg) translate(202px);
    }
    24.9%{
        transform: rotate(90deg) translate(185px);
    }
    33.2%{
        transform: rotate(120deg) translate(202px);
    }
    41.5%{
        transform: rotate(150deg) translate(250px);
    }
    49.8%{
        transform: rotate(180deg) translate(260px);
    }
    58.1%{
        transform: rotate(210deg) translate(250px);
    }
    66.4%{
        transform: rotate(240deg) translate(202px);
    }
    74.7%{
        transform: rotate(270deg) translate(185px);
    }
    83.1%{
        transform: rotate(300deg) translate(202px);
    }
    91.3%{
        transform: rotate(330deg) translate(250px);
    }
    100%{
        transform: rotate(360deg) translate(260px,0);
    }`;
const identifier4 = keyframes`
  0%{
        transform: rotate(0deg) translate(280px);
    }
    8.3%{
        transform: rotate(30deg) translate(270px);
    }
    16.6%{
        transform: rotate(60deg) translate(222px);
    }
    24.9%{
        transform: rotate(90deg) translate(205px);
    }
    33.2%{
        transform: rotate(120deg) translate(222px);
    }
    41.5%{
        transform: rotate(150deg) translate(270px);
    }
    49.8%{
        transform: rotate(180deg) translate(280px);
    }
    58.1%{
        transform: rotate(210deg) translate(270px);
    }
    66.4%{
        transform: rotate(240deg) translate(222px);
    }
    74.7%{
        transform: rotate(270deg) translate(205px);
    }
    83.1%{
        transform: rotate(300deg) translate(222px);
    }
    91.3%{
        transform: rotate(330deg) translate(270px);
    }
    100%{
        transform: rotate(360deg) translate(280px,0);
    }`;
const identifier5 = keyframes`
  0%{
        transform: rotate(0deg) translate(300PX);
    }
    8.3%{
        transform: rotate(30deg) translate(290PX);
    }
    16.6%{
        transform: rotate(60deg) translate(242PX);
    }
    24.9%{
        transform: rotate(90deg) translate(225px);
    }
    33.2%{
        transform: rotate(120deg) translate(242PX);
    }
    41.5%{
        transform: rotate(150deg) translate(290PX);
    }
    49.8%{
        transform: rotate(180deg) translate(300PX);
    }
    58.1%{
        transform: rotate(210deg) translate(290PX);
    }
    66.4%{
        transform: rotate(240deg) translate(242PX);
    }
    74.7%{
        transform: rotate(270deg) translate(225px);
    }
    83.1%{
        transform: rotate(300deg) translate(242PX);
    }
    91.3%{
        transform: rotate(330deg) translate(290PX);
    }
    100%{
        transform: rotate(360deg) translate(300PX,0);
    }`;
const identifier6 = keyframes`
  0%{
        transform: rotate(0deg) translate(320PX);
    }
    8.3%{
        transform: rotate(30deg) translate(310PX);
    }
    16.6%{
        transform: rotate(60deg) translate(262PX);
    }
    24.9%{
        transform: rotate(90deg) translate(245px);
    }
    33.2%{
        transform: rotate(120deg) translate(262PX);
    }
    41.5%{
        transform: rotate(150deg) translate(310PX);
    }
    49.8%{
        transform: rotate(180deg) translate(320PX);
    }
    58.1%{
        transform: rotate(210deg) translate(310PX);
    }
    66.4%{
        transform: rotate(240deg) translate(262PX);
    }
    74.7%{
        transform: rotate(270deg) translate(245px);
    }
    83.1%{
        transform: rotate(300deg) translate(262PX);
    }
    91.3%{
        transform: rotate(330deg) translate(310PX);
    }
    100%{
        transform: rotate(360deg) translate(320PX,0);
    }`;
const identifier7 = keyframes`
  0%{
        transform: rotate(0deg) translate(340PX);
    }
    8.3%{
        transform: rotate(30deg) translate(330PX);
    }
    16.6%{
        transform: rotate(60deg) translate(282PX);
    }
    24.9%{
        transform: rotate(90deg) translate(265px);
    }
    33.2%{
        transform: rotate(120deg) translate(282PX);
    }
    41.5%{
        transform: rotate(150deg) translate(330PX);
    }
    49.8%{
        transform: rotate(180deg) translate(340PX);
    }
    58.1%{
        transform: rotate(210deg) translate(330PX);
    }
    66.4%{
        transform: rotate(240deg) translate(282PX);
    }
    74.7%{
        transform: rotate(270deg) translate(265px);
    }
    83.1%{
        transform: rotate(300deg) translate(282PX);
    }
    91.3%{
        transform: rotate(330deg) translate(330PX);
    }
    100%{
        transform: rotate(360deg) translate(340PX,0);
    }`;
const identifier8 = keyframes`
  0%{
        transform: rotate(0deg) translate(360PX);
    }
    8.3%{
        transform: rotate(30deg) translate(350PX);
    }
    16.6%{
        transform: rotate(60deg) translate(302PX);
    }
    24.9%{
        transform: rotate(90deg) translate(285px);
    }
    33.2%{
        transform: rotate(120deg) translate(302PX);
    }
    41.5%{
        transform: rotate(150deg) translate(350PX);
    }
    49.8%{
        transform: rotate(180deg) translate(360PX);
    }
    58.1%{
        transform: rotate(210deg) translate(350PX);
    }
    66.4%{
        transform: rotate(240deg) translate(302PX);
    }
    74.7%{
        transform: rotate(270deg) translate(285px);
    }
    83.1%{
        transform: rotate(300deg) translate(302PX);
    }
    91.3%{
        transform: rotate(330deg) translate(350PX);
    }
    100%{
        transform: rotate(360deg) translate(360PX,0);
    }`;

const identifier9 = keyframes`
  0%{
        transform: rotate(0deg) translate(380PX);
    }
    8.3%{
        transform: rotate(30deg) translate(370PX);
    }
    16.6%{
        transform: rotate(60deg) translate(322PX);
    }
    24.9%{
        transform: rotate(90deg) translate(305px);
    }
    33.2%{
        transform: rotate(120deg) translate(322PX);
    }
    41.5%{
        transform: rotate(150deg) translate(370PX);
    }
    49.8%{
        transform: rotate(180deg) translate(380PX);
    }
    58.1%{
        transform: rotate(210deg) translate(370PX);
    }
    66.4%{
        transform: rotate(240deg) translate(322PX);
    }
    74.7%{
        transform: rotate(270deg) translate(305px);
    }
    83.1%{
        transform: rotate(300deg) translate(322PX);
    }
    91.3%{
        transform: rotate(330deg) translate(370PX);
    }
    100%{
        transform: rotate(360deg) translate(380PX,0);
    }`;

const identifier10 = keyframes`
  0%{
        transform: rotate(0deg) translate(400PX);
    }
    8.3%{
        transform: rotate(30deg) translate(390PX);
    }
    16.6%{
        transform: rotate(60deg) translate(342PX);
    }
    24.9%{
        transform: rotate(90deg) translate(325px);
    }
    33.2%{
        transform: rotate(120deg) translate(342PX);
    }
    41.5%{
        transform: rotate(150deg) translate(390PX);
    }
    49.8%{
        transform: rotate(180deg) translate(400PX);
    }
    58.1%{
        transform: rotate(210deg) translate(390PX);
    }
    66.4%{
        transform: rotate(240deg) translate(342PX);
    }
    74.7%{
        transform: rotate(270deg) translate(325px);
    }
    83.1%{
        transform: rotate(300deg) translate(342PX);
    }
    91.3%{
        transform: rotate(330deg) translate(390PX);
    }
    100%{
        transform: rotate(360deg) translate(400PX,0);
    }`;

const Player1 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: blue;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(220px);
  animation: ${identifier1} 15s linear 1;
`;

const Player2 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: green;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(240px);
  animation: ${identifier2} 15s linear 1;
`;

const Player3 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: yellow;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(260px);
  animation: ${identifier3} 15s linear 1;
`;

const Player4 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: aqua;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(280px);
  animation: ${identifier4} 15s linear 1;
`;

const Player5 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: black;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(300px);
  animation: ${identifier5} 15s linear 1;
`;

const Player6 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: orange;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(320px);
  animation: ${identifier6} 15s linear 1;
`;
const Player7 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: white;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(340px);
  animation: ${identifier7} 15s linear 1;
`;
const Player8 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: tomato;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(360px);
  animation: ${identifier8} 15s linear 1;
`;
const Player9 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: gray;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(380px);
  animation: ${identifier9} 15s linear 1;
`;
const Player10 = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: darkblue;
  position: absolute;
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  transform: translate(400px);
  animation: ${identifier10} 15s linear 1;
`;

export default index;
