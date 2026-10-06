const promoAgeButton=document.getElementById('promoAgeButton');
if(promoAgeButton){promoAgeButton.addEventListener('click',()=>{sessionStorage.setItem('fedHubAgeVerified','true');promoAgeButton.textContent='Verified — open support';promoAgeButton.parentElement.classList.add('verified');setTimeout(()=>location.href='support.html?age=verified',350)})}
