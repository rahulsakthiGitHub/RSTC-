function result() {
    var students= {
        101001: {
            Name: "Hi Mani Velavan K",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        101002: {
            Name: "Hi Vignesh ",
            December: " PAID ",
            january: " NOT PAID ",
            February: " NOT PAID"
        },
        100801: {
            Name: "Hi Ragul",
            December: " PAID ",
            january: " PAID  ",
            February: " NOT PAID "
        },
        100701: {
            Name: "Hi Jai Muthu Ganesan",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100702: {
            Name: "Hi Prathab",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100601: {
            Name: "Hi Mukesh Pandiyan",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100602: {
            Name: "Hi Indhu Pavithra",
            December: "PAID",
            january: "PAID  ",
            February: " NOT PAID "
        },
        100603: {
            Name: "Hi Arigomes",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100501: {
            Name: "Hi Sivanesan",
            December: "PAID",
            january: " NA ",
            February: " NOT PAID "
        },
        100502: {
            Name: "Hi Sujith",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100503: {
            Name: "Hi Esakkiraja",
            December: " PAID ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100303: {
            Name: "Hi Rakesh",
            December: " ",
            january: " PAID ",
            February: " NOT PAID "
        },
        100302: {
            Name: "Hi Muthu Dharshini",
            December: "PAID",
            january: " PAID ",
            February: " NOT PAID "
        },
        100301: {
            Name: "Hi Muthu Kumaran",
            December: "PAID",
            january: " PAID ",
            February: " NOT PAID "
        },



    }
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined){
        output.innerHTML=`<hr> No Data about given information <hr>`;
        alert("There is no information about this student");
    } else{
        output.innerHTML=`<hr> ${definition.Name}. <hr> December-2021  ${definition.December} <hr> January-2021  ${definition.january} <hr> February 2022 ${definition.February}`;
    };
};
