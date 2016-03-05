/**
 * Search hostings
 * @param  {Object} options - Search options
 * @return {Promise} - contains JSON response if success
 *
 * Available search options
 * options = {
 *   checkin: {String},
 *   checkout: {String},
 *   guests: {Number},
 *   page: {Number},
 *   location: {String}, e.g: 'New York, NY' or 'Seattle, WA'
 *   price_min: {Number},
 *   price_max: {Number},
 *   min_bedrooms: {Number},
 *   min_bathrooms: {Number},
 *   min_beds: {Number},
 *   superhost: {Boolean},
 *   hosting_amenities: {Array of id}, e.g: [1,4]
 *   property_type_id: {Array of id}, e.g: [1]
 *   languages: {Array of id}, e.g: [1,64]
 *   keywords: {String}, e.g: 'ocean,view,balcony'
 *   room_types: {Array}, e.g: ['Entire home/apt', 'Private room', 'Shared room']
 *   ib: {Boolean}, instant-book,
 *   neighborhoods: {Array}, e.g: ['Belltown', 'Queen Anne']
 * }
 */
search = function (options) {

    return new Promise(function (resolve, reject) {

        // Make sure search options is provided
        if (!options || !_.isObject(options)) {
            reject('Must provide search options');
        }

        // 'https://www.airbnb.com.au/s/new-york--ny?checkin=20-11-2015&checkout=21-11-2015&ss_id=zo2jixwj' //
        var requestConfigs = _.extend({}, configs.DEFAULT_REQUEST_CONFIGS, {
            url: configs.SEARCH_URL + '?' + serialize(options)
        });

        console.log(requestConfigs.url);
        console.log(requestConfigs.headers);

        let res = HTTP.call("GET", requestConfigs.url, {headers: requestConfigs.headers},
            (err, res) => {

                if (err) reject(err);

                console.log(res.statusCode);

                try {

                    let content = res.content;

                    //console.log(res.content.substring(6000, 12000))

                    if (content && content.startsWith("{\"results")) {
                        console.log('sss');
                        let x = JSON.parse(content);
                        console.log(x);
                        content = x.results;
                    }

                    // @see https://github.com/cheeriojs/cheerio. Options from htmlparser2
                    $ = cheerio.load(content, {
                        normalizeWhitespace: false,
                        xmlMode: false,
                        decodeEntities: true
                    });

                    let listings = [];

                    $('.listing').each(function (i, el) {

                        try {

                            //console.log($(this).text());

                            let item = $(this);
                            //let address = item.find('.address').text();
                            let propertyInfo = item.find('.details');

                            // Find room type (TODO brittle)
                            let roomType = ""; // propertyInfo.find("div:contains('Room type')");
                            //roomType = roomType[roomType.length - 1];
                            //roomType = roomType.children[1].children[0].data;

                            let summary = ""; //item.find('.summary'); //[0].text();

                            let images = [];

                            item.find('.media-cover img').each(function (i, el) {
                                let img = $(el)[0].attribs;

                                //summary = img.alt;

                                let items = JSON.parse(img['data-urls']);

                                for (let o of items) {
                                    images.push({
                                        url: o,
                                    });
                                }
                            });

                            listings.push({

                                loc: {
                                    lat: parseFloat(item.data('lat')),
                                    lng: parseFloat(item.data('lng')),
                                    address: '',
                                    street: '',
                                    city: '',
                                    state: '',
                                    country: '',
                                    zip: '',
                                },

                                resource: {
                                    id: item.data('id').toString(),
                                    url: 'https://www.airbnb.com' + item.data('url'),
                                },

                                images: images,

                                hotelName: item.data('name'),
                                roomName: roomType,
                                //desc: summary,
                                user: item.data('user'),
                                instantBook: item.data('instant-book'),
                                cost: parseInt(item.data('price').replace(/(<[^>]*>)[^\d]*/gi, '')),
                                hasSuperhostBadge: item.data('has-superhost-badge'),
                                hasNewListingBadge: item.data('has-new-listing-badge'),
                                rating: parseInt(item.data('star-rating')),
                                reviewCount: item.data('review-count')
                            });

                        } catch (err) {
                            console.error(err);
                        }

                    }).get();

                    resolve(listings);

                } catch (err) {
                    console.error(err);
                }

                resolve([]);
            });
    });
}