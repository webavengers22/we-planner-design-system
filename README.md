## We-planner Design System

### ๐ฉโ๐ป๐ป

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

- ์ ๋ช๋ น์ด๋ฅผ ์๋ ฅํ์ฌ ์์กด์ฑ ๋ชจ๋์ ์ค์น

### Test

```bash
yarn storybook
npm run storybook
```

- Storybook์ ํตํด ๊ตฌ์ฑํ ์ปดํฌ๋ํธ๋ฅผ ํ์ธํ๊ณ , ๊ฐ์ข ๋ณ์๋ฅผ ์ค์๊ฐ์ผ๋ก ์กฐ์ํ  ์ ์์.
- Storybook์ ์ฌ์ฉ๋ฒ์ [Storybook ๊ณต์ ์ฌ์ดํธ](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)๋ฅผ ์ฐธ๊ณ 

### Build

```bash
yarn build
npm run build
```

- Rollup.js๋ก ๋น๋๋ฅผ ์ํ.
- ๋น๋ ์ค์ ์ `rollup.config.js`์ ๋ช์๋จ.
- ๋น๋ ๊ฒฐ๊ณผ๋ฌผ์ `dist/`์ ์ถ๋ ฅ.

## Structure

    .
    โโโ .storybook
    โโโ node_modules
    โโโ public
    โโโ src
    โโโ .gitignore
    โโโ package.json
    โโโ README.md
