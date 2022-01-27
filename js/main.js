$(function() {
    const fullDataOutput = $('#formatA'),
          briefDataOutput = $('#formatB'),
          getBtn = $('.get-button'),
          startBtn = $('.start-button'),
          days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
          months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    let interval, obj;

    const getCurrentTime = () => {
        let currTime = new Date();

        let day = currTime.getDay(),
            dayNum = currTime.getDate(),
            month = currTime.getMonth(),
            year = currTime.getFullYear(),
            hours = currTime.getHours(),
            minutes = currTime.getMinutes(),
            seconds = currTime.getSeconds();

        obj = {
            day,
            dayNum,
            month,
            year,
            hours,
            minutes,
            seconds
        };

        return obj;
    };

    const formatA = () => {
        let str = `а) 'Сегодня ${transferDay(obj.day)}, ${obj.dayNum} ${transferMonth(obj.month)} ${obj.year} года, ${obj.hours} часов ${obj.minutes} минут ${obj.seconds} секунды'`;

        return str;
    };

    const formatB = () => {
        let str = `б) '${obj.dayNum}.${obj.month}.${obj.year} - ${obj.hours}:${obj.minutes}:${obj.seconds}'`;

        return str
    };

    const transferDay = (day) => {
        let transferedDay = days[day - 1];

        return transferedDay;
    };

    const transferMonth = (month) => {
        let transferedMonth = months[month];

        return transferedMonth;
    };

    const outputDate = (str, article) => {
        $(article).text(str);
        if ($(article).css('display') === 'none') {
            $(article).prop('style', 'display: ;');
        }

        return;
    };

    const startInterval = () => {
        if (!interval) {
            interval = setInterval(() => {
                getCurrentTime();
                outputDate(formatA(), fullDataOutput);
                outputDate(formatB(), briefDataOutput);
            }, 1000);
        } else {
            clearInterval(interval);
            interval = null;
        }

        return;
    };


    
    $(getBtn).click(() => {
        getCurrentTime();
        outputDate(formatA(), fullDataOutput);
        outputDate(formatB(), briefDataOutput);
    })

    $(startBtn).click(startInterval);
})