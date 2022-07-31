$(document).ready(function () {
  addEvents();
});

function addEvents() {
  /**
   * 회원가입 버튼 클릭시 이벤트
   */
  $(".join-btn").on("click", function (event) {
    // $(".join-box").show();
    $(".login-box").hide();
  });

  /**
   * 로그인 버튼 클릭시 이벤트
   */
  $(".login-btn").on("click", function (event) {
    $(".login-box").show();
    $(".join-box").hide();
  });

  /**
   * 회원가입 완료 버튼 클릭시 이벤트
   */
  $(".join-success-btn").on("click", function (event) {});
}
