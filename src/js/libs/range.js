import 'ion-rangeslider'
const rangeInput = {
    init() {
        $(".js-range-slider").ionRangeSlider({
            min: 0,
            max: 100,
            from: 70,
            onChange: function (data) {
                console.log(data.from)
                $("[data-range-rezult]").text(data.from + '%');
            },

        });

    }
};

export default rangeInput;