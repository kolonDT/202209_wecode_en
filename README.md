# 202209_wecode_fr

## 내부 설문조사 툴 제작 프로젝트



--- 
<img width="1440" alt="스크린샷 2022-10-15 오후 1 57 22" src="https://user-images.githubusercontent.com/95282989/195969547-07829d43-6bfd-4d8c-8cac-cf4479857adc.png">

## 프로젝트 소개
---

코오롱글로벌 x 위코드
<br>
BPS Form - Survey Tool 기획으로 Survey Tool 제작
<br>
<br>

유저 플로우 :
<br>
로그인 > 템플릿 > 에디터(내용 입력 및 스타일 수정) > 배포 > 응답자 설문지 작성 후 통계 확인
<br>
<br>
개발은 초기 세팅부터 모두 직접 구현하였습니다
<br>


---

### FE
<table>
  <tr>
    <td>
      <a href="https://github.com/Joeunji0119">
            <img src="https://avatars.githubusercontent.com/u/95282989?v=4" width="100px"/>
        </a>
    </td>
    <td>
      <a href="https://github.com/CodyMan0">
          	<img src="https://ca.slack-edge.com/TH0U6FBTN-U03JHMEQ02X-6cffc3092879-512" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>조은지</b></td>
    <td><b>이주영</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>

