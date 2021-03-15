// exports.onInitialClientRender = () => {
//   console.log("ReactDOM.render has executed")
// }
//scrolltrigger refresh would be nice to go here but having trouble initializing gsap plugins with this syntax

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 1000)
}