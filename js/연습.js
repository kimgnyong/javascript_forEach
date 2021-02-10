var nav = {
    init:function(){
        this.navFn();
        this.forFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $subBtn  = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

        $mainBtn = Array.prototype.slice.call($mainBtn);
        
        $mainBtn.forEach(function(el,idx,arr){
            $mainBtn[idx].addEventListener('mouseover',function(e){
                e.preventDefault();
                for(a=0;a<=3;a++){
                    $mainBtn[a].classList.remove('on');
                    $subBtn[a].classList.remove('on');
                }
                $mainBtn[idx].classList.add('on');
                $subBtn[idx].classList.add('on');
            }, false)
        }, false)

        $navArea = [].slice.call($navArea);
        
        $navArea.forEach(function(el,idx,arr){
            $navArea[idx].addEventListener('mouseleave',function(e){
                e.preventDefault();
                $mainBtn[idx].classList.remove('on');
                $subBtn[idx].classList.remove('on');
            }, false)
        },false)
    },
    forFn:function(){
        var txt = '';
        var $outTable = document.querySelector('#out-table');
        for(i=2;i<=9;i++){
            txt += '<tr><th>'+i+'단</th></tr>';
            for(j=1;j<=9;j++){
                 txt += '<tr><td>'+i+'X'+j+'='+(i*j)+'</td></tr>';
            };
        };
        // $outTable.innerHTML = txt;
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