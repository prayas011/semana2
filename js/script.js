function celsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsiusField").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result2").innerText = "Resultado: " + fahrenheit;
}
function elevateNumber(){
    var numer1=parseFloat(document.getElementById("idNumber1").value);
    var numer2=parseFloat(document.getElementById("idNumber2").value);
    document.getElementById("result1").innerText = "Resultado: " + (Math.pow(numer1,numer2));
}
function addName() {
        var nameInput = document.getElementById("nameInput");
        var name = nameInput.value.trim();
        nameInput.focus();
        if (name !== "") {
            var nameList = document.getElementById("nameList");
            var listItem = document.createElement("li");
            listItem.textContent = name;
            nameList.appendChild(listItem);
            nameInput.value = "";
        }
    }
function addNumber() {
        var numberInput = document.getElementById("numberInput");
        var number = numberInput.value.trim();
        numberInput.focus();
        if (number !== "") {
            var numberList = document.getElementById("numberList");
            var listItem = document.createElement("li");
            listItem.textContent = number;
            numberList.appendChild(listItem);
            numberInput.value = "";
        }
    }
function average() {

        var numberList = document.getElementById("numberList");
        var numbers = numberList.getElementsByTagName("li");

        var filteredNameList = document.getElementById("filteredNameList");
        filteredNameList.innerHTML = "";
        var averageTotal=0;
        var sum=0;
        for (var i = 0; i < numbers.length; i++) {
            var number = parseInt( numbers[i].textContent);
            sum+=number;
        }
        averageTotal=sum/numbers.length;
        document.getElementById("result6").textContent = "Resultado: " + averageTotal;
    }
function filterNames() {
        var letterCountInput = document.getElementById("letterCountInput");
        var letterCount = parseInt(letterCountInput.value);

        var nameList = document.getElementById("nameList");
        var names = nameList.getElementsByTagName("li");

        var filteredNameList = document.getElementById("filteredNameList");
        filteredNameList.innerHTML = ""; 

        for (var i = 0; i < names.length; i++) {
            var name = names[i].textContent;
            if (name.length === letterCount) {
                var listItem = document.createElement("li");
                listItem.textContent = name;
                filteredNameList.appendChild(listItem);
            }
        }
    }
function Age() {
        var birthdateInput = document.getElementById("birthdate").value;
        var birthdate = new Date(birthdateInput);
        var today = new Date();

        var age = today.getFullYear() - birthdate.getFullYear();
        var monthDiff = today.getMonth() - birthdate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        document.getElementById("result4").textContent = "Resultado: " + age + " A�os";
    }
function countWords() {
    var inputString = document.getElementById("words").value;

    inputString = inputString.trim();

    var wordCount = 0;
    if (inputString !== "") {
        var words = inputString.split(/\s+/);
        wordCount = words.length;
    }

    document.getElementById("result5").textContent = "Resultado: " + wordCount;
}
function changecolor(){
    var color= document.getElementById("colorChange").value;
    var square = document.querySelector(".square");
        square.style.backgroundColor = color; 
}