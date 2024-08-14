var sUnit = document.querySelector("#s-unit");  // 왼쪽 텍스트 필드 옆에 표시하는 단위
var tUnit = document.querySelector("#t-unit");  // 오른쪽 텍스트 필드 옆에 표시하는 단위
var  cTof = true; //섭씨 -> 화씨

var source = document.querySelector("#s-value");  // 왼쪽 value
var target = document.querySelector("#t-value");   // 오른쪽 value

function exUnit(){
    source.value ="";
    target.value = "";
    convert = document.getElementById("convert");
    if(cTof){
        cTof = false; //화씨 -> 섭씨
        sUnit.innerHTML = "&#8457";   // 화씨 기호
		tUnit.innerHTML = "&#8451";   // 섭씨 기호
        convert.textContent = "(화씨에서 섭씨)"
    }
    else{
        cTof = true; // 섭씨 -> 화씨
        sUnit.innerHTML = "&#8451";   // 섭씨 기호
		tUnit.innerHTML = "&#8457";		// 화씨 기호
        convert.textContent = "(섭씨에서 화씨)"
    }
}

function converter(){
    if(cTof){
        target.value = (source.value * 1.8 + 32).toFixed(2); //toFixed(n) 은 n번째 소수점 까지 고정
    }
    else{
        target.value = ((source.value - 32) / 1.8).toFixed(2); //toFixed(n)은 n번째 소수점 까지 고정
    }
}


