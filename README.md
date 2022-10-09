# Haii_API

## 📌 개요
- Admin용 데이터 관리 프로그램


## 📌 구현 기능
```
1. 회원가입 기능
- 필수 구현
  - 이름, 아이디, 패스워드, 전화번호, 담당 지역을 파라미터로 받아 대표 관리자와 지역별 담당자를 ‘유저' 테이블에 생성합니다. 단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
  - 대표 관리자는 모든 데이터를 읽고 쓸 수 있는 권한을 가집니다.
  - 각 지역별 담당자는 데이터를 조회할 수 있는 권한만을 가집니다.

2. 로그인 기능
- 필수 구현
  - 대표 관리자와 지역별 담당자는 회원가입 시 작성한 아이디와 패스워드를 가지고 로그인을 할 수 있습니다.
  - JWT 인증방식을 사용하여 사용자 인증을 처리합니다.
  - 유효한 토큰값인지 검증해야 합니다.
- 선택 구현 (가산점)
  - 토큰이 만료되면 재발급을 받습니다. 인증을 진행하지 않고 재발급 받기 위해 Refresh-Token을 생성해보세요.

3. 회원 정보 수정 기능
- 필수 구현
  - 대표 관리자는 자신 또는 지역별 담당자의 이름, 전화번호, 담당 지역을 수정할 수 있습니다.단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
- 선택 구현 (가산점)
  - 데이터베이스에서 업데이트된 시점을 알 수 있도록 컬럼을 추가합니다.

4. 회원 정보 수정 기능
- 필수 구현
  - 대표 관리자는 자신 또는 지역별 담당자의 이름, 전화번호, 담당 지역을 수정할 수 있습니다.단, 대표 관리자는 특정 담당 지역을 가지고 있지 않습니다.
- 선택 구현 (가산점)
  - 데이터베이스에서 업데이트된 시점을 알 수 있도록 컬럼을 추가합니다.

5. JSON 데이터 파싱 후, 데이터베이스 저장
- 필수 구현
  - 대표 관리자가 ‘치매센터’ 테이블에 각 치매센터에 대한 상세 데이터를 저장합니다.
- 선택 구현 (가산점)
  - ‘치매센터’ 테이블에 모든 데이터를 넣을 필요는 없습니다. 각 지역별 담당자들은 담당자가 속한 지역에 대한 데이터만을 조회할 수 있다는 것을 명심하여 인덱스, 릴레이션 등을 고려하여 데이터베이스 스키마를 자유롭게 설계해보세요.

6. 엑셀 다운로드 기능
- 필수 구현
  - 각 지역별 담당자는 해당 지역에 대한 데이터만을 조회하여 엑셀 파일로 다운로드받을 수 있어야 하며, 이때 해당 지역은 ‘시/도’ 단위로 구분됩니다.
  - 엑셀 컬럼 명은 JSON 데이터 필드명과 동일해야 합니다.
- 선택 구현 (가산점)
  - 아래의 조회 조건을 추가합니다.
  - ‘치매센터명', ‘운영기관대표자명', ‘운영기관전화번호': 단어 부분 검색 가능
  - ‘치매센터유형': 모든 단어 일치
  - ‘의사인원수’, ‘간호사인원수', ‘사회복지사인원수': 일정 숫자 이상 검색 가능
```

    
## 📌 적용 기술

- 사용언어 : `Javascript`
- 런타임 환경 : `Node.js`
- 프레임워크 : `Express`
- 데이터베이스 : `Mysql`

## 실행방법

### 1.해당 레포지토리를 clone합니다.

```
git clone https://github.com/AhnSang0915/pre_onboarding_4team_Haii
```

### 2. 다운 받으신 폴더로 들어갑니다

```
cd pre_onboarding_4team_Haii
```

### 3. 의존성들을 설치합니다.

```
npm i
```

### 4. 실행시킵니다!

```
npm start
```

### 📌DB 모델링 및  조건 및 졔약사항
<img width="958" alt="스크린샷 2022-10-09 오후 10 17 01" src="https://user-images.githubusercontent.com/68211978/194759127-654beda6-cd2f-45c3-85c1-652d6870ddb0.png">


## 📌 프로젝트 구조
Layered achitecture으로 routers - controllers - services - models
```
📦Haii
 ┣ 📂controllers
 ┣ 📂database
 ┣ 📂middleware
 ┣ 📂models
 ┣ 📂modules
 ┣ 📂prisma
 ┣ 📂routes
 ┣ 📂services
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜server.js
```
## 📌 swagger API
### swagger 명세서 확인 순서
```
npm start
```
```
http://localhost:8000/api-docs/
```


## 📌 구현 기능 소개 swaggerAPI test 방법
- 박 지은 - 회원가입 기능
    



   

- 이 해연 - 회원 정보 수정 기능
   


