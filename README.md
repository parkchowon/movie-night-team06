## ✨ 프로젝트 소개
영화 API를 이용하여 영화 데이터를 불러와 검색할 수 있으며 각 영화에 리뷰를 남길 수 있는 프로젝트입니다!

사이트 바로가기: [Movie Night]()

### 프로젝트 기간
- 2024.05.01 ~ 2024.05.08
### 개발 언어
- HTML, JavaScript, CSS
### 팀원
| 박초원 | 정현우 | 최 연 | 석재영 | 김영은 | 김택수 |
|--|--|--|--|--|--|
연관 검색어 <br> 검색 기능 <br> 리뷰 작성 <br> 정렬 기능 <br> 배너 슬라이드 <br> 로딩화면 <br>| 리뷰 수정,삭제 | 리뷰 불러오기 <br> 리뷰 수정, 삭제 | 배너 슬라이드 | 리뷰 작성 | 상세 정보 불러오기 |

- 각자 맡은 일을 다 하면 다른 팀원의 파트를 도와주면서 협업했어요!
## 사용한 라이브러리
- ### [Swiper@11](https://swiperjs.com/)
## 사용한 API
- ### [TMDB](https://www.themoviedb.org/?language=ko)


## 대표 기능
✅ 원하는 영화를 **검색**할 수 있어요! <br>
✅ 검색창에서 3글자 이상 입력 시 **연관 검색어**를 5개 보여줘요<br>
✅ 평점 순, 이름 순으로 검색한 **결과를 정렬**해줘요<br>
✅ 검색한 카드를 클릭 시 **상세정보 화면**을 볼 수 있어요<br>
✅ 상세정보 화면에서 **작성된 리뷰**를 보고 영화에 대한 **리뷰를 작성**할 수 있어요<br>
✅ 등록한 리뷰의 비밀번호가 맞을 시, **리뷰 수정/삭제** 기능을 지원해요<br>
✅ 홈화면에서 별점이 높은 영화 20개를 **배너**로 보여줘요

## 구현 화면
### [🔽 랜딩 화면 슬라이드 배너]
![banner](https://github.com/parkchowon/movie-night-team06/assets/70216263/777243ab-f0e1-4c56-bb49-ca5f6fb357e4)
- swiper를 사용한 슬라이드 배너를 만들었어요
  <br>
  <br>
### [🔽 연관 검색어 기능]
![search box](https://github.com/parkchowon/movie-night-team06/assets/70216263/57ccdd45-851d-4d35-ba08-55266d97a456)
- 3글자 이상 입력 시, 검색한 단어와 가장 유사한 5개의 연관검색어를 보여줘요

<br>
<br>

### [🔽 이름, 평점순 정렬 기능]
![sort function](https://github.com/parkchowon/movie-night-team06/assets/70216263/da08bf7b-7d43-4bd1-a017-c56a52fbe686)
- 이름순, 별점순으로 카드를 정렬할 수 있어요

  <br>
  <br>
  
### [🔽 검색한 카드 클릭 시 상세정보 화면]
![detailPage](https://github.com/parkchowon/movie-night-team06/assets/70216263/3130c51d-8ddd-4a68-b2fd-48a959a5c55b)
- 카드 클릭 시 상세 정보 화면에서 영화 정보와 리뷰를 볼 수 있어요

<br>
<br>

### [🔽 리뷰 작성 기능]
![reviewCreate](https://github.com/parkchowon/movie-night-team06/assets/70216263/3145a0f5-4fe8-4265-b03f-a6e1d844e9df)
- 작성자 이름, 코멘트, 별점을 등록할 수 있고 비밀 번호를 입력해야 최종 등록이 완료돼요
- 작성자 이름은 10글자를 넘을 수 없어요
- 코멘트는 10글자 이상 써야 입력이 돼요
- 비밀번호는 6글자 이상 입력해야 해요

<br>
<br>

### [🔽 리뷰 수정 삭제]
![reviewUpdateDelete](https://github.com/parkchowon/movie-night-team06/assets/70216263/3c186311-8f85-444c-bb4e-f5a10672475c)
- 등록할 때 입력한 비밀번호가 맞아야 수정할 수 있는 모달창이 떠요
- 비밀 번호가 틀리면 다시 입력하라는 alert창이 떠요
- 수정이 완료되면 수정 내용이 변경돼요
- 마찬가지로 삭제도 비번이 맞으면 삭제, 틀리면 alert 창이 떠요
