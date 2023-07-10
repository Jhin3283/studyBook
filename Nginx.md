# Nginx

## Nginx 제시작

sudo service nginx restart

## Nginx 설정

/etc/nginx/sites-available - default 파일 수정

## Nginx 구성파일 유효성 검사

sudo nginx -t

## Port에 연결

server {
listen 80;
server_name leo-wifree.com;
return 301 https://$server_name$request_uri;
}
// http로 요청시 https로 리다이렉션
server {
listen 443 ssl;
server_name leo-wifree.com;

    ssl_certificate /leo/ssl/leo-wifree_com_cert.crt;
    ssl_certificate_key /leo/ssl/leo-wifree_com.key;
    ssl_trusted_certificate /leo/ssl/leo-wifree_com_root_cert.crt;

// https로 만들어주는 key, crt 설정
location /api/v1 {
proxy_pass http://localhost:8081;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
// location으로 요청 url에 따른 연결 설정
location /image {
proxy_pass http://localhost:8888;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
}

## Nginx 용량크기 설정

HTTP {}내 client_max_body_size 20M;

## build 파일 연결

server {
listen 80;
server_name admin.leo-wifree.com;
return 301 https://$server_name$request_uri;
}
server {
listen 443 ssl;
server_name admin.leo-wifree.com;

    ssl_certificate /leo/ssl/leo-wifree_com_cert.crt;
    ssl_certificate_key /leo/ssl/leo-wifree_com.key;
    ssl_trusted_certificate /leo/ssl/leo-wifree_com_root_cert.crt;

    location / {
    root /leo/wifree-admin;
    index index.html;
    try_files $uri $uri/ /index.html;

}
}
