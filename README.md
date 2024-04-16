# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# npm create vite@laster

npm install react-router-dom

npm run dev

# 리액트 탬플릿 내용 
vs code 에서 커맨트 + 쉬프트 + P (맥) / 컨트롤 + 쉬프트 + P (윈도우) 를 누른 뒤 입력창에 Configure Snippet 을 입력한다.
나타나는 Preference 를 선택해준다.
javascript 를 입력하고 javaScriptreact.json 을 선택해준다.

	"react componetns": {
		"prefix": "rc",
		"body": [
		  "import React from 'react';",
		  "",
		  "const ${TM_FILENAME_BASE} = () => {",
		  "    const [base, setBase] = useState('');",
		  "",
		  "    return (",
		  "        <div>",
		  "            ${1}",
		  "        </div>",
		  "    );",
		  "}",
		  "",
		  "export default ${TM_FILENAME_BASE};"
		],
		"description": "react componetns"
	  }

https://falaner.tistory.com/66