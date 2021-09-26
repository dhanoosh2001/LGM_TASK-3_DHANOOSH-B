const data = [
    {
        name: "DHANOOSH B",
        regno: "111519107005",
        INDUSTRIAL_INSTRUMENTATION_II:"O",
        PROCESS_CONTROL:"A+",
        DIGITAL_SIGNAL_PROCESSING: "A",
        ANALYTICAL_INSTRUMENTS: "B+"
    },
    {
        name: "GOPI M",
        regno: "111519105110",
        INDUSTRIAL_INSTRUMENTATION_II:"O",
        PROCESS_CONTROL:"A+",
        DIGITAL_SIGNAL_PROCESSING: "A",
        ANALYTICAL_INSTRUMENTS: "B+"
    },
    {
        name: "KAVIDHASAN M",
        regno: "111519305110",
        INDUSTRIAL_INSTRUMENTATION_II:"O",
        PROCESS_CONTROL:"A+",
        DIGITAL_SIGNAL_PROCESSING: "A",
        ANALYTICAL_INSTRUMENTS: "B+"
    },
    {
        name: "DASTON B",
        regno: "1119405110",
        INDUSTRIAL_INSTRUMENTATION_II:"O",
        PROCESS_CONTROL:"A+",
        DIGITAL_SIGNAL_PROCESSING: "A",
        ANALYTICAL_INSTRUMENTS: "B+"

    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "INDUSTRIAL_INSTRUMENTATION_II : " + data[i].INDUSTRIAL_INSTRUMENTATION_II +"</h3>" + "<h3>" + "PROCESS_CONTROL : " 
            + data[i].PROCESS_CONTROL +"</h3>" +"<h3>" + "DIGITAL_SIGNAL_PROCESSING : " + data[i].DIGITAL_SIGNAL_PROCESSING +"</h3>"+
            "ANALYTICAL_INSTRUMENTS : " +data[i].ANALYTICAL_INSTRUMENTS + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is not available!!!" + "</h3>" 

})