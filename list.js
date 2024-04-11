function showList() {
    let caseDiv = document.getElementById("caseInfo");
    caseDiv.innerHTML = "";
    const caseID = document.getElementById("case").value.split(".");
    const man = caseID[0];
    const model = caseID[1];
    const caseModel = make[man][model];

    for (key in caseModel) {
        caseDiv.innerHTML += "<div class=\"part-type\" id=\"" + parts[key] + "\">\
        <div class=\"row justify-content-center header-text\">\
                                    " + parts[key] +
            "</div>\
                                 </div>";
        let partDiv = document.getElementById(parts[key]);
        for (profile in caseModel[key]) {
            let i = 0;
            for (part of caseModel[key][profile]) {
                if (i == 0) {
                    partDiv.innerHTML += "<div class=\"part-profile container\">\
                    <div class=\"row align-items-center\">\
                        <div class=\"col-sm text-center\">\
                            <img class=\"img-profile\" src=\"." + part + "\">\
                        </div>\
                    </div>\
                </div>";
                    console.log(caseModel[key][profile][i]);
                } else {
                    partDiv.innerHTML += "<div class=\"part-listing container\">\
                    <div class=\"row align-items-center\">\
                        <div class=\"col-sm text-center\">"
                        + caseModel[key][profile][i][0] + "\
                        </div>\
                        <div class=\"col text-center\">"
                        + caseModel[key][profile][i][1] + "\
                            </div>\
                    </div>\
                </div>";
                }
                i++;
            }
        }
    }
}