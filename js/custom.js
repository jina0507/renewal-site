
$(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();//스크롤 이동값을 변수scroll에 할당
    var pakageTop = $(".pakage").offset().top-200;//worksTop변수에 .works의 top위치값을 저장

    if(scroll > pakageTop){//스크롤 이동값이 worksTop변수 값보다 클때
      $(".pakagewrap li div").addClass("on");//.member요소에 on클래스 추가
    }

    /*//스크롤 이동시 top버튼 표시
    if(scroll > 50){//scroll이동값이 50보다 크면
      $(".top").css("display","block");//top 버튼표시
    }else{//scroll이동값이 50보다 작으면
      $(".top").css("display","none")//top 버튼제거
    }*/
  });

   //왼쪽 화살표
   $(".next > .left").click(function(){
    //.next요소에 애니메이션 기능이 적용중일때 구문을 실행하지 않는 코드
    if($(".eventcontents").is(':animated'))return false;

    var last = $(".eventcontents > li:last");//last변수에 첫번째 콘텐츠요소를 할당
    //.요소를 left:-360px에서 0으로 오른쪽으로 이동
    $(".eventcontents").css("left",'-360px').prepend(last).animate({"left":0},500)
  });

  //오른쪽 화살표
  $(".next > .right").click(function(){
    //.에 애니메이션 기능이 적용중일때 구문을 실행하지 않는 코드
    if($(".eventcontents").is(':animated'))return false;

      var first = $(".eventcontents > li:first");//첫번째 콘텐츠 요소를 first변수에 할당
      //.의 left값을 0px에서 -360px으로 0.5초동안 이동시켜줍니다.
      $(".eventcontents").animate({"left":"-360px"},500,function(){
        //.box요소의 left값을 초기값인 -360px로 설정하고 첫번째 콘텐츠 요소를 마지막위치로 변경하여 초기화
        $(this).css("left",0).append(first);
      })
  })
  
  //imgGroup prepend append
  $(".arrowbox1").click(function(){
    $(".imgGroup > li").addClass("on");
    setTimeout(function(){
      $(".imgGroup > li").removeClass("on")
    },300)
    var last = $(".imgGroup > li:last");
    $(".imgGroup").prepend(last)
    //버튼을 클릭하면 #container내부의 마지막 img요소가 prepend()명령에 의해 #container 내부의 맨 앞으로 이동
  })

  $(".arrowbox2").click(function(){
    $(".imgGroup > li").addClass("on");
    setTimeout(function(){
      $(".imgGroup > li").removeClass("on")
    },300)
    var first = $(".imgGroup > li:first")
    $(".imgGroup").append(first)
    //버튼을 클릭하면 #container내부의 마지막 img요소가 prepend()명령에 의해 #container 내부의 맨 앞으로 이동
  })
  
});