//defer를 사용할 경우 $(document).ready(function() {제이쿼리 코드;}); 를 적어주지 않아도 된다.
$("#notice>ul>li").on("click", function () {
  $(".popup").css("display", "block");

  var txt = $(this).children("a").text();
  $(".popup>h1").text(txt);
});

$("#close").click(function () {
  // $("#close").on("click", function () {}); 위아래가 동일 코드
  $(".popup").css("display", "none");
});
