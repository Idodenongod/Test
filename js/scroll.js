let element = document.getElementById('scr-el');
let blocks = document.getElementsByClassName('block-content');
let container = document.getElementsByClassName('scroll-horizontal-container');

let hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
});

element.addEventListener('wheel', (event) => {
    let translateX = Math.abs(
        getTranslate3d(document.getElementsByClassName('horizontal-scroll')[0])
    );
    let maxWidth =
        document.getElementsByClassName('horizontal-scroll')[0].clientWidth -
        element.clientWidth;
    let scrolled = (translateX / maxWidth) * 100;

    console.log(
        getTranslate3d(document.getElementsByClassName('horizontal-scroll')[0])
    );

    document.getElementById('myBar').style.width = `${scrolled}%`;
});

function getTranslate3d(element) {
    var values = element.style.transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return [];
    }
    return values[1].split(/,\s?/g)[0].split('px')[0];
}
