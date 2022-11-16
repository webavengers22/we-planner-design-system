## We-planner Design System

### 👩‍💻💻

- Typescript
- React
- Storybook
- Rollup
- npm

### Install Dependencies

```bash
# npm
npm install
```

- 위 명령어를 입력하여 의존성 모듈을 설치

### Test

```bash
yarn storybook
npm run storybook
```

- Storybook을 통해 구성한 컴포넌트를 확인하고, 각종 변수를 실시간으로 조작할 수 있음.
- Storybook의 사용법은 [Storybook 공식 사이트](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)를 참고

### Build

```bash
yarn build
npm run build
```

- Rollup.js로 빌드를 수행.
- 빌드 설정은 `rollup.config.js`에 명시됨.
- 빌드 결과물은 `dist/`에 출력.

## Structure

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md