[프론트 깃허브로](https://github.com/kolonDT/202209_wecode_fr)

### BE
<table>
  <tr>
    <td>
    	 <a href="https://github.com/Mjj4682">
          <img src="https://avatars.githubusercontent.com/u/105341553?v=4" width="100px"/>
        </a>
    </td>
     <td>
    	 <a href="https://github.com/sockwon">
          <img src="https://avatars.githubusercontent.com/u/88824305?v=4" width="100px"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><b>문정진</b></td>
    <td><b>이석원</b></td>
  </tr>
  <tr>
    <td><b>Back-End</b></td>
    <td><b>Back-End</b></td>
  </tr>
</table>

[백앤드 깃허브](https://github.com/kolonDT/202209_wecode_en)


## 프로젝트 소개
### 프로젝트 기간

- 프로젝트 구현 : 22.9.19 ~ 22.10.13(N일)
- 버그 수정 및 리팩토링 : 22.10. 16 ~
- [구현 기능 데모 영상]()

##  기술 스택
<div align=left>
- 프론트엔드 <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/CRA-58c3cc?style=flat-square&logo=Create-React-App&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router Dom-gray?style=flat-square&logo=React-Router&logoColor=F6BB43"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/eslint-000066?style=flat-square&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/prettier-00CC00?style=flat-square&logo=eslint&logoColor=white"/>


<br>
- 백앤드 <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-008000?style=flat-square&logo=Node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000080?style=flat-square&logo=Express&logoColor=white"/>
  <img src="https://img.shields.io/badge/ MySQL8.0-6441a5?style=flat-square&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-F6BB43?style=flat-square&logo=Postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-F6BB43?style=flat-square&logo=JWT&logoColor=white"/>
<br>
 - 협업 툴 <img src="https://img.shields.io/badge/Notion-1c1c1c?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-553830?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Gather-8B00F?style=flat-square&logo=Gather&logoColor=white"/>

</div>


## (BE)💘 구현 API 및 업무 소개

### 이석원

- Express 초기 세팅

<br/>

### 문정진 : 로그인, 메인, 링크 & 강제종료, 폼 데이터 저장, 미들웨어, 도커 배포

<br>
<br>
1. 로그인 기능 구현
<br>
<br>
- jwt 방식을 통해 구현 <br>
- 입력값이 데이터베이스와 일치하지 않으면 에러 구현
<br>
<br>
2. 메인 페이지 구현
<br>
<br>
- 검색 and 필터링 and pageNo and limit -> 모든 조건을 하나의 쿼리문으로 해결 (다중 필터 기능) <br>
- MySQL 이벤트 스케줄러 사용 (날짜에 따른 상태 자동 업데이트)
<br>
<br>
3. 링크 & 강제 종료 기능 구현
<br>
<br>
- 링크 URL 제공 기능 <br>
- Survey 강제 종료 기능 
<br>
<br>
4. 에디터 폼 데이터 저장 기능
<br>
<br>
- 날짜 형식의 정규식 사용 <br>
- Survey 페이지에 필요한 제목, 질문, 날짜, 랜딩 페이지 등을 DB에 저장 <br>
- 쿼리문 총 5개 실행 -> 추후 리팩터링에 트랜잭션 적용 예정
<br>
<br>
5. 미들웨어
<br>
<br>
- 토큰의 일치 여부 확인 미들웨어 <br>
- 에러 핸들링에 필요한 미들웨어
<br>
<br>
6. 도커 배포
<br>
<br>
- compose 파일로 db, 프론트엔드, 백엔드 한 번에 배포 가능 <br>
- 도커 허브를 통한 이미지 태그 관리
<br>
<br>
<br>
<br>


<br/>

## 프로젝트  Check point!



<br/>

## Back-End 자료

<br/>

### 노션 페이지

<br/>
<img width="1218" alt="스크린샷 2022-10-15 오후 2 38 07" src="https://user-images.githubusercontent.com/95282989/195970941-d291888b-5e4f-4e55-b8ff-434710e24b20.png">




- KODA NOTION
  - tickets 관리
  - convention 공유
  - 일정 공유 
- &#128073; [NOTION 페이지 보러가기](https://www.notion.so/wecode/e45886a68bc94c62bca33747dba8a43e)

<br/>

### Mysql ERD

<br/>

<img width="992" alt="image" src="https://user-images.githubusercontent.com/105341553/196307488-5c28e2a7-3c49-4149-9616-05ea0846643e.png">

<br/>

### API 명세서 (POSTMAN)

<br/>

<img width="1440" alt="스크린샷 2022-10-15 오후 2 27 51" src="https://user-images.githubusercontent.com/95282989/195970530-d087b8cb-e3c0-4ac7-9dc0-c27e031b9247.png">


- API 명세서  
- &#128073; [API 명세서 보러가기](https://www.notion.so/wecode/API-postman-Doc-19b7789bf4db41e392c1eca5d09d8444)

<br/>

## 💘 (FE) 담당 페이지 소개 
### 조은지 : 로그인, 메인, 링크, 통계 페이지, 공통 모달
<br>
<br>
- 1. 로그인 페이지 구현
<br>
<br>
jwt 방식을 통해 구현
각각 id, pw 4글자 입력시 버튼 활성화
<br>
<br>
- 2. 메인 페이지 구현
<br>
<br>
서베이 페이지 네이션 기능 구현
<br>
<br>
- 3. 링크 페이지 구현
<br>
<br>
해당 페이지 설문조사 응답자용 링크 복사 기능
<br>
<br>
- 4. 통계 페이지
<br>
<br>
Rechart 라이브러리 사용 (객관식 통계)
<br>
<br>
- 5. 공통 모달
<br>
<br>
메인과 에디터 페이지에서 쓰이는 공통 모달 작업 
<br>
<br>
<br>
<br>

### 이주영: 공통 네브, 관리자 에디터 페이지, 고객 설문지 페이지 

<br>
<br>
- 1. 공통 네브 Router 기능 (중첩 라우팅)
<br>
<br>
React-Router-dom의 Outlet 내장 함수를 활용하여 원하는 페이지에서만 상단 nav가 보이도록 함.
<br>
<br>
- 2. 선택 질문 항목 추가 및 삭제 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/197448417-5bcb5aa5-2775-48b8-aa76-14ac81765f3e.gif" width="600px">

```jsx
export const QUESTION_ARRAY = (sortIndex, formId, ...args) => {
  return {
    1: (
      <MultipleSingle
        sortIndex={sortIndex}
        question={args[0]}
        option={args[1]}
        onRemove={args[2]}
        formId={formId}
      />
    ),
    
    2: (
      <MultipleMultiple
       ...
      />
    ),
    
    3: (
      <ShortDescription
      ...
      />
    ),
```
왼쪽 선택항목 7개는 각각 id를 가지고 있고 7개 중 하나를 선택하면 해당하는 컴포넌트가 그려지도록 설계했다. 여기서 인자가 3개 이상 있을 경우는 객체로 바꾸는 것이 좋다는 것도 알게 돼어 수정하려고 합니다. 
<br>
<br>
- 3.객관식 질문 양식 중 문제 추가 삭제 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/196628966-e0f21167-9328-433b-a4f6-544c8e6f329d.gif" width="600px">

```jsx
const [optionIndexes, setOptionIndexes] = useState(Object.keys(option));
//객관식 문항수를 상위 컴포넌트로부터 option이라는 props로 받고 있다.

const addOptionIndexes = () => {
    setOptionIndexes([...optionIndexes, optionIndexes.length.toString()]);
  };
...

{optionIndexes.map(idx => (
       <Choice key={idx}>
        ...}
```
객관식 문항이라는 option을 받고 option의 index는 계속 변하는 값이므로 state로 지정하여 관리했습니다. 그리고 이 값을 map을 사용하여 option의 갯수에 따라 문항이 생성되도록 만들었습니다. 여기서 어려움이 있었던 부분은 addOptionIndexes 부분이었습니다,. Object.keys(option)을 사용하면 결과값이 배열에 **문자열**이 담기는 것을 모르고 기능 작동이 안되는 것이었습니다. 알고보니 optionIndexes.length의 결과값이 숫자타입이라는 것을 알게 됐고 어려워보였던 문제지만 굉장히 간단한 문제였다는 것을 알게 됐습니다.

<br>
<br>
- 4. 폼 데이터 생성 및 삭제 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/197449438-9b72c090-8a08-470f-a15b-d0b2de9ba2fa.gif"
width="600px">

```jsx
  //생성
  //최상위 컴포넌트 Editor.js
 <MakeSurvey onSubmit={methods.handleSubmit(onSubmit)}>
 
  //상위 컴포넌트 SurveyEditor.js
  <TitleInput
    placeholder="제목을 입력하세요"
    {...register('surveyName', {
    shouldSelect: true,
    required: {
      value: 'title',
      message: `제목은 필수!`,
               },
     })}
    />
```
각 인풋에 register을 등록하고 마지막 onsubmit이 될때 한번에 폼이 생성되어 보내지도록 하였습니다.
<br>
```jsx
  //삭제
  const methods = useForm({shouldUnregister: true});
```
여기서 많이 해맸었습니다. 선택 항목을 삭제했음에도 불구하고 보내지는 폼에서는 적용이 되지 않는 어려움을 마주했습니다. 하루 종일 다양한 방법을 시도했고 결과적으로 Usehook-Form 공식문서를 통해 shouldUnregister:true를 정의하면 마지막 onsubmit 될때 register된 상태인 input의 form만 생성된다는 것을 알았습니다.

<br>
<br>
- 5. 폼 데이터 안에서 이미지 보내는 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/196628841-66341773-fa1b-4cbe-8eca-4b641e28f03d.gif"
width="600px">
<br>
<br>
- 6. 에디터 및 고객 폼 데이터 유효성 검사 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/197449820-0fc53a72-70dc-4525-a4e9-8a1438ee7a42.gif"
width="600px">

```jsx
  <ErrorMessage
            errors={errors}
            name="surveyName"
            render={({ message }) => (
              <ErrorM>
                <Icon>
                  <MdInfo />
                </Icon>
                {message}
              </ErrorM>
            )}
          />
```

ErrorMessage라는 react-hook-form안에 있는 컴포넌트를 import하여 설정해서 커스텀해주었습니다. name은 해당 register된 이름과 동일하게 설정해주어야 원하는 동작을 하였고 message 또한 미리 설정해주어야 에러 객체가 있을때 message가 보여졌습니다.

<br>
<br>
- 7. 고객 페이지 폼데이터 생성 기능 
<br>
<br>
<img src="https://user-images.githubusercontent.com/93697790/197450258-3042aeb2-3bc0-48f1-b489-21d15804292c.gif"
width="600px">
고객 페이지 폼데이터 또한 관리자 에디터 페이지와 마찬가지로 동일하게 useForm 라이브러리를 사용하여 생성 및 삭제해주었습니다. 
<br>


## 팀 프로젝트 노션 링크 
 - [코다 노션 페이지로 가기](https://www.notion.so/wecode/e45886a68bc94c62bca33747dba8a43e)


## 팀 회고록 
- [코다 회고록 보러가기](https://www.notion.so/wecode/90fad7f2897245e1bb79711d24f9a316)
