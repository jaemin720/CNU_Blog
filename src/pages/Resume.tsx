const Resume = () => {
  return <div>
    <div className="head-wrap">
      <h2 data-heading="History" className="heading" id="heading">
        소개
      </h2>
      <div className="heading-children">
        <div>
          <ul>
            <li>충남대학교 컴퓨터융합학부</li>
            <li>충남대 글로벌 SW 인재트랙</li>
          </ul>
        </div>
      </div>
      <h2 data-heading="Language" className="heading" id="heading">
        활용 가능 언어
      </h2>
      <div className="heading-children">
        <div>
          <ul>
            <li>C/C++</li>
            <li>JAVA</li>
          </ul>
        </div>
      </div>
      <h2 data-heading="Study" className="heading" id="heading">
        공부 및 관심 분야
      </h2>
      <div className="heading-children">
        <div>
          <p>정보 보안 분야 - 시스템 해킹/리버스 엔지니어링/웹 해킹</p>
          <p>웹 개발 - FullStack 개발(React, Springboot)</p>
        </div>
      </div>
      <h2 data-heading="Award" className="heading" id="heading">
        수상 내역
      </h2>
      <div className="heading-children">
        <div>
          <ul>
            <li>2023 1학기 Devday 코딩테스트 장려상</li>
            <li>2024 1학기 Devday 코딩테스트 동상</li>
          </ul>
        </div>
      </div>
      <h2 data-heading="Project" className="heading" id="heading">
        프로젝트
      </h2>
      <div className="heading-children">
        <div>
          <ul>
            <li>2023 (09-12월)- 길 따라 밥 찾기</li>
            <li>2023 (09) - [SPG FATI 대회] 자율 주행 자동차 Zumi 주행 개선</li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default Resume;
