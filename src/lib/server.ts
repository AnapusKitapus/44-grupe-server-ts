import http, { IncomingMessage, ServerResponse} from 'node:http';

type Server = {
    init: () => void;
    //httpServer: ( http:IncomingMessage, http:ServerResponse) => void;
    httpServer: any;
}

const server = {} as Server;

server.httpServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    let responseContent = '';

    if (req.url === '/') {
        responseContent = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="css/main.css">
                <link rel="stylesheet" href="css/button.css">
            <title>Document</title>
            </head>
            <body>
                <h1>Hello :)</h1>
                <img src="#" alt="Image">
            </body>
            </html>`;
    }

    if (req.url === '/css/main.css') {
        responseContent = `body,
            body * {
                margin: 0;
                padding: 0;
                vertical-align: top;
                box-sizing: border-box;
            }
        
            body {
                font-family: 'Gill Sans', 'Gill Sans MT'}`, 'Trebuchet MS';
    }

    if (req.url === 'css/button.css') {
        responseContent = `.button {background-color: red;}`;
    }

    if (req.url === '/favicon.ico') {
        responseContent = 'Favicon ico failas...';
    }

    return res.end(responseContent);
});

server.init = () => {
    server.httpServer.listen(4410, () => {
        console.log('Serveris sukasi ant http://localhost:4410');
    });
};

export { server };