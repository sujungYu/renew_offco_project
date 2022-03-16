# 2022.3.15~ offco 프로젝트 업데이트

전반적인 업데이트 항목
1. async&await 사용
2. 컴포넌트 재활용성 높임(중복 코드 줄임)
3. 라우터를 코드스플리팅으로 구헌(페이지 로딩 속도 개선 효과)

##3.15
LoginPage, SignupPage(로그인, 회원가입 컴포넌트)
1. 중복확인, 비밀번호 확인을 바로 알 수 있도록 p태그로 메시지 추가
2. 로그인 유지 유무에 관계없이 사용자 정보를 localStorage에 담았었지만 로그인 체크가 ture 일때만 localStorage에 사용자 정보를 담고 false 일때는 담지않음 (false 일때는 state 값을 이용해 router path 설정)

##3.16
HomePage, NotFoundPage, Modal(전체홈 컴포넌트)
1. 새 방을 만들때 빈배열 추가해 post 해줌으로써 해당부분에 user 정보 post 할 수 있게 되었음
(저번에 이 부분을 구현하지 못해 axios.get을 두번하는 방법으로 해결(불필요한 코드))
2. 달력부분에도 사용되는 modal 컴포넌트는 common 컴포넌트를 사용해 구현
(slot을 사용했음)
3. 사용자가 없는 페이지에 접근할 경우를 대비해 NotFoundPage를 만들어 주었음
