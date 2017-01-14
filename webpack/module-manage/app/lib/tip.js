// define(['require'],function(require) {
//     function warn(msg) {
//         alert(msg);
//     }
//     function prompt(title, content) {
//         window.prompt(title, content);
//     }
//     return {
//         warn: warn,
//         prompt: prompt
//     }
// });

function warn(msg) {
    alert(msg);
}
function prompt(title, content) {
    window.prompt(title, content);
}
module.exports = {
    warn: warn,
    prompt: prompt
};
