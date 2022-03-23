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

##3.17
RoomHomePage, AcceptRoomPage(각방홈 컴포넌트)
1. common폴더안에 있는 modal컴포넌트를 재활용해 초대링크 창을 만들었음
2. NavBar를 컴포넌트로 따로 분리
3. 이번 업데이트에는 vuex만 이용해 데이터 관리를 하려했으나 부여받은 초대링크를 붙여 넣는 과정에서 
페이지 새로고침이 발생하고 이로인해 vuex안 state데이터가 초기화되는 문제가 발생했다.
이러한 문제는 localStorage를 사용하거나 vuex-persistedstate를 이용해 해결할 예정임

##3.18
store(Vuex)
1. 각방의 정보를 가지고 있는 /rooms 안 users 배열안에 초대된 사람들의 정보도 같은 위치에 넣을 수 있게 했음(axios.get으로 users정보를 불러오고 concat로 복사한 후 axios.patch로 다시 넣었다)
2. 대괄호 안 대괄호에 접근하는 url 관련 문제 직면

##3.21
ToolBar, TodoList, CalendarPage(달력 컴포넌트)
1. 지난번에 해결하지 못했던 대괄호 안 대괄호에 접근하는 문제 해결
(우선 axios.get(/rooms)을 한다음 filter를 이용해 원하는 값을 가져왔음)
2. TodoList 역시 commom/Modal을 이용해 수정했음
3. 새로고침하면 vuex의 state 값이 초기화되어 localSotage를 이용하는 코드로 수정

