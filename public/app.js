function myfunc(){

    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
    b1btn=document.getElementById("b1");
    b2btn=document.getElementById("b2");
    b3btn=document.getElementById("b3");
    b4btn=document.getElementById("b4");
    b5btn=document.getElementById("b5");
    b6btn=document.getElementById("b6");
    b7btn=document.getElementById("b7");
    b8btn=document.getElementById("b8");
    b9btn=document.getElementById("b9");


    //Cheching X
    if ((b1=='X')&&(b2=='X')&&(b3=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b1=='X')&&(b4=='X')&&(b7=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b2btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b3btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b7=='X')&&(b8=='X')&&(b9=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;

    }

    elseif ((b3=='X')&&(b6=='X')&&(b9=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;

    }

    elseif ((b1=='X')&&(b5=='X')&&(b9=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;

    }

    elseif ((b3=='X')&&(b5=='X')&&(b7=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b2=='X')&&(b5=='X')&&(b8=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b4=='X')&&(b5=='X')&&(b6=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    // Checking O
    elseif ((b1=='O')&&(b2=='O')&&(b3=='O')){
        document.getElementById('result').innerHTML="Player X Won !";
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b1=='O')&&(b4=='O')&&(b7=='O')){
        document.getElementById('result').innerHTML="Player X Won !";
        b2btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;
        b3btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b7=='O')&&(b8=='O')&&(b9=='O')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b6btn.disabled=true;

    }

    elseif ((b3=='O')&&(b6=='O')&&(b9=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b5btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;

    }

    elseif ((b1=='X')&&(b5=='X')&&(b9=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b2btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;

    }

    elseif ((b3=='X')&&(b5=='X')&&(b7=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b2=='X')&&(b5=='X')&&(b8=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b3btn.disabled=true;
        b4btn.disabled=true;
        b6btn.disabled=true;
        b7btn.disabled=true;
        b9btn.disabled=true;

    }

    elseif ((b4=='X')&&(b5=='X')&&(b6=='X')){
        document.getElementById('result').innerHTML="Player X Won !";
        b1btn.disabled=true;
        b2btn.disabled=true;
        b3btn.disabled=true;
        b7btn.disabled=true;
        b8btn.disabled=true;
        b9btn.disabled=true;

    }
}