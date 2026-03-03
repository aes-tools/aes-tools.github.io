//Function to create nav bar on the page based on "parts.js" file contents
function addNav() {

    const firstPartButton = "<li class=\"nav-item\">\
                                <div class=\"dropdown show\">\
                                    <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" aria-haspopup=\"true\" aria-expanded=\"false\">";

    const secondPartButton = "</a>\
                                <div class=\"dropdown-menu\" id=\""
    const thirdPartButton = "\" aria-labelledby=\"dropdownMenuLink\">\
                                </div>\
                            </div>\
                        </li>";

                        //<a class="dropdown-item" href="#">Action</a>

    //iterates through "make" object that is stored in parts.js file
    //gets name of each company object listed in that file
    //Used to create nav bar links/info
    for (company in make) {
        //make company name lowercase for use in linking to html file (might not use!!!)
        companyPageTitle = company.toLowerCase();

        //make company name have the first letter capitalized for presentation
        let companyCapitalized = company.charAt(0).toUpperCase() + company.slice(1);

        //append list item to navbar contents (ul id: "navList")
        //attempting to append to ul first

        //get container info
        let ulContainer = document.getElementById("navList");
        //append list item containing company name from above as the title
        ulContainer.innerHTML += firstPartButton + companyCapitalized + secondPartButton + company.toLowerCase() + thirdPartButton;
        for (caseModel in make[company]) {
            let companyMenu = document.getElementById(company.toLowerCase());
            let modelElement = document.createElement('a');
            modelElement.className = "dropdown-item";
            modelElement.id = company.toLowerCase() + "." + caseModel.toLowerCase();
            modelElement.href = "#";
            modelElement.innerHTML= caseModel.toUpperCase();
            document.getElementById(company.toLowerCase()).appendChild(modelElement);
            document.getElementById(company.toLowerCase() + "." + caseModel.toLowerCase()).setAttribute("onclick", 'showList("'
                         + company.toLowerCase() + "." + caseModel.toLowerCase() + '")');
        }
    }
}

addNav();


//Function is ran when user selects an option from the dropbox on the index page - FOR NOW
//See line 45 (or search for id="case") of index.html to see when it is called
function showList(caseSelection) {
    //get "caseInfo" div and give it blank html to append to later.
    let caseDiv = document.getElementById("caseInfo"),
        casePageTitle = document.getElementById("casePageTitle");
    caseDiv.innerHTML = "";
    casePageTitle.innerHTML = "";
    
    //Splits children of "case" div to list 
    const caseID = caseSelection.split(".");
    const man = caseID[0];
    const model = caseID[1];
    const caseModel = make[man][model];
    document.getElementById("casePageTitle").append(man.toUpperCase() + " - " + model.toUpperCase());

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
                    <div class=\"row align-items-center\" id=\"" + key + profile + "\">\
                        <div class=\"col text-center\">\
                            <img class=\"img-profile\" src=\"." + part + "\">\
                        </div>\
                    </div>\
                </div>";
                } else {
                let profileDiv = document.getElementById(key + profile);
                if (document.getElementById(key + profile+ "Options") == null) {
                    let optionsDiv = document.createElement('div');
                    optionsDiv.className="col";
                    optionsDiv.id=key + profile + "Options";
                    profileDiv.appendChild(optionsDiv);
                } 
                document.getElementById(key + profile + "Options").innerHTML += " <div class=\"row part-listing container\" onclick=copyToClipboard(\"" + 
                                                                                    caseModel[key][profile][i][0] +  "\")>\
                    <div class=\"col-4 text-right\">"
                        + caseModel[key][profile][i][0] + "\
                    </div>\
                    <div class=\"col text-left\">"
                        + caseModel[key][profile][i][1] + "\
                    </div>";
                        
                }
                
                i++;
            }
        }
    }
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Optional: Display a success message or change button text
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        // Optional: Handle errors
        console.error('Failed to copy: ', err);
      });
  }
  
  /* USE TO SORT PARTS ADDED TO PARTS LIST 
  const obj = { c: 3, b: 2, a: 1 };

const sortedKeys = Object.keys(obj).sort(); // ['a', 'b', 'c']

const sortedObj = {};
for (const key of sortedKeys) {
  sortedObj[key] = obj[key];
}

console.log(sortedObj); // { a: 1, b: 2, c: 3 } */