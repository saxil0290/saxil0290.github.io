window.onload = function () {
    let links = document.getElementById('links').children;
    let logoMain = document.getElementById('logoMain');


    let scrollSection1 = document.getElementById('scrollSection1');
    let scrollSection2 = document.getElementById('scrollSection2');
    let scrollSection3 = document.getElementById('scrollSection3');
    let scrollSection4 = document.getElementById('scrollSection4');

    const scrollToElementsLinks = [
        { link: logoMain, element: scrollSection1 },
        { link: links[0], element: scrollSection2 },
        { link: links[1], element: scrollSection3 },
        { link: links[2], element: scrollSection4 }
    ];

    for (let linkEvent of scrollToElementsLinks) {
        const { link, element } = linkEvent;

        link.addEventListener('click', () => scrolling(element));
    }

    function scrolling(element) {
        event.preventDefault();

        if (element.getAttribute('down')) {
            element.scrollIntoView({ block: "end", behavior: "smooth" });
            return;
        }

        element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
}
