const items = {
  'Pizza': 280,
  'Pasta': 120,
  'Salad': 60,
  'Fries': 100,
  'Coke' : 40,
  'Cheesecake': 160,
  'Tiramisu' : 140,
  'Pav Bhaji' : 50,
  'Pani Puri' : 40,
  'Sev Puri' : 40,
  ' Veg Biryani' : 180,
  'Chicken Biryani' : 250

};


function loadMenu() {
  const content = document.querySelector(`#content`);
  content.innerHTML='';

  const heading = document.createElement(`h1`);
  heading.textContent=`Our Menu`;
  content.appendChild(heading);


  const menuList = document.createElement(`ul`);


  for (const [dish , price] of Object.entries(items)){
    const listItem = document.createElement('li');
    listItem.textContent=`${dish} : ₹${price}`;
    menuList.appendChild(listItem);
  }
  content.appendChild(menuList);
}

export {loadMenu};



