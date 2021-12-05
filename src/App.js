import React,{ useState } from 'react'
import {Container} from 'react-bootstrap'
import './App.scss';

import mini_icon from './quanton-mini-icon.png';
/*
===========vs code 기능================
- ctrl shft R = 함수로 묶기, move to new file로 옮기기도 가능
- f12 -> 참조 파일 열기
- 단체 rename = 드래그한 뒤에 f2로 하면 관련 변수/ 함수명 모두 변경 가능
- alt 누르고 마우스 클릭? -> 멀티클릭 
- alt shft down -> 해당 줄 복사해서 밑으로
- alt up/down -> 해당줄 이동
- ctrl + p = 파일검색해서 이동
- 0ctrl + ` = 터미널 활성화
*/
function App(){

  let [menuState,setMenuState] = useState([true,false,false,false,false]);
  let [curMenuIdx,setCurMenuIdx] = useState(0);
  return(
    <div className="App">
        <Side menuState={menuState} menuState_modi={setMenuState} ></Side>
        {
          menuState[0] === true
          ? <PortfolioMenu></PortfolioMenu>
          : null
        }
        {
          menuState[1] === true
          ? <FinancialMenu></FinancialMenu>
          : null
        }
        {
          menuState[2] === true
          ? <BackTestingMenu></BackTestingMenu>
          : null
        }
        {
          menuState[3] === true
          ? <MarketConditionMenu></MarketConditionMenu>
          : null
        }
        {
          menuState[4] === true
          ? <HistoryMenu></HistoryMenu>
          : null
        }
    </div>
  );
}
// function menuClick(props){
  
//   props.menuState_modi([false]); 
//   let menu = [...props.menustate];
//   menu[0] = true;
//   props.menuState_modi(menu);
//   console.log(props.menuState);
// }
function Side(props){//컴포넌트는 대문자로시작
  const menuClick = (param) => {
    props.menuState_modi([false]); 
    let menu = Array.from({length:5}, ()=>false);
    menu[param] = true;
    props.menuState_modi(menu);
  }
  return(//div는 여러개 나열될 수 없다.    
    <div className="blue-nav">
      <div className="menu-title">
        <img className='menu-icon' src={mini_icon}></img>
        <span className="menu-text">QuantOn</span>
      </div>
      <div className="menu-list">
        <ul>
          <li className="menu_obj" onClick={ ()=> menuClick(0)}>포트폴리오</li>
          <li className="menu_obj" onClick={ ()=> menuClick(1)}>기업 재무 데이터</li>
          <li className="menu_obj" onClick={ ()=> menuClick(2)}>전략 백테스팅</li>
          <li className="menu_obj" onClick={ ()=> menuClick(3)}>시장 상황</li>
          <li className="menu_obj" onClick={ ()=> menuClick(4)}>투자 일지</li>
        </ul>
      </div>
    </div>
  )
}

function PortfolioMenu(){
  return(
    <div className="content_div">
      <div className="searchBar_div">
        <div className="searchBar"> </div>
      </div>
      <div className="chartBox"></div>
      <div className="detail_div2">
        <div className="inner-title">Portfolio items</div>
        <div className="portfolioItems"></div>
      </div>

      <div className="detail_div3">
        <div className="detail_div3_inner1">
          <div className="inner-title">Performance</div>
          <div className="performance"></div>
        </div>

        <div className="detail_div3_inner2">
          <div className="inner-title">Dividend</div>
          <div className="dividend"></div>
        </div>
      </div>

    </div>

  )

}

