// 말이 배경판에서 벗어나지 않도록 할 것
// 힌트> 스타일을 변경해주는 키워드 .css

// 1. left 버튼을 눌렀을 때,
// 말이 왼쪽으로 50px씩 이동
let move = 0;
$(document).on('click', '.btn.left', ()=>{
    if(move<1200){
        move += 50
        $('#horse').css('right', move+'px')
    }
})


// 2. rigth 버튼을 눌렀을 때,
// 말이 오른쪽으로 50px씩 이동
$(document).on('click', '.btn.right', ()=>{
    if(move>0){
        move -= 50
        $('#horse').css('right', move+'px')
    }
})

// left, right를 키보드로 조작
$('body').on('keydown', (event)=>{
    console.log(event.keyCode)
    if(event.keyCode == 37){
        if(move<1200){
            move += 50
            $('#horse').css('right', move+'px')
        }
    }else if(event.keyCode == 39){
        if(move>0){
            move -= 50
            $('#horse').css('right', move+'px')
        }
    }else if(event.keyCode == 32){
        $('#horse')
        .stop(true)
        .animate({bottom:'400px'}, 300)
        .animate({bottom:'200px'}, 300)
    }

})
