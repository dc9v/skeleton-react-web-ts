# skeleton-react-web-ts

이 코드는 리액트 웹앱 Skeleton code 입니다.

주요 라이브러리는 아래와 같습니다.

- React
- React router dom
- Webpack 
- Babel 
- TypeScript 
- babel-plugin-module-resolver

## 시작하기

```
npm run dev
```

## 주요 설정

### 1. tsconfig.json (paths)

tsconfig.json 의 path alias가 작동되도록 설정했습니다.

*`tsconfig.json`*

```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "/src/*": [
        "./src/*"
      ]
    },
```

*`babel.config.json`*

```json
"plugins": [
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "extension": [
          ".js",
          ".ts",
          ".tsx"
        ],
        "alias": {
          "/src": "./src"
        }
      }
    ]
  ]
```

### 2. URI Path variables

`https://[domain]/:path` 또는 `https://[domain]/*` 과 같은 Path variables 설정을 해두었습니다

*`index.tsx`*

```tsx
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<div>HelloWorld</div>} />
        <Route path="/test" element={<TestRoute />} />
        <Route path="/param/:param" element={<ParamRoute />} />
        <Route path="/wildcard/*" element={<WildcardRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
```

*`ParamRoute.tsx`*

```tsx
const ParamRoute = () =>
{
  const { param } = useParams();
  return (<div>parameter {param}</div>);
};
```

*`WildcardRoute.tsx`*

```tsx
const WildcardRoute = () =>
{
  const param = useParams()["*"]?.split("/") ?? [];

  console.log(param);
  
  return (<div>parameter {param}</div>);
};
```