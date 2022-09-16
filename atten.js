function result() {
    var students= {
        101001: { 
            NAME: " NAME : K Mani Velavan ",
            MONTH: " JANUARY - 2022",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 19 ",
            ABSEND: " Days Absent 1 ( 7 ) ",
            PERCENTAGE: " Percentage 95% "
        },
        101002: {
            NAME: " NAME : Vignesh ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 14 ",
            ABSEND: " Days Absent 6 (4, 5, 6, 7, 10, 19)  ",
            PERCENTAGE: " Percentage 70% "
        },
        100801: {
            NAME: " NAME : Ragul ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 11 ",
            ABSEND: " Days Absent  9 (7, 8, 10, 12, 18, 19, 22, 24, 28)  ",
            PERCENTAGE: " Percentage 55% "
        },
        100701: {
            NAME: " NAME : Jai Muthu Ganesan ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 8 ",
            ABSEND: " Days Absent  12 (3 to 8, 18 to 22, 31)  ",
            PERCENTAGE: " Percentage 40% "
        },
        100702: {
            NAME: " NAME : Prathab ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 15 ",
            ABSEND: " Days Absent   5 (12, 20, 21, 27, 31)  ",
            PERCENTAGE: " Percentage 75% "
        },
        100601: {
            NAME: " NAME : Mukesh Pandiyan ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 18 ",
            ABSEND: " Days Absent  2 (10, 21) ",
            PERCENTAGE: " Percentage 90% "
        },
        100602: {
            NAME: " NAME : Indhu Pavithra ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 14 ",
            ABSEND: " Days Absent  6 (8, 10, 12, 18 ,22, 28)  ",
            PERCENTAGE: " Percentage 70% "
        },
        100603: {
            NAME: " NAME : Arigomes ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 13 ",
            ABSEND: " Days Absent  7(3, 5, 12, 20, 21, 27, 31)  ",
            PERCENTAGE: " Percentage 65% "
        },
        100501: {
            NAME: " NAME : Sivanesan ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 4 ",
            ABSEND: " Days Absent  16 (5, 6, 8, 10, 12, 18 to 31)  ",
            PERCENTAGE: " Percentage 20% "
        },
        100502: {
            NAME: " NAME : Sujith ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 8 ",
            ABSEND: " Days Absent  12 (3, 7 to 12, 18 ,19, 22, 24, 25, 26  ",
            PERCENTAGE: " Percentage 40% "
        },
        100503: {
            NAME: " NAME : Esakkiraja ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 18 ",
            ABSEND: " Days Absent  2 (7, 19) ",
            PERCENTAGE: " Percentage 90% "
        },
        100301: {
            NAME: " NAME : Muthu Kumaran ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 18 ",
            ABSEND: " Days Absent  2 (18, 19)  ",
            PERCENTAGE: " Percentage 90% "
        },
        100302: {
            NAME: " NAME : Muthu Dharshini ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 18 ",
            ABSEND: " Days Absent  2 (18, 19) ",
            PERCENTAGE: " Percentage 90% "
        },
        100303: {
            NAME: " NAME : Rakesh ",
            MONTH: " JANUARY - 2022 ",
            TOTALDAYS: " Total Working Days 20 ",
            PRESENT: " Days Present 10 ",
            ABSEND: " Days Absent  10 ( 5 to 8, 21, 25 to 31) ",
            PERCENTAGE: " Percentage 50% "
        },
    }
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined){
        output.innerHTML=`<hr> No Data about given information . <hr>`;
        alert("There is no information about this details ");
    } else{
        output.innerHTML=`<hr> ${definition.NAME} <hr> ${definition.MONTH} <hr> ${definition.TOTALDAYS} <hr> ${definition.PRESENT} <hr> ${definition.ABSEND} <hr> ${definition.PERCENTAGE} <hr> `;
    };
};