FIRST PART: PREPARE PROJECT

001. run: npm init vite@latest web --template react-ts
002. clear the proj leaving only App.tsx, main.Tsx and vite-env.d.ts in /src
003. clear imports from deleted files
004. clear App.tsx to contain only lines:
        export function App() {
        return <h1>Hello Word</h1>;
        }

005. create folder src/styles
006. create file src/styles/global.css
007. get links for font Roboto in https://fonts.google.com/specimen/Roboto (400 and 700)
    and paste them in the header of index.html
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
        />

008. import global.css into src/main.tsx
        import './styles/global.css';
009. download folter assets w/ all images
010. run: npm install sass
011. create components
012. run: npm install react-icons
013. run: npm install axios
014. create folder and file src/services/api.ts
015. create folder and file src/context/auth.tsx
016. create components LoginBox, MessageList and SendMessageForm
017. run: npm install socket.io-client
018. set socket.io in the component MessageList

    