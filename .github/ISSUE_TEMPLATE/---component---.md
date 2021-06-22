---
name: "** Component **"
about: Component
title: "[Component] "
labels: component, feature, test code
assignees: askePhoenix

---

**[ Story Url ]**
- YouTrack : https://develop-side-site.myjetbrains.com/youtrack/issue/SIDE-1

**[ 자식 컴포넌트 ]**
- 없음

**[ 파일 위치 ]**
- /src/component/button/designButton/DesignButton.js

**[ 개발 내용 ]**
- Add Template Component Test code
- 사이트에서 사용하는 디자인이 적용된 버튼

**[ Name ]**
- DesignButton

**[ Using URL ]**
- 없음

**[ 컴포넌트 타입 ]**
- JSX

**[ 매개 변수 ]**
- props :
```json
{
  "context" : props.context
}
```

**[ defaultProps ]**
```json
{
  "context" : "default"
}
```

**[ 구성 ]**
- [x] 1. 버튼 기능 및 테스트 코드 초안
- [ ] 2. 디자인 ( 테스트 코드 및 초안 개발 후, 작성 필요합니다. )

**[ 결과 ]**
- Jsx :
  ```html
  <input type="button">
      {props.context}
  </input>
  ```

- default - html :
  ```html
  <input type="button">
      default
  </input>
  ```

**[ 주의사항 ]**
- 없습니다.

**[ 추가 내용 ]**
- 없습니다.
