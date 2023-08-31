# ormi3_project_1

오르미3기 프로젝트 1 

ChatGPT를 이용하여 명언을 추천 해주는 사이트 

2023/08/29 ----------

작업
  1. 프로젝트 주제 

    "오늘은 뭘 할까?"(가제)로 잡고 "명언 제조기"와 "무료 이미지 생성" 홈페이지로 시작 

  2. Prototype page 제작

    page 1 : ChatGPT API를 이용한 명언 생성(주제를 넣을수 있는 input창과 생성버튼(주제없이 생성버튼 누르면 랜덤생성이 되는 방식), (무료 랜덤 이미지를 해주는 사이트와 연결 하여, 생성 버튼을 누르면 사이트와 연결하여 랜덤으로 이미지를 보여주는 방식)


![크기변환 프로젝트 1](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/11e9d0ab-5a8d-4cf7-b57e-350371edc2fb) ![크기변환 프로젝트 2](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/196ba819-d4dc-4702-9c5f-2d8e7b652540)


2023/08/30 ----------

작업
  1. Prototype page에서 무료 이미지 생성 page 2를 삭제

    page 하나를 다 사용 할 만큼 무료 이미지 생성이란 주제가 좀 아까웠고, 단순 하이퍼링크로 따와서 보여주는 식이란 방식, 그리고 무료 이미지라고 했지만 그래도 저작권이 있을수 있다는 리스크와 피드백도 있어서 삭제 결정
  
  2. 삭제된 page 2에 생성된 명언을 저장 할수 있는 "명언 저장소" page로 바꿔서 제작

    생성된 명언을 저장 하는게 좋지 않을까? 란 피드백을 받아 생성된 명언을 page 2에 명언 저장소란 이름으로 만들어 page 1에서 생성된 명언 데이터를 LocalStorage에 Key,Value값을 저장하여 page 2 로 넘겨서 출력해주는 식으로 page를 구성 
  
  3. "명언 저장소에 저장된 명언들을 전부 삭제 시키는 "목록 초기화" 버튼 생성

    명언이 생성되면 계속해서 쌓이기만 하고 지울수가 없는 상태라서 목록 전체를 없애는 버튼을 생성하였으며, 이때 "목록 초기화" 버튼은 LocalStorage에 저장된 자체를 다 삭제하는 remove코드식으로 만들어 저장된 값을 모두 지우는 방식으로 제작

  4. 카카오 Oven으로 피드백용 가상 홈페이지 제작
    
문제점
  1. "명언 저장소"에 있는 "목록 초기화" 버튼의 LocalStorage 값을 모두 지운다는 점에서 그 값을 활용 하지 못한다는 점

  2. "명언 저장소"에 명언이 쌓이면 페이지 밑으로 계속 내려가면서 생성 되는 바람에 page 자제 스크롤을 내려가며 "목록 초기화" 버튼을 눌려야 한다는 불편함

피드백
  1. "무료 이미지 생성"의 불필요성

    "명언 생성" 페이지의 배경 이미지를 넣는게 더 좋을꺼 같다는 피드백
  
  2. "명언 저장소"에 저장된 명언들 중 마음에 드는 것만 저장할수 있도록 선택적으로 삭제가 가능한 기능에 대한 피드백

    "LocalStorage에 있는 값을 그나마 활용하는 방안으로 생성되어 저장된 명언 각각에 삭제 버튼을 생성 만든다는 방향으로 제작


![크기변환 프로젝트2-1](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/43b0ea39-b95f-4a74-9736-020baba4a93b)![크기변환 프로젝트2-2](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/eaa1acdd-d0e4-4b4c-aeef-7ddbb9a52c58)


---------- 카카오 Oven으로 피드백용 가상 홈페이지 ----------


![크기변환 프로젝트2-3](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/0d1cede7-2118-427e-8207-203754e05003)![크기변환 프로젝트2-4](https://github.com/Ha-JinSung/ormi3_project_1_WS.github.io/assets/142278871/872141aa-627f-49a0-9a89-00cce0e8fe1f)


  
