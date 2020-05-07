
array11 = "";
showDiv();

function myFunction() {
    document.getElementById("subCategory").style.display = "block";
     document.getElementById("previewsrc").style.display="block";
}

function previewFile(event) {
    var selectedFile = event.target.files[0];
    document.getElementById("previewsrc").style.display="block";
    var imgtag = document.getElementById("previewsrc");
   
    imgtag.title = selectedFile.name;
    var reader = new FileReader();
    reader.onload = function (event) {
        imgtag.src = event.target.result;
    };
    reader.readAsDataURL(selectedFile);


}

function addSubCategory() {
    document.getElementById("previewsrc").style.display = "block";
    var subcat = document.getElementById("asubcat").value;
    var src = document.getElementById("previewsrc").src;
    var cat = document.getElementById("app").value;
    var array1 = localStorage.getItem("appCategory", array11);
    if (array1 == undefined) {
        array11 = cat + "," + subcat + "," + src + "||";

    } else {
        array11 = array1 + cat + "," + subcat + "," + src + "||";
    }

    localStorage.setItem("appCategory", array11);
    showDiv();
}

function showDiv() {
    document.getElementById("asubcat").value = "";
    document.getElementById("previewsrc").src="";
    document.getElementById("subcat").value="";
    document.getElementById("health").innerHTML = "";
    document.getElementById("fun").innerHTML = "";
    document.getElementById("social").innerHTML = "";
    var div1 = document.createElement("h1");
    div1.setAttribute('class', 'h1');
    div1.innerHTML ="Health";
    var div2 = document.createElement("h1");
    div2.setAttribute('class', 'h1');
    div2.innerHTML ="Fun";
    var div3 = document.createElement("h1");
    div3.setAttribute('class', 'h1');
    div3.innerHTML ="Social";
    document.getElementById("health").appendChild(div1);
    document.getElementById("fun").appendChild(div2);
    document.getElementById("social").appendChild(div3);
    var array = localStorage.getItem("appCategory");
    if (array == null) {

    } else {
        array = array.split("||");
        for (var i = 0; i < array.length; i++) {
            var subArr = array[i].split(",");
            if (subArr != "") {

                if (subArr[0] == "1") {
                    document.getElementById('health').style.display = 'block';
                    var h1 = document.createElement("h3");
                    h1.setAttribute('class', 'h3');
                    h1.innerHTML = subArr[1];
                    var html1 = subArr[2] + "," + subArr[3];
                    var crate_img = document.createElement("IMG");
                    crate_img.setAttribute("src", html1);
                    crate_img.setAttribute("class", 'img');
                    document.getElementById("health").appendChild(h1);
                    document.getElementById("health").appendChild(crate_img);
                } else if (subArr[0] == "2") {
                    document.getElementById('fun').style.display = 'block';
                    var h1 = document.createElement("h3");
                    h1.setAttribute('class', 'h3');
                    h1.innerHTML = subArr[1];
                    var html1 = subArr[2] + "," + subArr[3];
                    var crate_img = document.createElement("IMG");
                    crate_img.setAttribute("src", html1);
                    crate_img.setAttribute("class", 'img');
                     document.getElementById("fun").appendChild(h1);
                    document.getElementById("fun").appendChild(crate_img);
                } else {
                     document.getElementById("social").style.display = 'block';
                    var h1 = document.createElement("h3");
                    h1.setAttribute('class', 'h3');
                    h1.innerHTML = subArr[1];
                    var html1 = subArr[2] + "," + subArr[3];
                    var crate_img = document.createElement("IMG");
                    crate_img.setAttribute("src", html1);
                    crate_img.setAttribute("class", 'img');
                     document.getElementById("social").appendChild(h1);
                    document.getElementById("social").appendChild(crate_img);
                }
            }

        }
    }

}
