$(document).ready(function() {
	
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 80;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");
    let currentYear = new Date().getFullYear();

    for (var y = 0; y < qntYears; y++) {
        let date = new Date(currentYear);
        let yearElem = document.createElement("option");
        yearElem.value = currentYear
        yearElem.textContent = currentYear;
        selectYear.append(yearElem);
        currentYear--;
    }

    for (var m = 1; m <= 12; m++) {
        let month = monthNames[m-1];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth.append(monthElem);
    }

    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();

    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);

    AdjustDays();
    selectDay.val(day)

    function AdjustDays() {
        var year = selectYear.val();
        var month = parseInt(selectMonth.val());
        selectDay.empty();

        //get the last day, so the number of days in that month
        var days = new Date(year, month, 0).getDate();

        //lets create the days of that month
        for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
        }
    }

    $("#generate-name").click(function(e) {
        sex = $("input[name='sex']:checked").val();
        d = $("#day").val();
        m = $("#month").val();
        y = $("#year").val();
        console.log(sex);
        console.log(d);
        console.log(m);
        console.log(y);

        var namebymonth = [
            { str: 'HAN', hangul: '???', romanizan:'Han' },
            { str: 'GANG', hangul: '???', romanizan:'Kang' },
            { str: 'I', hangul: '???', romanizan:'Lee' },
            { str: 'JO', hangul: '???', romanizan:'Cho' },
            { str: 'YUN', hangul: '???', romanizan:'Yun' },
            { str: 'GIM', hangul: '???', romanizan:'Kim' },
            { str: 'IM', hangul: '???', romanizan:'Lim' },
            { str: 'JANG', hangul: '???', romanizan:'Jang' },
            { str: 'CHOE', hangul: '???', romanizan:'Choi' },
            { str: 'BAK', hangul: '???', romanizan:'Park' },
            { str: 'SEO', hangul: '???', romanizan:'Suh' },
            { str: 'BAE', hangul: '???', romanizan:'Bae' }
        ];

        var namebyday = [
            { str: 'JIN', hangul: '???', romanizan:'Chin' },
            { str: 'HWA', hangul: '???', romanizan:'Hwa' },
            { str: 'JI', hangul: '???', romanizan:'Jee' },
            { str: 'HYO', hangul: '???', romanizan:'Hyo' },
            { str: 'SI', hangul: '???', romanizan:'Shi' },
            { str: 'DO', hangul: '???', romanizan:'Doh' },
            { str: 'SU', hangul: '???', romanizan:'Su' },
            { str: 'JAE', hangul: '???', romanizan:'Jae' },
            { str: 'HYEON', hangul: '???', romanizan:'Hyeon' },
            { str: 'SO', hangul: '???', romanizan:'Soh' },
            { str: 'EUN', hangul: '???', romanizan:'Un' },
            { str: 'GYEONG', hangul: '???', romanizan:'Kyung' },
            { str: 'YU', hangul: '???', romanizan:'Yoo' },
            { str: 'MYEONG', hangul: '???', romanizan:'Myung' },
            { str: 'SEON', hangul: '???', romanizan:'Sun' },
            { str: 'YE', hangul: '???', romanizan:'Yeh' },
            { str: 'WON', hangul: '???', romanizan:'Weon' },
            { str: 'SEO', hangul: '???', romanizan:'Suh' },
            { str: 'HA', hangul: '???', romanizan:'Hah' },
            { str: 'JU', hangul: '???', romanizan:'Joo' },
            { str: 'BO', hangul: '???', romanizan:'Boh' },
            { str: 'YEONG', hangul: '???', romanizan:'Young' },
            { str: 'SEUL', hangul: '???', romanizan:'Seul' },
            { str: 'HYE', hangul: '???', romanizan:'Hye' },
            { str: 'JEONG', hangul: '???', romanizan:'Chung' },
            { str: 'SIN', hangul: '???', romanizan:'Shin' },
            { str: 'YEON', hangul: '???', romanizan:'Youn' },
            { str: 'SEONG', hangul: '???', romanizan:'Sung' },
            { str: 'IN', hangul: '???', romanizan:'Ihn' },
            { str: 'JE', hangul: '???', romanizan:'Je' },
            { str: 'DONG', hangul: '???', romanizan:'Tong' }
        ];

        var namebyyearp = [
            { str: 'RA', hangul: '???', romanizan:'Ra' },
            { str: 'MI', hangul: '???', romanizan:'Mi' },
            { str: 'CHAE', hangul: '???', romanizan:'Chae' },
            { str: 'I', hangul: '???', romanizan:'Lee' },
            { str: 'RIN', hangul: '???', romanizan:'Rin' },
            { str: 'MIN', hangul: '???', romanizan:'Min' },
            { str: 'HUI', hangul: '???', romanizan:'Hui' },
            { str: 'NA', hangul: '???', romanizan:'Na' },
            { str: 'A', hangul: '???', romanizan:'A' },
            { str: 'AE', hangul: '???', romanizan:'Ae' },
        ];

        var namebyyearl = [
            { str: 'HYEOK', hangul: '???', romanizan:'Hyuk' },
            { str: 'SEOK', hangul: '???', romanizan:'Suk' },
            { str: 'JUN', hangul: '???', romanizan:'Joon' },
            { str: 'BIN', hangul: '???', romanizan:'Been' },
            { str: 'U', hangul: '???', romanizan:'Woo' },
            { str: 'HYEON', hangul: '???', romanizan:'Hyun' },
            { str: 'HUN', hangul: '???', romanizan:'Hoon' },
            { str: 'GEUN', hangul: '???', romanizan:'keun' },
            { str: 'HO', hangul: '???', romanizan:'Hou' },
            { str: 'SEOP', hangul: '???', romanizan:'Sup' },
        ];

        var yearlast = +y.toString().split('').pop();
        console.log(yearlast);

        if( sex == 'L' ) {
            var ny = namebyyearl[yearlast].str.toUpperCase();
            var nh = namebyyearl[yearlast].hangul;
            var nr = namebyyearl[yearlast].romanizan.toUpperCase();
        } else {
            var ny = namebyyearp[yearlast].str.toUpperCase();
            var nh = namebyyearp[yearlast].hangul;
            var nr = namebyyearp[yearlast].romanizan.toUpperCase();
        }
        console.log(ny);
        
        var rStr = namebymonth[m-1].str.toUpperCase() + ' ' + namebyday[d-1].str.toUpperCase() + ' ' + ny;
        var rHangul = namebymonth[m-1].hangul + ' ' + namebyday[d-1].hangul + ' ' + nh;
        var rRomanizan = namebymonth[m-1].romanizan.toUpperCase() + ' ' + namebyday[d-1].romanizan.toUpperCase() + ' ' + nr;

        console.log(rStr);
        console.log(rHangul);
        console.log(rRomanizan);
        
        var tResult = document.querySelector("#tResult");
        tResult.className = "";
        tResult.innerHTML = '<span class="resultStr">' + rRomanizan + '</span>';
        tResult.innerHTML += '<span class="resultHangul">' + rHangul + '</span>';
        tResult.innerHTML += '<span class="resultRomanizan">You are from the <i>' + namebymonth[m-1].romanizan.toUpperCase() + '</i> clan and your nickname is <i>' + namebyday[d-1].romanizan.toUpperCase() + ' ' + nr + '</i></br>Revised romanization: ( ' + rStr + ' )</span>';
        
    })
});
