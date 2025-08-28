import React from 'react'
import styles from './SideMenu.module.css'
import { useLocation } from 'react-router-dom'

const SideMenu = () => {
  //useLocation hook은 현재 url의 정보를 객체로 리턴한다.
  const urlInfo = useLocation();
  //현재 접근한 url 주소
  console.log(urlInfo.pathname);

  //마이페이지에 접근했다면 url이 '/user'로 시작한다.
  const url = '/admin/cart';
  console.log(url.startsWith('/admin'));
  console.log(url.startsWith('/user'));

  return (
    <div className={styles.container}>
      {
        //url이 '/user'로 시작되는 문자열이면...
        urlInfo.pathname.startsWith('/user')
        ?
        <div className={styles.menu_category}>
          <p>
            <span>
              <i className="bi bi-bag-fill"></i>
            </span>
            마이페이지
          </p>
          <ul className={styles.side_menu}>
            <li className={styles.active}>장바구니</li>
            <li>구매 내역</li>
            <li>내 정보 관리</li>
          </ul>
        </div>
        :
        <>
          <div className={styles.menu_category}>
        <p>
          <span>
            <i className="bi bi-bag-fill"></i>
          </span>
          상품관리
        </p>
        <ul className={styles.side_menu}>
          <li>카테고리관리</li>
          <li className={styles.active}>도서등록</li>
          <li>도서관리</li>
        </ul>
      </div>
      <div className={styles.menu_category}>
        <p>
          <span>
            <i className="bi bi-person-lines-fill"></i>
          </span>
          고객관리
        </p>
        <ul className={styles.side_menu}>
          <li>고객정보관리</li>
          <li>고객정보변경</li>
          <li>게시판관리</li>
        </ul>
      </div>
      <div className={styles.menu_category}>
        <p>
          <span>
            <i className="bi bi-clipboard-data-fill"></i>
          </span>
          매출관리
        </p>
        <ul className={styles.side_menu}>
          <li>월별매출관리</li>
          <li>주간매출관리</li>
          <li>연간매출관리</li>
        </ul>
      </div>
        </>
      }
      
    </div>
  )
}

export default SideMenu