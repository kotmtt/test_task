import openMenu from "./header";
import selectMenu from "./select2";
import fileInput from "./files";
import rangeInput from "./range";
document.addEventListener('DOMContentLoaded', () => { // когда будет готов весь DOM
    openMenu.init();
    selectMenu.init();
    fileInput.init()
    rangeInput.init()
});