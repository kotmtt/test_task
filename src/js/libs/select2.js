import $ from 'jquery';
import 'select2';

const selectMenu = {
    init() {
        // globally assign select2 fn to $ element
        $('.select2-ex').select2();
    }
};

export default selectMenu;