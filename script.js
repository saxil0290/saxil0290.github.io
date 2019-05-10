window.onload = function() {
    let links = document.getElementById('links').children;
    let logoMain = document.getElementById('logoMain');

    let scrollMain = document.getElementById('scrollMain');
    let scrollAbout = document.getElementById('scrollAbout');

    const scrollToElementsLinks = [
        { link: links[0], element: scrollMain},
        { link: links[1], element: scrollAbout},
        { link: links[2], element: scrollAbout}
    ];

    logoMain.addEventListener('click' , () => scrolling(scrollMain));
    for (let linkEvent of scrollToElementsLinks) {
        const { link, element } = linkEvent;

        link.addEventListener('click' , () => scrolling(element));
    }

    function scrolling(element) {
        event.preventDefault();
        element.scrollIntoView({block: "start", behavior: "smooth"});
    }
}
