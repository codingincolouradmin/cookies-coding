
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

const themeDropdown = document.getElementById('changeThemeDropdown');
themeDropdown.addEventListener("change", function(event) {
    event.preventDefault(); // May not be necessary
    const selectedOption = themeDropdown.options[themeDropdown.selectedIndex].innerText;
    if (selectedOption === "Dark") {
        let linkedStylesheet = document.getElementById('styles');
        linkedStylesheet.setAttribute('href', './contactStylesDark.css')
    } else if (selectedOption == "Light") {
        let linkedStylesheet = document.getElementById('styles');
    linkedStylesheet.setAttribute('href', './contactStylesLight.css')
    } else {
        console.log("nothing");
    }
})


