var createPlanBtn=document.getElementById("plan_btn")


createPlanBtn.addEventListener("click", async () => {
  var planName=document.getElementById('planName').value
  var food=document.getElementById('foodLabel').value
  var transport=document.getElementById('transportLabel').value
  var utilities=document.getElementById('utilitiesLabel').value
  var shopping=document.getElementById('shoppingLabel').value
  var misc=document.getElementById('miscLabel').value
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/Plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      name: planName,
      settings:`[{"Category": "Food","Value": ${food}}, {"Category": "Transport","Value": ${transport}},{"Category": "Utilities","Value": ${utilities}},{"Category": "Shopping","Value": ${shopping}},{"Category": "Misc","Value": ${misc}}]`
    }),
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href='budgetPlanSuccess.html'
      return data || {};
    })
    .catch((error) => console.log(error));
});