function FinancialMenu(){
  return(
    <div className="content_div">
      <div className="searchBar_div">
        <div className="searchBar"> </div>
      </div>
      <div className="f_main">
        <div className="f_innerLeft">
          <div className="f_innerPrice"></div>
          <div className="innerLeftDiv_top">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">손익계산서</li>
              <li className="innerLeftMenuElement">매출액</li>
              <li className="innerLeftMenuElement">영업이익</li>
              <li className="innerLeftMenuElement">세전계속사업이익</li>
              <li className="innerLeftMenuElement">당기순이익</li>
              <li className="innerLeftMenuElement">당기순이익(지배)</li>
              <li className="innerLeftMenuElement">당기순이익(비지배)</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">손익계산서</li>
              <li className="innerLeftMenuElement">매출액</li>
              <li className="innerLeftMenuElement">영업이익</li>
              <li className="innerLeftMenuElement">세전계속사업이익</li>
              <li className="innerLeftMenuElement">당기순이익</li>
              <li className="innerLeftMenuElement">당기순이익(지배)</li>
              <li className="innerLeftMenuElement">당기순이익(비지배)</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">손익계산서</li>
              <li className="innerLeftMenuElement">매출액</li>
              <li className="innerLeftMenuElement">영업이익</li>
              <li className="innerLeftMenuElement">세전계속사업이익</li>
              <li className="innerLeftMenuElement">당기순이익</li>
              <li className="innerLeftMenuElement">당기순이익(지배)</li>
              <li className="innerLeftMenuElement">당기순이익(비지배)</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">손익계산서</li>
              <li className="innerLeftMenuElement">매출액</li>
              <li className="innerLeftMenuElement">영업이익</li>
              <li className="innerLeftMenuElement">세전계속사업이익</li>
              <li className="innerLeftMenuElement">당기순이익</li>
              <li className="innerLeftMenuElement">당기순이익(지배)</li>
              <li className="innerLeftMenuElement">당기순이익(지배)</li>
            </ul>
          </div>
        </div>
        <div className="f_innerRight">
          <div className="f_summary"> </div>
          <div className="f_innerRight_left-div"> 
            <div className="f_shareHolder"></div>
            <div className="f_salesAmount"></div>
            <div className="f_ROE"></div>
            <div className="f_PERPBR"></div>
            <div className="f_cashFlow"></div>
          </div>
          <div className="f_innerRight_right-div">
            <div className="f_operatingProfit"></div>
            <div className="f_financeStatus"></div>
            <div className="f_profitability"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
function BackTestingMenu(){
  return(
    <div className="content_div">
      <div className="b_content">
        <div className="BackTesting_left">
          <div className="searchBar_div">
            <div className="searchBar"> </div>
          </div>
          <div className="b_left_1_div"></div>
          <div className="b_left_2_div"></div>
          <div className="b_left_3_div"></div>
          <div className="b_left_4_div"></div>
        </div>
        <div className="BackTesting_right">
          <div className="BackTesting_bar"></div>
          <span className="BackTesting_Result">백테스트 결과</span>
          <div className="BackTesting_Summary"></div>
          <div className="BackTesting_montly_status"></div>
          <div className="BackTesting_montly_gap"></div>
        </div>
      </div>
    </div>

  )
}
function MarketConditionMenu(){
  return(
    <div className="content_div">
      <div className="searchBar_div">
        <div className="searchBar"> </div>
      </div>
      <div className="chartBox">
      </div>
      <div className="f_main">
        <div className="f_innerLeft">
          <div className="innerLeftDiv_top">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">시장 지수</li>
              <li className="innerLeftMenuElement">S&P 500</li>
              <li className="innerLeftMenuElement">NASDAQ</li>
              <li className="innerLeftMenuElement">DOW</li>
              <li className="innerLeftMenuElement">코스피</li>
              <li className="innerLeftMenuElement">코스닥</li>
              <li className="innerLeftMenuElement">비트코인</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">환율</li>
              <li className="innerLeftMenuElement">미국 USD</li>
              <li className="innerLeftMenuElement">일본 JPY</li>
              <li className="innerLeftMenuElement">유로 EUR</li>
              <li className="innerLeftMenuElement">중국 CNY</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">원자재 / 채권 금리</li>
              <li className="innerLeftMenuElement">금(GOLD)</li>
              <li className="innerLeftMenuElement">원유(WTI)</li>
              <li className="innerLeftMenuElement">미국 10년 채권</li>
              <li className="innerLeftMenuElement">한국 3년 채권</li>
            </ul>
          </div>
          <div className="innerLeftDiv_">
            <ul className="innerLeftMenu_ul">
              <li className="innerLeftMenuTitle">시장 위험도</li>
              <li className="innerLeftMenuElement">VIX 지수</li>
              <li className="innerLeftMenuElement">미국장단기 금리차</li>
              <li className="innerLeftMenuElement">공포/탐욕 지수</li>
            </ul>
          </div>
        </div>
        <div className="m_innerRight">
          <div className="m_innerRight_left-div"> 
            <div className="m_greedy"></div>
            <div className="m_vix"></div>
          </div>
          <div className="m_innerRight_right-div">
            <div className="m_index"></div>
            <div className="m_yield"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
function HistoryMenu(){
  return(
    <div className="content_div">
      <div className="b_content">
        <div className="BackTesting_left">
          <div className="searchBar_div">
            <div className="searchBar"> </div>
          </div>
          <div className="b_left_1_div"></div>
          <div className="b_left_2_div"></div>
          <div className="b_left_3_div"></div>
          <div className="b_left_4_div"></div>
        </div>
        <div className="BackTesting_right">
          <div className="BackTesting_bar"></div>
          <span className="BackTesting_Result">백테스트 결과</span>
          <div className="BackTesting_Summary"></div>
          <div className="BackTesting_montly_status"></div>
          <div className="BackTesting_montly_gap"></div>
        </div>
      </div>
    </div>

  )
}
export default App;
