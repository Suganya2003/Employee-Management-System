const add_data=()=>{
    var id=document.getElementById('id').value
    var name=document.getElementById('name').value
    var address=document.getElementById('address').value
    var dob=document.getElementById('dob').value
    var gender=document.getElementById('gender').value
    var department=document.getElementById('department').value
    console.log(id,name,address,dob,gender,department)
    if(id && name && address&& dob&& gender!=0 && department!=0){
        fetch('http://localhost:3233/addData',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
            
            body: JSON.stringify({
               data: [[id,name,address,dob,gender,department]]
            }),
            mode: 'cors'
            
            })




            .then(res => res.json())
            .then(data => {
                if (data.exists) {
                    
                    var msg = document.getElementById('msg')
                    msg.innerHTML = `<div class="alert alert-danger" role="alert">
                        ID already exists!
                    </div>`
                } else {
                    
                    fetch('http://localhost:3233/addData', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        
                        body: JSON.stringify({
                            data: [[id, name, address, dob, gender, department]]
                        }),
                        mode: 'cors'
                        
                    })

            .then(res =>{
                if(res.ok)
              {
                  console.log('suceed')
                  var msg=document.getElementById('msg')
                  msg.innerHTML=` <div class="alert alert-success" role="alert">
                  Employee Added Sucessfully
                </div>`
              }
              })
              .catch(err=>{
                console.log(err)
              })

    }

})
.catch(err => {
  console.log(err)
})
}
}