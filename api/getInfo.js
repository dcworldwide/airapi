/**
 * Get info for a particular hosting
 * @param  {Number, String} hosting - Hosting ID
 * @param  {Function} successCallback - Success callback to invoke
 * @param  {Function} failureCallback - Failure callback to invoke
 * @return {Void} - Hosting info is passed onto callbacks
 */
getInfo = function (hostingId) {

    return new Promise(function (resolve, reject) {

        var requestConfigs = _.extend({}, configs.DEFAULT_REQUEST_CONFIGS, {
            url: configs.HOSTING_INFO_URL + '/' + hostingId + '?' + serialize(configs.DEFAULT_REQUEST_PARAMS)
        });

        let res = HTTP.call("GET", requestConfigs.url,
            {
                headers: requestConfigs.headers
            },
            (err, res) => {

                if (err) reject(err);
                return resolve(res.data);
            });
    });
}
