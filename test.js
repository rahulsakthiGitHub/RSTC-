function result() {
    var students= {
        101001: {
            Name: "Hello Mani Velavan K",   
            Month: "January", 
            WeekTest1: "Science Revision Test 87 / 100 ",
            WeekTest2: "Science WeekTest 18.5 / 20",
            WeekTest3: "Maths Unit Revision Test (UNIT-1) 96/100 ",
            Total: "  ",
            Percentage: ""
        },
        101002: {
            Name: "Hello Vignesh",   
            Month: "January", 
            WeekTest1: " Science Revision Test 61 / 100 ",
            WeekTest2: " Science WeekTest 14 / 20",
            WeekTest3: "Maths Unit Revision Test (UNIT-1) 66/100",
            Total: "  ",
            Percentage: ""
        },
        100801: {
            Name: "Hello Ragul",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100701: {
            Name: "Hello Jai Muthu Ganesan",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100702: {
            Name: "Hello Prathab",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100601: {
            Name: "Hello Mukesh pandiyan",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100602: {
            Name: "Hello Indhu Pavithra",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100603: {
            Name: "Hello Arigomes",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100501: {
            Name: "Hello Sivanesan",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100502: {
            Name: "Hello Sujith",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100503: {
            Name: "Hello Esakkiraja",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100303: {
            Name: "Hello Rakesh",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100302: {
            Name: "Hello Muthu Dharshini",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },
        100301: {
            Name: "Hello Muthu Kumaran",   
            Month: "", 
            WeekTest1: "",
            WeekTest2: "",
            WeekTest3: "",
            Total: " ",
            Percentage: ""
        },

    }
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined){
        output.innerHTML=`<hr> No Data about given information. <hr>`;
        alert("There is no information about this student");
    } else{
        output.innerHTML=`<hr> ${definition.Name} <hr> ${definition.Month} <hr>  ${definition.WeekTest1} <hr>  ${definition.WeekTest2} <hr>  ${definition.WeekTest3} <hr>  ${definition.Total} <hr>${definition.Percentage} <hr>`;
    };
};