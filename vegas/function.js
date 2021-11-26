$(function() {
    $('#vegas').vegas({
        slides: [
            { src: 'vegas/overlays/03.jpeg' ,cover: true,},
            { src: 'vegas/overlays/06.png',cover: true, },
            { src: 'vegas/overlays/02.jpeg',cover: true,},
            { src: 'vegas/overlays/04.png' ,cover: true,},
            { src: 'vegas/overlays/05.png' ,cover: true,}
        ],
        animation: 'kenburns',
        transition: 'fade',
        timer: false,
    });
});