var LastElementDOM;
var LastValueDOM;

function mutateDOM(ElementDOM, value) {
    if (LastElementDOM === ElementDOM && LastValueDOM === value)
        return false;

    LastElementDOM = ElementDOM;
    LastValueDOM = value;

    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });
    ElementDOM.dispatchEvent(event);
}

function selectChange(_this) {
    mutateDOM(_this, _this.value);
}

window.JsFunctions = {

    initializeSelect2: function (name, placeholder) {
        if (placeholder === null || placeholder === '') {
            $('#' + name).select2({
                allowClear: false
            });
        }
        else {
            $('#' + name).select2({
                placeholder: 'Seleccione una opción',
                allowClear: false
            });
        }
        return true;
    }

};