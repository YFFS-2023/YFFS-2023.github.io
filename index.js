document.addEventListener('DOMContentLoaded', function () {
    var first_a = document.getElementById("first-a");
    var headerBars = document.querySelectorAll('.headerBar');
    var timeoutId;

    headerBars.forEach(element => {
        element.addEventListener('mouseover', function () {
            console.log("鼠标移入");
            first_a.style.color = '#BC6790';
            clearTimeout(timeoutId); // 取消之前的延迟恢复颜色操作
        });
    });

    headerBars.forEach(element => {
        element.addEventListener('mouseout', function () {
            timeoutId = setTimeout(function () {
                first_a.style.color = '#F9D3E3';
                console.log("鼠标移出");
            }, 500);
        });
    });

    var showTime = document.getElementById("timer");
    var together = new Date(2023, 6, 11, 0, 0, 0, 0);
    setInterval(function () {
        var currentTime = Date.now();
        var timeDifference = currentTime - together;
        if (timeDifference > 0) {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            var text = days + "天" + 
            hours.toString().padStart(2, '0') + "时" + 
            minutes.toString().padStart(2, '0') + "分" + 
            seconds.toString().padStart(2, '0') + "秒";
            var formattedText = text.replace(/\d+/g, '<span class="number">$&</span>')
            showTime.innerHTML = formattedText;
        }
    }, 1000);
});

function playMusic(){
    var audio = document.getElementById('music');
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
