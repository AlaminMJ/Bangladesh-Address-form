


 const divisition = document.getElementById('divisition');
 const district= document.getElementById('district');
 const thana = document.getElementById('thana');
 const union = document.getElementById('union');
function getData(){
    fetch('divisions.json')
    .then(res => res.json())
    .then(json => display(json));
}
getData();

function display(data){ 
    data[2].data.forEach(element => {
        const item = document.createElement('Option');
        item.innerText=element.bn_name;
        item.value=element.id;
        divisition.appendChild(item);
    });    
}

divisition.addEventListener('change',()=>{
    const districtId = divisition.value;
    district.innerHTML='<option selected disabled>--Select District--</option>';
    fetch('districts.json')
    .then(res => res.json())
    .then(json => {
        json[2].data.forEach(element=>{
            if(districtId == element.division_id){
                const item = document.createElement('Option');
                item.value=element.id;
                item.innerText=element.bn_name;
                district.appendChild(item);        
            }
        })
    });
})



district.addEventListener('change',()=>{
    const thanaid = district.value;
    thana.innerHTML='<option selected disabled>--Select District--</option>';
    fetch('upazilas.json')
    .then(res => res.json())
    .then(json => {
        json[2].data.forEach(element=>{   
            if(thanaid == element.district_id){
                const item = document.createElement('Option');
                item.value=element.id;
                item.innerText=element.bn_name;
                thana.appendChild(item); 
            }
        })
    });
})


thana.addEventListener('change',()=>{
    const thanaid = thana.value;
    union.innerHTML='<option selected disabled>--Select District--</option>';
    fetch('unions.json')
    .then(res => res.json())
    .then(json => {
        json[2].data.forEach(element=>{   
            if(thanaid == element.upazilla_id){
                const item = document.createElement('Option');
                item.value=element.id;
                item.innerText=element.bn_name;
                union.appendChild(item);   
            }
        })
    });
})