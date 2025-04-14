
export function animateMenuBar() {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    if (!line1 || !line2 || !line3) return;

    [line1, line2, line3].forEach((line, index) => {
        line.animate(
            [
                { transform: 'scaleX(1) translateX(0px)' },
                { transform: 'scaleX(1.5) translateX(30px)' },    
            ],
            {
                duration: 400,
                delay: index * 100,
                fill: 'forwards',
                easing: 'ease-in-out'
            }
        )
    });
}