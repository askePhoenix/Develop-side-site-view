---
name: "** Domain **"
about: Domain
title: "[Domain] "
labels: domain, feature, test code
assignees: askePhoenix

---

**[ Story Url ]**
- YouTrack : https://develop-side-site.myjetbrains.com/youtrack/issue/SIDE-1

**[ Domain Name ]**
- LoginPage

**[ Domain URL ]**
- /login

**[ 파일 위치 ]**
- /src/domain/login/LoginPage.js

**[ 구성 내용 ]**
- 사용자 로그인 페이지

**[ 구성 컴포넌트 ]**
- 로그인 박스 : https://github.com/askePhoenix/Develop-side-site-view/issues/9

**[ 매개 변수 ]**
- props

**[ defaultProps ]**
```json
{
  "name" : "user"
}
```

**[ 결과 ]**
- Jsx :
  ```html
  <html>
    <LoginBox>
    </LoginBox>
  </html>
  ```

- default - html :
  ```html
  <html>
    <div>
      <label>ID : </label>
      <input type="text">
      <label>Password : </label>
      <input type="text">
    </div>
  </html>
  ```

**[ 주의사항 ]**
- 없습니다.

**[ 추가 내용 ]**
- 작성중인 이슈입니다. (06.22)
