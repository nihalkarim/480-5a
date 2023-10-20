let css = 'html {filter: invert(1); animation: glitch 5s infinite;}';
css += '@keyframes glitch {0% { transform: none; opacity: 0.9; }'
css += '7% { transform: skew(-0.5deg, -0.75deg); opacity: 0.9;}'
css += '15% { transform: scale(1.1, 1.4); opacity: 1;}'
css += '22% {transform: none; opacity: 1;}'
css += '30% { transform: skew(0.75deg, -0.25deg);opacity: 0.9;}'
css += '37% {transform: none;opacity: 1;}'
css += '44% {transform: none;opacity: 1;}'
css += '52% {transform: skew(-1deg, 0.25deg);opacity: 0.9;}'
css += '59% {transform: none;opacity: 1;}'
css += '66% {transform: none;opacity: 1;}'
css += '74% {transform: skew(0.45deg, 0.8deg);opacity: 0.9;}'
css += '81% {transform: rotate(10deg); opacity: 1;}'
css += '89% {transform: scale(1.3, 1.1); opacity: 1;}'
css += '100% {transform: none; opacity: 1;} }';

let head = document.querySelector('head');
let styleTag = document.createElement('style');

if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = css;
} else {
    styleTag.appendChild(document.createTextNode(css));
}

head.appendChild(styleTag);

// let checkbox = document.querySelector('#checkbox');

// checkbox.addEventListener('change', toggleCss);

// function toggleCss() {
//     if (checkbox.checked) {
//         if (styleTag.styleSheet) {
//             styleTag.styleSheet.cssText = css;
//         } else {
//             styleTag.appendChild(document.createTextNode(css));
//         }
//     } else {
//         if (styleTag.styleSheet) {
//             styleTag.styleSheet.cssText = '';
//         } else {
//             styleTag.appendChild(document.createTextNode(css));
//         }
//     }
// }