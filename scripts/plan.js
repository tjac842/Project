var form=document.getElementById("plan_form")

form.addEventListener('submit', function(e){
 e.preventDefault()
 var planName=document.getElementById('planName').value
 var food=document.getElementById('foodLabel').value
 var transport=document.getElementById('transportLabel').value
 var utilities=document.getElementById('utilitiesLabel').value
 var shopping=document.getElementById('shoppingLabel').value
 var misc=document.getElementById('miscLabel').value


 fetch('https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/plan', {
  method: 'POST',
  body: JSON.stringify({
    name:planName,
    settings:[{
      "Category": "Food",
      "Value": food,
    }, {
      "Category": "Transport",
      "Value": transport,
    },
    {
      "Category": "Utilities",
      "Value": utilities,
    },
    {
      "Category": "Shopping",
      "Value": shopping,
    },
    {
      "Category": "Misc",
      "Value": misc,
    },
  ]
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
}).catch(error => console.error('Error:', error)); 
});