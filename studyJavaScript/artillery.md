# 간단 테스트

npx artillery quick --count 100 -n 50 http://localhost:3000
count 는 숫자 n은 동시접속자

# JSON 파일 예시

```json
{
  "config": {
    "target": "http://localhost:5000",
    "phases": [{ "duration": 60, "arrivalRate": 30 }],
    "defaults": {
      "headers": {
        "User-Agent": "Artillery"
      }
    },
    "payload": {
      "path": "./data.csv",
      "fields": ["id", "password"]
    }
  },
  "scenarios": [
    {
      "name": "dataLab",
      "flow": [{ "get": { "url": "/v1/dataLab" } }]
    }
  ]
}
```

위 코드는 60초동안 30명이 동시 접속하는 예제

# JSON 파일 실행하여 JSON파일 생성

artillery run --output report.json node.json

# Json파일 리포트(Html)로 만들기

artillery report report.json
