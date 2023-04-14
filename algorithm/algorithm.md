# Stack

- 데이터를 쌓아가는 형식으로, 제일 먼저 들어간 값이 제일 나중에 나올수 있는 구조로, 예시) 브라우저의 앞으로가기, 뒤로가기

# Queue

- 데이터가 줄을 서서 기다리는 형식으로 FIFO(Fist In First Out) LILO(Last In Last OUt)의 형식을 가지고 있음. 예시) 프린터에서의 여러개 문서 출력.
- 컴퓨터의 여러가지 장치들 사이에 데이터 주고 받을때, 각 장치 사이의 속도,시간 차이 극복을 위해 Queue사용. 이것을 버퍼(buffer)라함
- 스트리밍시, 다운로드된 data가 재생하기에 충분하지 않을때 Queue에 모아 두었다가 재생하기에 충분한 양이 모였을때, 재생하는데 재생하기를 기다리는 때를 버퍼링이라고함.

# Graph

- 여러 개의 점들이 서로 복잡하게 연결되어 있는 관계를 표현한 자료구조
- 직접적인 관계가 있는 경우 두 점 사이를 이어주는 선이 있고, 간접적인 관계는 몇 개의 점과 선에 걸쳐 이어짐.
- 하나의 점을 정점(vertex) 하나의 선을 간선(edge)
- 포털사이트의 검색엔진, SNS에서 사람들과의 관계, 네비게이션 등에서 사용됨.

# Tree

- 그래프에서 단방향 그래프의 한 구조로, 하나의 뿌리로부터 가지가 사방에 뻗은 형태
- 데이터가 바로 아래에 있는 하나 이상의 데이터에 단방향으로 연결된 계층적 자료구조
- 일렬로 나열하기 힘들고 자료의 순서가 불규칙해서 연결 관계가 복잡한 비선형 구조
- 예시) 폴더 안에 폴더가 더있는 컴퓨터의 디렉토리 구조
- Binary Tree -> 자식 노드가 최대 두 개인 노드들로 구성된 트리
- Binary Search Tree -> 모든 왼쪽 자식의 값이 루트나 부모보다 작고, 모든 오른쪽 자식의 값이 루트나 부모보다 큰 값을 가지는 트리

# BFS

- Breadth-Firsh Search의 약자로 너비 우선 탐색 이라고 한다.
- 가까운 정점부터 탐색하는 방법을 말한다.
- 주로 두 정점 사이의 최단 경로를 찾을때 상요하고, 최악의 경우 모든 경로를 다 살펴보아야한다.

# DFS

- Depth-First Search의 약자로 깊이 우선 탐색이라고 한다.
- 한 정점에서 시작해서 다음 경로로 넘어가기 전에 해당 경로를 완벽하게 탐색할 때 사용


# BIG O
알고리즘이 실행되는 데 걸리는 시간을 말하는 언어
O(n) => input 값에 의해 변함 for문에서 적용
O(1) => 지속적인 시간 Array의 index 하나에 접근, 선언, 할당 등에 적용
O(n^2) => Quadratic Time  이중 반복문에 적용됨
O(n!) => 모든 요소의 루프를 추가하는 경우. 잘사용하지 않음.

## 좋은 코드 요소
1. Readable 2. Memory 3. Speed

## Big O Rule
1. Worst case => 최악의 상황을 가정하여 표기 ex) For문 진행중 맨 마지막에 있을수도 있는걸 가정하여 O(n) 이됨
2. Remove Constants => 상수 제거 실제로는 O(n/2 +1) 이런식이어도 상수제거 하여 O(n)으로 표기
3. Different terms for inputs => 2개의 다른 변수가 인풋되면 O(a + b) or O(a*b)가 된다
4. Drop Non Dominatnts => 우세한 용어만 사용 ex) O(n + n^2) 일경우 O(n^2)로 표기

# Big O Cheat Sheet:
-Big Os-
O(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element

** Iterating through half a collection is still O(n)
** Two separate collections: O(a * b)

-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

-Rule Book-
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations

# Interview Cheat Sheet
From Andrei Neagoie's Master The Coding Interview: Data Structures + Algorithms

## The 3 pillars of good code:
1. Readable
2. Time Complexity
3. Space Complexity

## What skills interviewer is looking for:
Analytic Skills - How can you think through problems and analyze things?
Coding Skills - Do you code well, by writing clean, simple, organized, readable code?
Technical knowledge - Do you know the fundamentals of the job you're applying for?
Communication skills: Does your personality match the companies’ culture?

## Step By Step through a problem:
1. When the interviewer says the question, write down the key points at the top (i.e. sorted
array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things.
Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to
follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand
what you need to code, the better the whiteboard will go. So never start a whiteboard
interview not being sure of how things are going to work out. That is a recipe for disaster.
Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
So think: What can I show in order to show that I can do this and I am better than other
coders. Break things up in Functions (if you can’t remember a method, just make up a function
and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the
input. Assume people are trying to break your code and that Darth Vader is using your
function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
a trick: Comment in the code, the checks that you want to do… write the function, then tell the
interviewer that you would write tests now to make your function fail (but you won't need to
actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask
the interviewer if we can make assumption about the code. Can you make the answer return
an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
different approaches? Is it readable? What would you google to improve? How can
performance be improved? Possibly: Ask the interviewer what was the most interesting
solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also
common that the interviewer asks you extension questions, such as how you would handle the
problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
This is a common follow-up question at Google, where they care a lot about scale. The answer
is usually a divide-and-conquer approach — perform distributed processing of the data and only
read certain chunks of the input from disk into memory, write the output back to disk and
combine them later.

## Good code checklist:
[✅]It works
[✅]Good use of data structures
[✅]Code Re-use/ Do Not Repeat Yourself
[✅]Modular - makes code more readable, maintainable and testable
[✅]Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two
separate loops are better than 2 nested loops
[✅]Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may
exceed memory of machine

## Heurestics to ace the question:
[✅]Hash Maps are usually the answer to improve Time Complexity
[✅]If it's a sorted array, use Binary tree to achieve O(log N). Divide and Conquer - Divide a data set
into smaller chunks and then repeating a process with a subset of data. Binary search is a great
example of this
[✅]Try Sorting your input
[✅]Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your
code
[✅]Look at the Time vs Space tradeoff. Sometimes storing extra state in memory can help the time.
(Runtime)
[✅]If the interviewer is giving you advice/tips/hints. Follow them
[✅]Space time tradeoffs: Hastables usually solve this a lot of the times. You use more space, but you
can get a time optimization to the process. In programming, you often times can use up a little bit
more space to get faster time

### And always remember:
Communicate your thought process as much as possible. Don’t worry about
finishing it fast. Every part of the interview matters.