import "./App.css";  
import React from 'react';


function App() {


  return (
    <body>
      <section id="header-nav">
        <div class="container column">
          <header class="container">
            <div class="item column" id="day">
              <div id="dday">
                <h3>D-7</h3>
              </div>
              <div id="subject">
                <p>프로그래밍 과제</p>
              </div>
            </div>
            <div class="item column" id="login">
              <div id="box">
                <a href="" target="_self">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEzLjMyMyA1MTMuMzIzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTMuMzIzIDUxMy4zMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LjY2MSwyNTcuMzIzYy0xMzUuMjc1LDAtMjQ1LjMzMywxMTAuMDU5LTI0NS4zMzMsMjQ1LjMzM2MwLDUuODg4LDQuNzc5LDEwLjY2NywxMC42NjcsMTAuNjY3DQoJCQlzMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjdjMC0xMjMuNTIsMTAwLjQ4LTIyNCwyMjQtMjI0czIyNCwxMDAuNDgsMjI0LDIyNGMwLDUuODg4LDQuNzc5LDEwLjY2NywxMC42NjcsMTAuNjY3DQoJCQljNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N0M1MDEuOTk1LDM2Ny4zNiwzOTEuOTM2LDI1Ny4zMjMsMjU2LjY2MSwyNTcuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LjY2MSwwYy02NC42ODMsMC0xMTcuMzMzLDUyLjYyOS0xMTcuMzMzLDExNy4zMzNzNTIuNjUxLDExNy4zMzMsMTE3LjMzMywxMTcuMzMzczExNy4zMzMtNTIuNjI5LDExNy4zMzMtMTE3LjMzMw0KCQkJUzMyMS4zNDQsMCwyNTYuNjYxLDB6IE0yNTYuNjYxLDIxMy4zMzNjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NnM0My4wNzItOTYsOTYtOTZjNTIuOTI4LDAsOTYsNDMuMDcyLDk2LDk2DQoJCQlTMzA5LjU4OSwyMTMuMzMzLDI1Ni42NjEsMjEzLjMzM3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                </a>
              </div>
              
               
              <a href="" target="_self">
                <div id="button">로그인</div>
              </a>
            </div>
          </header>
          <nav class="container">
            <a href="" target="_self">
              <div class="item">
                <h4>TO DO LIST</h4>
              </div>
            </a>
            <a href="" target="_self">
              <div class="item">
                <h4>D-DAY</h4>
              </div>
            </a>
            <a href="" target="_self">
              <div class="item">
                <h4>DAILY-NOTE</h4>
              </div>
            </a>
            <a href="" target="_self">
              <div class="item">
                <h4>TIMER</h4>
              </div>
            </a>
          </nav>
        </div>
      </section>

      <section id="summary" class="section">
        <div class="section__container">
          <div class="summary__set">
            <div class="summary__left">
              <h1>[Study Note]</h1>
              <div class="study__note">
                <p>7월 11일 | 알고리즘</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque blanditiis temporibus quisquam cupiditate quam amet
                  velit excepturi deleniti, accusamus laboriosam placeat, natus
                  sit! Suscipit, vero! Saepe totam molestias harum. Tempore.{" "}
                </p>
              </div>
              <div class="study__note">
                <p>7월 11일 | 알고리즘</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum exercitationem veniam sint iusto ad, temporibus placeat
                  ut iure molestias eum, nobis maxime amet? Magni, aliquam
                  dignissimos. Eum enim similique consequuntur.{" "}
                </p>
              </div>
            </div>
            <div class="summary__right">
              <h1>[오늘의 할일]</h1>
              <div class="to__do">
                <ul>
                  <li>숙명여자대학교</li>
                  <li>중앙동아리</li>
                  <li>솔룩스</li>
                </ul>
              </div>
              <h1>[Today's ranking]</h1>
              <div class="ranking">
                <div class="rank__detail">
                  <div class="rank__name">
                    <span>Iron Man</span>
                    <span>4 hours</span>
                  </div>
                  <div class="rank__bar">
                    <div class="rank__value" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div class="rank__detail">
                  <div class="rank__name">
                    <span>Doctor Stranger</span>
                    <span>7 hours</span>
                  </div>
                  <div class="rank__bar">
                    <div class="rank__value" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div class="rank__detail">
                  <div class="rank__name">
                    <span>Black Widow</span>
                    <span>9 hours</span>
                  </div>
                  <div class="rank__bar">
                    <div class="rank__value" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App; 