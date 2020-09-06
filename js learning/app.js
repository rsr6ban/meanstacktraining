//Calculation of two input numbers
function Calculate() {
    var a, b, add, sub, mul, div;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    add = a + b;
    sub = a - b;
    mul = a * b;
    div = a / b;

    document.getElementById("Addition").value = add;
    document.getElementById("Subtraction").value = sub;
    document.getElementById("Multiplication").value = mul;
    document.getElementById("Division").value = div;
}
//printtable and factor of the number & check the input number is prime number or not
function printTable(num) {
    var input = num.value;
    if (!isNaN(input)) {
        var table = "";
        var number = "";
        for (i = 1; i <= 10; i++) {
            number = input * i;
            table += input + " * " + i + " = " + number + "<br/>";
        }
        document.getElementById("mul").innerHTML = table;
    }
    else {
        document.getElementById("mul").innerHTML = "Please Enter a valid Number";
    }
    // To check the Factors of the input number
    x = document.getElementById("t1").value
    x = parseInt(x)
    if (Number.isInteger(x)) {
        str = '';
        x1 = Math.ceil(x / 2)
        for (i = 2; i <= x1; i++) {
            if (x % i == 0) {
                str = str + i + ','
            }
        }
        if (str == '') {
            document.getElementById('d1').innerHTML = "Factors are: There are no Factor of the input number  "
        } else {
            document.getElementById('d1').innerHTML = "Factors are:  " + str + " is the Factor of the input number"
        }

    } else {
        document.getElementById('d1').innerHTML = "Enter an Integer  "
    }
    //To check the prime number
    {
        var n, i, flag = true;
        n = document.getElementById("t1").value;
        n = parseInt(n)
        for (i = 2; i <= n - 1; i++)
            if (n % i == 0) {
                flag = false;
                break;
            }

        if (flag == true)
            document.getElementById('d2').innerHTML = (n + " is prime");
        else
            document.getElementById('d2').innerHTML = (n + " is not prime");
    }
}

//Discount condition based on Age factor
function discount() {
    var dis;
    dis = Number(document.getElementById("Age").value);

    if (dis>=70) {
        document.getElementById("d3").innerHTML = "The discount is 50%";

    } else {
        document.getElementById("d3").innerHTML = "The discount is 20%";

    }

}