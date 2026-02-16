export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    content.appendChild(heading);
}