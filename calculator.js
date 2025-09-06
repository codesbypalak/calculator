  function calmeth() {
    let data = document.getElementById("display").value;
    document.getElementById("display").value = eval(data);
    console.log(data);
  }
  function addtodisplay(val) {
    let input = document.getElementById("display").value;
    document.getElementById("display").value= input+val;;
  }
  function clearvalue() {
    document.getElementById("display").value = '';
  }   
  function backspace(){
    let back=document.getElementById("display").value;
    document.getElementById("display").value=back.slice(0,-1);
  }