- 김 현정 - 엑셀 다운로드 기능
  - 데이터 가져오기: 
    - 헤더로 token을 받아와서 복호화 후 user_id를 가져오기
    - 해당 user_id와 query로 받아온 각종 parameter들을 사용해 데이터 추출을 위한 query문 작성
    
- 안 수철 - 엑셀 다운로드 기능
  - 엑셀 다운로드: 
    - 받아온 데이터를 엑셀으로 다운로드. haii.xlsx 파일 위치는 해당 프로젝트 폴더 내부
    - 컬럼명을 JSON 데이터 필드명과 동일하게 맞춤
  - 데이터 가져오기:
    - 필터링 세부 query문 작성
  
<img width="1127" alt="스크린샷 2022-10-10 오전 4 22 58" src="https://user-images.githubusercontent.com/97499865/194775696-e55dde70-329c-4cdb-b4c1-9a8dc1bf6986.png">

<img width="1136" alt="스크린샷 2022-10-10 오전 4 11 38" src="https://user-images.githubusercontent.com/97499865/194775278-b200d6ab-4017-44cb-b3ed-eae45d11fc3d.png">



- 최 정훈 - 로그인 기능 및 Swagger init
   - 로그인 기능 설명 : Jsonwebtoken, Bcrypt을 이용하여 token 발행하는 로그인API구현

      - user/login 명세서의 try it out을 클릭 후 body값에 아래의 값을 넣어 Execute 진행
```
{
    "email":"aaa123@Haii.com", 
    "password":"a12345678@"
}
```
<img width="1403" alt="스크린샷 2022-10-09 오후 10 29 03" src="https://user-images.githubusercontent.com/68211978/194759590-bc510e91-f21b-4b06-8275-1b860ced6f7e.png">


- 안 상현 - JSON 데이터 파싱 후, 데이터베이스 저장
   - 기능 설명 : json데이터를 사용 데이터베이스에 맞게 파싱한 후 데이터 베이스 전송 API 구현
   - 데이터 저장을 위해 치매센터가 저장되어 있는 json파일이 필요합니다.
   
      - parsing 명세서의 try it out을 클릭 후 발급받은 token을 넣어 테스트
      - region값이 "대표"인 유저의 토큰이 대표관리자의 토큰입니다.
<img width="1403" alt="스크린샷 2022-10-10 오후 10 29 03" src="https://user-images.githubusercontent.com/99232122/194769457-cd9ac11a-fcda-4343-bf8b-9e9015c99df3.png">

   - 응답 코드
      - 성공(200) 
        - message: data parsing success
      - 권한없음(400) 
        - message: you are not a representative manager
      - 토큰이없을때(500) 
        - message: jwt must be provided
        
   - 구현 설명
     
     - 지역별 관리자를 구분하기 위해 users table에 region을 참조받게 모델링 했습니다.
     - 권한을 확인하기 위해 users table에 token에서 유저의 고유 id로 grade를 확인하는 기능을 사용 했습니다.
     - 반복 요청시 이미 존재하는 데이터가 저장되지 않게 하기 위해 INSERT IGNORE을 사용 했습니다.
       - regions table의 region과 centers table의 latitude, longitude를 unique로 처리해 관리 했습니다.
     - 권한이 없는 token으로 요청이 들어올 경우 데이터에 접근하기 전 에러를 반환했습니다.
 
   - 기능 구현 시 어려웠던 점과 그에 대한 해결 방안을 모색하기 위해 노력한 점
     
     - node.js를 사용한 경험이 부족해 전체적으로 어려웠습니다. 프로젝트의 구조부터 이해하려 했고 구현하는 중에도 javascript의 기본 문법을 찾아보며 구현 했습니다.
     - 데이터 파싱이라는 단어가 생소하여 파싱이 무엇인지 부터 찾아보았습니다.
     - 처음 기능을 기획할때는 json파일을 직접 파싱하는게 아닌 openAPI를 사용해 구현하려고 했지만 openAPI가 승인되지 않아 json파일을 직접 파싱하는 방법을 사용하게 되었습니다.
     - 같은 데이터로 반복 요청시 중복된 데이터저장을 방지하는 로직을 구현하기 위해 테이블 데이터와 비교하는 방법을 생각했지만 검색중 INSERT IGNORE기능을 알게되어 사용해 보았습니다.
     - 토큰에서 받아온 사용자의 고유 아이디로 권한을 확인하는 과정이 어려웠습니다. 팀원에게 도움을 받아 권한을 확인하는 함수를 작성해 해결했습니다.
     - sql문을 사용해본 경험이 적어 기본적인 문법부터 검색해 사용했습니다.
   


## 📌 Commit Convention
```
Feat(Add) : 새로운 기능 추가 
Fix : 버그 수정 
Docs : 문서 수정 
Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 
Refactor: 코드 수정
Test : 테스트 코드, 리펙토링 테스트 코드 추가 
Comment: 필요한 주석 추가 및 변경
Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove: 파일을 삭제하는 작업만 수행하는경우

```
