import React, {useState}  from "react";


function SortBar({onSort}) {
    const [checked, setChecked] = useState (false)

    // function checkHealth (){
    //     setChecked(!checked)
    // }
    // function checkArmor (){
    //     setChecked(!checked)
    // }
    // function checkDamage (){
    //     setChecked(!checked)
    // }
    function itemChecked (e){
        setChecked(!checked)
        onSort(e.target.value)
    }
  
  return (
    <div>
      <div> Sort By 
        <div>
            <input type="radio" id="health" name="drone" value="health" onChange={itemChecked} checked={checked}/>
            <label htmlFor="health">Health </label>
        </div> 
        {/* <div>
            <input type="radio" id="armor" name="drone" value="armor" onChange={itemChecked} checked={checked}/>
            <label htmlFor="armor">Armor </label>
        </div>
        <div>
            <input type="radio" id="damage" name="drone" value="damage" onChange={itemChecked} checked={checked}/>
            <label htmlFor="damage">Damage </label>
        </div> */}
      </div>
      
    </div>
  );
}

export default SortBar;