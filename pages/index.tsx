import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div id='container'>
      <header>
        <div id='inputArea'>
          <img src='/images/logo.png' height='40px' />
          <div id='inputSearch'>
            <input type='text' placeholder='검색어를 입력해보세요.' />
            <i className='fa fa-search' aria-hidden='true'></i>
          </div>
        </div>

        <div id='subMenus'>
          <a>공간 등록</a>
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </header>
      <section>
        <div id='logoTitle'>
          <img src='/images/logo.png' />
          <h1>Easy to use Share Office Platform</h1>
        </div>
        <div id='loginBox'>
          <h1>로그인</h1>
          <form>
            <div id='formArea'>
              <div className='form-control'>
                <label>아이디</label>
                <input type='text' placeholder='아이디를 입력해주세요.' />
              </div>
              <div className='form-control'>
                <label>비밀번호</label>
                <input type='password' placeholder='비밀번호를 입력해주세요.' />
              </div>
              <ul id='findArea'>
                <li><a>아이디 찾기</a></li>
                <li><a>비밀번호 찾기</a></li>
                <li><a>회원가입</a></li>
              </ul>
              <button id='loginBtn'>로그인</button>
            </div>


          </form>
        </div>
      </section>

      <footer>
        <div id='footerWrap'>
          <div id='footerText'>
            <p>
              상호명: SO Easy | 대표: 고종현 | 사업자등록번호 : 851-87-00622 | 서울 강남 제2014-01호<br />
              사업자등록정보 영업소재지: 서울특별시 강남구 테헤란로14길 6 남도빌딩 2F<br />
              이메일: programmer7771@gmail.com 대표전화: 7447-0547(평일 오후 3시30분 ~ 오후 10시)<br />
              온라인 1:1 문의 바로가기(평일 오후 3시30분 ~ 오후 10시) * 공간에 대한 문의사항은 해당 공간 호스트에게 직접 문의해주세요.
            </p>
          </div>
          <div>
            <img src='/images/logo.png' />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
