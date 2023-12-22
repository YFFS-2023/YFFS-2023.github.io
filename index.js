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

    const audio = document.getElementById('music');
    const subtitle = document.getElementById('lyric');

    // 在音频播放时更新滚动字幕并实现平滑切换
    audio.addEventListener('timeupdate', function () {
        let currentSubtitle = '给你给我';

        // 根据音频时间设置字幕
        if (audio.currentTime >= 14.5 && audio.currentTime < 23) {
            currentSubtitle = '给你我平平淡淡的等待和守候';
        } else if (audio.currentTime >= 23 && audio.currentTime < 31) {
            currentSubtitle = '给你我轰轰烈烈的渴望和温柔';
        } else if (audio.currentTime >= 31 && audio.currentTime < 39) {
            currentSubtitle = '给你我百转千回的喜乐和忧愁';
        } else if (audio.currentTime >= 39 && audio.currentTime < 59.5) {
            currentSubtitle = '给你我微不足道所有的所有';
        } else if (audio.currentTime >= 59.5 && audio.currentTime <67.5) {
            currentSubtitle = '给我你带着微笑的嘴角和眼眸';
        } else if (audio.currentTime >= 67.5 && audio.currentTime <76) {
            currentSubtitle = '给我你灿烂无比的初春和深秋';
        } else if (audio.currentTime >= 76 && audio.currentTime < 83.5) {
            currentSubtitle = '给我你未经雕琢的天真和自由';
        } else if (audio.currentTime >= 83.5 && audio.currentTime <92) {
            currentSubtitle = '给我你最最珍贵所有的所有';
        } else if (audio.currentTime >= 92 && audio.currentTime < 100) {
            currentSubtitle = '给你我义无反顾的长长和久久';
        } else if (audio.currentTime >= 100 && audio.currentTime <108.5) {
            currentSubtitle = '给我你多年以后仍握紧的手';
        } else if (audio.currentTime >= 108.5 && audio.currentTime <117) {
            currentSubtitle = '给你成熟 你给我迁就';
        } else if (audio.currentTime >= 117 && audio.currentTime <126) {
            currentSubtitle = '会不会就这样白了头';
        } else if (audio.currentTime >= 126 && audio.currentTime <157) {
            currentSubtitle = '';
        } else if (audio.currentTime >= 157 && audio.currentTime <165) {
            currentSubtitle = '给你我义无反顾的长长和久久';
        } else if (audio.currentTime >= 165 && audio.currentTime <174) {
            currentSubtitle = '给我你多年以后仍握紧的手';
        } else if (audio.currentTime >= 174 && audio.currentTime <178) {
            currentSubtitle = '给你成熟';
        } else if (audio.currentTime >= 178 && audio.currentTime <182) {
            currentSubtitle = '你给我迁就';
        } else if (audio.currentTime >= 182 && audio.currentTime <192) {
            currentSubtitle = '会不会就这样白了头';
        } else if (audio.currentTime >= 192 && audio.currentTime <200) {
            currentSubtitle = '给我你带着微笑的嘴角和眼眸';
        } else if (audio.currentTime >= 200 && audio.currentTime <208) {
            currentSubtitle = '给你我轰轰烈烈的渴望和温柔';
        } else if (audio.currentTime >= 208 && audio.currentTime <216) {
            currentSubtitle = '给我你未经雕琢的天真和自由';
        } else if (audio.currentTime >= 216 && audio.currentTime <225) {
            currentSubtitle = '给你我微不足道所有的所有';
        } else if (audio.currentTime >= 225) {
            currentSubtitle = ' 给你我微不足道所有的所有 ';
        }

        // 检查字幕是否改变
        if (subtitle.textContent !== currentSubtitle) {
            subtitle.classList.add('hidden'); // 添加隐藏类
            // 等待一小段时间以触发 CSS 过渡效果
            setTimeout(() => {
                subtitle.textContent = currentSubtitle;
                subtitle.classList.remove('hidden'); // 移除隐藏类，显示新字幕
            }, 500); // 这个时间应该和过渡时间保持一致
        }
    });

});

function playMusic() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
