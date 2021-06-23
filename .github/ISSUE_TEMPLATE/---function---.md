---
name: "** Function **"
about: Function
title: "[Function] "
labels: feature, function
assignees: askePhoenix

---

**[ Story Url ]**
- YouTrack : https://develop-side-site.myjetbrains.com/youtrack/issue/SIDE-5

**[ 의존 Function ]**
- 없음

**[ 의존 Component ]**
- - [ ] 각 contents view 에 사용하는 컴포넌트

**[ 개발 내용 ]**
- Add Template Function Test code
- 입력받은 html 태그를 jsx 태그로 변환합니다.

**[ 작업 순서 ]**
1. - [ ] 테스트 코드 작성 : jsx - \<div>test code\<div> 출력
2. - [ ] 실제 기능 추가 작성 및 테스트 수정

**[ Name ]**
- SiteTagMaker( String context )

**[ Using URL ]**
- /blogs/:blog/reviews/:review

**[ 타입 ]**
- Const Function

**[ 매개 변수 ]**
- String context : html 태그의 문자열

**[ defaultProps ]**
```json
{
  "context" : ""
}
```

**[ 기능 ]**
1. context 값을 html 이라고 가정하고 jsx 형태의 값으로 변환한다. : regex 활용
2. 예외처리 - html dom 이 잘못되어있는 경우 그대로 출력한다.
3. 변환된 태그의 컴포넌트를 불러오고 모두 jsx로 반환한다.
4. 예외처리 - String이 반환된 경우, <div>{ 해당 String }</div> 형태의 jsx로 반환한다.

**[ 결과 ]**
- Jsx

**[ 주의사항 ]**
- 없습니다.

**[ 추가 내용 ]**
- 변환 알고리즘은 작성중입니다.
- 구상중인 알고리즘 : 꼬리재귀
