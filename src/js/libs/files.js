const fileInput = {
    init() {

        const getInputFile = document.querySelector('#form-file');
        getInputFile.addEventListener('input', (e) => {
            document.querySelector('[value-form]').innerHTML = getInputFile.files[0].name;
        });
    }
};

export default fileInput;