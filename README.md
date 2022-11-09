## We-planner Design System

- 개발
  - Typescript
  - React
  - Storybook
  - Rollup
  - npm

### 작업의 흐름

- 피그마에서 필요한 모듈 디자인
- 디자인된 모듈을 컴포넌트로 개발 (+ 테스트 코드 추가)
- ./src/index.ts 폴더에 해당 컴포넌트 export 시킴
- `npm run build-rollup` 명령어로 다른 프로젝트에서 사용할 컴포넌트들만 빌드
- package.json 버전 변경
- `npm publish --registry https://www.npmjs.com/package/we-planner-design-system/` 명령어로 사설 저장소에 베이스 디자인 모듈 업데이트
- 다른 프로젝트에서 `npm i we-planner-design-system` 명령어로 설치하여 작성한 컴포넌트들 사용
