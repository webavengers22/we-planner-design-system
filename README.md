## We-planner Design System

### 👩‍💻💻

- Typescript
- React
- Storybook
- Rollup
- npm

### Install Dependencies

```bash
# yarn
yarn
# npm
npm install
```

- `yarn`을 설치 권장
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

템플릿을 설치하면 다음과 같은 파일 및 디렉토리가 생성됩니다.

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

1. **`.storybook`**: 이 디렉토리에는 Storybook의 [구성](https://storybook.js.org/docs/react/configure/overview) 파일이 들어 있습니다.

2. **`node_modules`**: 이 디렉토리에는 프로젝트가 의존하는 모든 코드 모듈(npm 패키지)이 포함되어 있습니다.

3. **`public`**: 이 디렉토리에는 사이트의 개발 및 프로덕션 빌드가 포함되어 있습니다.

4. **`src`**: 이 디렉토리에는 애플리케이션에서 볼 수 있는 것과 관련된 모든 코드가 포함되어 있습니다.

5. **`.gitignore`**: 이 파일은 프로젝트 개발 과정에서 추적하거나 업로드 되지 말아야 할 파일을 git에 알려줍니다.

6. **`LICENSE`**: 이 템플릿으로 인해 MIT 라이선스에 따라 라이선스가 부여됩니다.

7. **`package.json`**: 일반적으로 프로젝트별 메타데이터(Ex: 프로젝트 이름, 작성자 등)를 포함하는 Node.js 프로젝트용 표준 매니페스트 파일입니다. 이 파일을 기반으로 npm은 프로젝트에 필요한 패키지를 알 수 있습니다.

8. **`yarn.lock`**: 프로젝트에 설치된 npm 종속성의 정확한 버전을 기반으로 자동 생성된 파일입니다. **(수동으로 변경하지 마십시오).**

9. **`README.md`**: 프로젝트에 대한 유용한 참조 정보가 포함된 마크다운 텍스트 파일입니다.
