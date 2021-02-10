var nav = {
    init:function(){
        this.navFn();
        this.forFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $subBtn  = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

        var $mainBtn = [].slice.call($mainBtn);
        // console.log($mainBtn);

        $mainBtn.forEach(function(el,idx){
            // console.log(idx);
            $mainBtn[idx].addEventListener('mouseover',function(e){
                e.preventDefault();
                for(i=0;i<=3;i++){
                    $mainBtn[i].classList.remove('on');
                    $subBtn[i].classList.remove('on');
                }
                $mainBtn[idx].classList.add('on');
                $subBtn[idx].classList.add('on');
            }, false)
        },false);

        // 콜백함수가 있으면 for반복문 처리가 안된다.
        // 그래서 $navArea영역의 객체를 객체배열처리한다.
        // 객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
        // 객체를 배열로 처리하는건              [].slice.call(객체)
        // 그리고 객체 배열 반복문( forEach() )을 활용한다.

        // var obj = {irum:'김유신'};  // 리터럴방식 객체선언
        // var arr = ['김유신','이순신','유관순'];  // 리터럴방식 배열선언
            //1,배열처리
            console.log($navArea); // 객체배열 처리하기 전
            $navArea = [].slice.call($navArea);
            console.log($navArea); // 객체배열 처리한 후

            //2,반복문 
            //배열처리된변수.forEach(fucntion(){});처리
            // $navArea.forEach(function(태그요소, 인덱스번호, 배열){
            // },false)
            $navArea.forEach(function(el, idx){
                $navArea[idx].addEventListener('mouseleave',function(e){
                    e.preventDefault();
                    $mainBtn[idx].classList.remove('on');
                    $subBtn[idx].classList.remove('on');
                }, false)
            }, false);
    },
    forFn:function(){   // 반복분 알고리즘

            var $outTable = document.querySelector('#out-table');
            var txt = '';

            //세로출력
            // for(i=2;i<=9;i++){
            //     txt += '<tr><th>'+i+'단</th></tr>';
            //     for(a=1;a<=9;a++){
            //         var x = (i*a) < 10 ? ('0'+i*a) : (i*a);  // 삼항연산자 의 변수 사용방식
            //         txt += '<tr><td>'+i+'*'+a+'='+x+'</td></tr>';
            //     }
            // }
            // $outTable.innerHTML = ''; // 애초에 있던 html 를 삭제한다 but 여기선 쓰지않아도 되는데 이유를 모르겠다. 저절로 초기화가 되버림
            // $outTable.innerHTML = txt;

            //가로출력
            for(a=2; a<=9; a++){
                txt += '<th>' + a + '단' + '</th>';
            }
            for(j=1;j<=9;j++){
                txt+='<tr>';
                for(i=2;i<=9;i++){
                    var x = (i*j) < 10 ? ('0'+i*j) : (i*j);
                    txt += '<td>'+ i + ' X ' + j + ' = ' + x +'</td>'; 
                }
                txt+='</tr>';
            }
            console.log(txt);
            $outTable.innerHTML = txt;
    }
};

var slide = {
    init:function(){
        this.slideFn();
    },
    slideFn:function(){
        var $prevBtn = document.getElementsByClassName('prev-btn');
        var $nextBtn = document.getElementsByClassName('next-btn');
        var $slide = document.getElementsByClassName('wraper');
        var cnt = 0;

        function prev(){
            cnt--;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[0].style = 'left:'+cnt*-1200+'px;';
        };
        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[0].style = 'left:'+cnt*-1200+'px;';
        };

        $prevBtn[0].addEventListener('click',function(e){
            e.preventDefault();
            prev();
        }, false);

        $nextBtn[0].addEventListener('click',function(e){
            e.preventDefault();
            next();
        }, false);

    }
};

slide.init();
nav.init();