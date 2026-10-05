function openTrial(){
  document.getElementById('trialModal').style.display='flex';
}

function closeTrial(){
  document.getElementById('trialModal').style.display='none';
}

function startTrial(){

  let name=document.getElementById('trialName').value;
  let email=document.getElementById('trialEmail').value;

  if(name==='' || email===''){
    alert('Please fill all fields');
  }

  else{
    document.getElementById('successMessage').style.display='block';
  }

}

function joinPlan(plan){
  alert('You selected '+plan+' Plan');
}

function sendMessage(){
  alert('Message Sent Successfully');
}
