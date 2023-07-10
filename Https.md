# HTTPS

HTTPS - HTTP 요청을 SSL 혹은 TSL라는 알고리즘으로 HTTP 통신과정에서 내용을 암호화하여 데이터를 전송하는 방법

- HTTP보다 상대적으로 안전한 방법이고, 데이터 제공자의 신원을 보장받을수 있어서 인증에서 HTTPS 프로토콜을 사용하면 좋음

# 인증서

HTTPS 프로토콜의 특징 중 하나는 브라우저가 응답과 함께 전달된 인증서 정보를 확인가능.
브라우저들은 인증된 CA가 발급한 인증서를 이용하여 데이터를 제공하는 안전한 서버를 사용하도록 사용자를 유도.

## Let's encrypt 발급 방법

$ apt-get update
$ sudo apt-get install certbot
$ apt-get install python3-certbot-nginx

$ sudo certbot --nginx -d example.com -d www.example.com

## Let's encrypt 인증서 자동 갱신

$ crontab -e
0 12 \* \* \* /usr/bin/certbot renew --quiet
