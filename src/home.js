



export function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content

  // Create elements
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';



  const description = document.createElement('p');
  description.textContent = 'Best food in town!';

  // Append to content
  content.appendChild(heading);
  // content.appendChild(image);
  content.appendChild(description);
}