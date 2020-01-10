/* to show Last Updated current*/

/* const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options); */
//to locale date string//

const options={weekday:'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentDate').textContent=new Date().toLocaleDateString('en-US', options);



