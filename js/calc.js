(function() {
  let elements = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  };

  let viewer = elements("#view"),
    equals = elements("#equals"),
    nums = elements(".num"),
    operators = elements(".ops"),
    theNum = "",
    oldNum = "",
    resultNum,
    operator;

  let setNum = function() {
    if (resultNum) {
      theNum = this.getAttribute("data-num");
      resultNum = "";
    }
    else {
      theNum += this.getAttribute("data-num");
    }
    viewer.innerHTML = theNum;
  };

  let moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", "");
  };

  let displayNum = function() {

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divide":
        resultNum = oldNum / theNum;
        break;

      default:
        resultNum = theNum;
    }

    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        resultNum = "NaN";
      }
      else {
        resultNum = "Infinite";
      }
    }
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);
    oldNum = 0;
    theNum = resultNum;
  };

  let clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  for (let i = 0, l = operators.length; i < l; i++) {
    operators[i].onclick = moveNum;
  }

  equals.onclick = displayNum;
  elements("#clear").onclick = clearAll;

}());