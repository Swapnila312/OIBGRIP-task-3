const calculateTemp = () => {
    const temp_value=document.getElementById('temp').value;
    const temp_selected=document.getElementById('temp_type');
    const temp_option=temp_type.options[temp_selected.selectedIndex].value;

    const celtofah = (cel) => {
        let fahr=Math.round((cel*9/5)+32);
        return fahr;
    }
    const fahtocel = (fah) => {
        let cels=Math.round((fah-32)*5/9);
        return cels;
    }
    let result;
    if(temp_option=='celsius'){
        result=celtofah(temp_value);
        document.getElementById('result_container').innerHTML= `= ${result}°Celsius`;
    }else{
        result=fahtocel(temp_value);
        document.getElementById('result_container').innerHTML= `= ${result}°Fahrenheit`;
    }
    document.getElementById('result_container').style.color="blue";    
    document.getElementById('result_container').style.fontSize="22px";   
    document.getElementById('result_container').style.fontWeight="bold";
    document.getElementById('result_container').style.padding="50px 10px 50px 10px";

}