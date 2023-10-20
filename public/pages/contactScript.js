
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
themeDropdown.addEventListener("change", function() {
    const selectedOption = themeDropdown.options[themeDropdown.selectedIndex].innerText;
    if (selectedOption === "Dark") {
        console.log('we are dark');
        document.body.classList.remove("light-theme");
        document.body.classList.toggle("dark-theme");
    } else if (selectedOption == "Light") {
        console.log('we are light');
        document.body.classList.remove("dark-theme");
        document.body.classList.toggle("light-theme");
    } else {
        console.log("nothing");
    }
})


