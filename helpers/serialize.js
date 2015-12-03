/**
 * Serialize an object into a valid URL string
 * @param  {Object} obj - Params object
 * @return {String} - A valid encoded URL string
 */
serialize = function (obj) {
    var params = [],
        encodedBrackets = encodeURIComponent('[]');

    //_.forOwn(obj, function (value, key) {
    //    if (typeof value === 'string' ||
    //        typeof value === 'number' ||
    //        typeof value === 'boolean') {
    //        params.push(key + '=' + encodeURIComponent(value));
    //    } else if (typeof value === 'object' && Array.isArray(value)) {
    //        params.push(value.map(function (param) {
    //            return key + encodedBrackets + '=' + encodeURIComponent(param);
    //        }).join('&'));
    //    }
    //});

    //console.log(params.join('&'));

    //params = [];
    //encodedBrackets = encodeURIComponent('[]');

    //console.log(obj);

    for (var key in obj) {
        var value = obj[key];

        if (typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean') {
            params.push(key + '=' + encodeURIComponent(value));
        } else if (typeof value === 'object' && Array.isArray(value)) {
            params.push(value.map(function (param) {
                return key + encodedBrackets + '=' + encodeURIComponent(param);
            }).join('&'));
        }
    }

    console.log(params.join('&'));

    return params.join('&');
}