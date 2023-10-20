
const handleClick = (element) => {
    const text = element.target.outerText;
    switch (text) {
        case 'Home':
            window.location.href = '../index.html'
            break;
        case 'Portfolio':
            console.log('portfolio page');
            break;
        case 'Contact':
            console.log('contact page');
            break;
        case 'About':
            console.log('about page');
            break;
        default:
            console.log('Default case');
    } 
}


// Event listener for navigation links
const spanNavLink = document.querySelectorAll('.spanLink');
spanNavLink.forEach(function(span) {
    span.addEventListener("click", handleClick)
})

const themeButton = document.getElementById('changeTheme');
themeButton.addEventListener("click", function(event) {
    event.preventDefault(); // May not be necessary
    let linkedStylesheet = document.getElementById('styles');
    linkedStylesheet.setAttribute('href', './contactStylesDark.css')
})


