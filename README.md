# realtime-text-editing

Naver Hackday; webnovel-live
JIYUN LEE

1. Clone this repo

```
$ git clone https://github.com/llb1026/realtime-text-editing.git
$ cd realtime-text-editing
```

2. Set up

```
$ npm install
```

3. Make SSL cert files

```
$ mkdir cert   // create new folder in the project root folder
$ cd cert
$ openssl genrsa 1024 > key.pem  // RSA-1024 알고리즘으로 키를 생성한다
$ openssl req -x509 -new -key key.pem > cert.pem  // 이후 인증서를 만드는 기관에 대한 정보를 입력하는데, 자신의 정보를 입력하면 된다
```

4. Run project

```
$ npm start
```

then open https://localhost:3000/ in multiple browsers

*You can choose **only one** browser to edit the text in the textarea and see other browsers reflect what you're typing in real-time.*
*Unfortunately, it doesn't allow multi-user editing for now. But it will be improved soon.*
