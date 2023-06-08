# Nest js

Node.js에 기반을 둔 웹 API 프레임워크로써 Express 또는 Fastify 프레임워크를 래핑하여 동작하고, 데이터베이스, ORM, 설정(Configuration), 유효성 검사 등 수많은 기능을 기본 제공하고 필요한 라이브러리를 쉽게 설치하여 기능을 확장할 수 있는 Node.js 장점은 그대로 가지고 있음

## Nest CLI

프로젝트 생성 - nest new <project-name>

$ nest generate <schematic> <name> [options]
$ nest g <schematic> <name> [options]

Schematics

app|| ||모노레포내에서 새 애플리케이션을 생성합니다 (표준 구조인 경우 모노레포로 변환).
library|| lib ||모노레포내에 새 라이브러리를 생성합니다 (표준 구조인 경우 모노레포로 변환).
class|| cl ||새 클래스를 생성하십시오.
controller|| co ||컨트롤러 선언을 생성합니다.
decorator|| d ||커스텀 데코레이터를 생성합니다.
filter|| f ||필터 선언을 생성합니다.
gateway|| ga ||게이트웨이 선언을 생성합니다.
guard|| gu ||가드 선언을 생성합니다.
interface|| ||인터페이스를 생성합니다.
interceptor|| in ||인터셉터 선언을 생성합니다.
middleware|| mi ||미들웨어 선언을 생성합니다.
module|| mo ||모듈 선언을 생성합니다.
pipe|| pi ||파이프 선언을 생성합니다.
provider|| pr ||프로바이더 선언을 생성합니다.
resolver|| r ||리졸버 선언을 생성합니다.
resource|| res ||새 CRUD 리소스를 생성합니다. 자세한 내용은 CRUD(리소스) 생성기를 참조하세요.
service|| s ||서비스 선언을 생성합니다.

Options

--dry-run - 변경될 사항을 보고하지만 파일 시스템은 변경하지 않습니다. 별칭: -d
--project [project] - 엘리먼트를 추가해야 하는 프로젝트입니다. 별칭: -p
--flat - 엘리먼트에 대한 폴더를 생성하지 마십시오.
--collection [collectionName] - 스키메틱 컬렉션을 지정합니다. 스키메틱이 포함된 설치된 npm 패키지의 패키지 이름을 사용합니다. 별칭: -c
--spec - 스펙 파일 생성 적용 (기본값)
--no-spec - 스펙 파일 생성 비활성화
