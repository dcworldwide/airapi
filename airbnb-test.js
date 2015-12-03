Tinytest.add('search', function (test) {

    console.log("search");

    airbnb.search({
        location: 'New York, NY',
        checkin: '01/04/2016',
        checkout: '01/06/2016',
        guests: 2,
        page: 1
    }).then((res) => {
        //console.log(JSON.stringify(res));
        console.log(res);
    }).catch(err => {
        console.log(err);
    });

});