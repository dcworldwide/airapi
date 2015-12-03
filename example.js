// Search for available listings in NYC
airbnb.search({
    location: 'New York, NY',
    checkin: '07/04/2015',
    checkout: '07/06/2015',
    guests: 2,
    page: 1
}).then(function (results) {
    console.log(results);
});

// Get info for hosting ID: 4639847
airbnb.getInfo(4639847).then(function (info) {
    console.log(info);
});

// Returns
//let getInfoRes = {
//    "metadata": {},
//    "listing": {
//        "city": "Cammeray",
//        "collection_ids": null,
//        "country": "Australia",
//        "has_double_blind_reviews": false,
//        "id": 7352188,
//        "instant_bookable": false,
//        "lat": -33.821001145393,
//        "lng": 151.21725011134,
//        "medium_url": "https:\/\/a2.muscache.com\/im\/pictures\/93294463\/7934416f_original.jpg?aki_policy=medium",
//        "name": "Beautiful place with a great view",
//        "native_currency": "USD",
//        "picture_url": "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//        "price": 39,
//        "price_formatted": "$40",
//        "price_native": 40,
//        "smart_location": "Cammeray, Australia",
//        "thumbnail_url": "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//        "user": {
//            "user": {
//                "about": "",
//                "first_name": "Marten",
//                "has_profile_pic": true,
//                "id": 38525292,
//                "identity_verified": false,
//                "is_superhost": false,
//                "picture_url": "https:\/\/a2.muscache.com\/ac\/pictures\/e19f2e64-172d-4634-b34b-a2f44e19444a.jp\u2026crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
//                "reviewee_count": 6,
//                "thumbnail_url": "https:\/\/a2.muscache.com\/ac\/pictures\/e19f2e64-172d-4634-b34b-a2f44e19444a.jp\u2026&crop=w:w;*,*&crop=h:h;*,*&resize=50:*&output-format=jpg&output-quality=70"
//            }
//        },
//        "user_id": 38525292,
//        "xl_picture_url": "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
//        "address": "Carter Street, Cammeray, NSW 2062, Australia",
//        "bathrooms": 1,
//        "bedrooms": 1,
//        "beds": 1,
//        "cancellation_policy": "strict",
//        "country_code": "AU",
//        "has_availability": true,
//        "listing_native_currency": "AUD",
//        "market": "Sydney",
//        "min_nights": 1,
//        "neighborhood": "Cammeray",
//        "person_capacity": 2,
//        "picture_count": 3,
//        "picture_urls": [
//            "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//            "https:\/\/a1.muscache.com\/ac\/pictures\/93294764\/5bdb9926_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//            "https:\/\/a2.muscache.com\/ac\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jp\u2026polation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70"
//        ],
//        "property_type": "Apartment",
//        "reviews_count": 4,
//        "room_type": "Private room",
//        "room_type_category": "private_room",
//        "special_offer": null,
//        "state": "NSW",
//        "thumbnail_urls": [
//            "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//            "https:\/\/a1.muscache.com\/ac\/pictures\/93294764\/5bdb9926_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//            "https:\/\/a2.muscache.com\/ac\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70"
//        ],
//        "xl_picture_urls": [
//            "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
//            "https:\/\/a1.muscache.com\/ac\/pictures\/93294764\/5bdb9926_original.jpg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
//            "https:\/\/a2.muscache.com\/ac\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jp\u2026lation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70"
//        ],
//        "zipcode": "2062",
//        "bed_type": "Real Bed",
//        "bed_type_category": "real_bed",
//        "currency_symbol_left": "$",
//        "force_mobile_legal_modal": false,
//        "require_guest_profile_picture": false,
//        "access": "Public transport is only 15 minutes to the city but not very frequented. This place would be ideal for someone with a car.",
//        "amenities": [
//            "TV",
//            "Cable TV",
//            "Internet",
//            "Wireless Internet",
//            "Pool",
//            "Kitchen",
//            "Elevator in Building",
//            "Washer",
//            "Dryer",
//            "Smoke Detector"
//        ],
//        "amenities_ids": [
//            1,
//            2,
//            3,
//            4,
//            7,
//            8,
//            21,
//            33,
//            34,
//            35
//        ],
//        "calendar_updated_at": "a week ago",
//        "cancel_policy": 5,
//        "cancel_policy_short_str": "Strict",
//        "check_in_time": 15,
//        "check_out_time": 12,
//        "cleaning_fee_native": null,
//        "currency_symbol_right": null,
//        "description": "Nice and quiet upper class neighborhood that is just 15 minutes from the city. Comes with a parking space and would be ideal for travelers with a car coming to explore Sydney and surroundings for two weeks. Homely feeling with all amenities.\n\nLarge bedroom with queen sized bed, comfortable living room with a great 180 degree view\n\nPublic transport is only 15 minutes to the city but not very frequented. This place would be ideal for someone with a car.\n\nThe apartment is shared between a couple (us) and our flatmate who will be around and able to help out with any needs.\n\nVery nice upper class neighborhood, quiet and considerate.\n\nUnder cover parking is included right at the entrance to the building. Public transport is available but not very frequent.",
//        "description_locale": "en",
//        "experiences_offered": "none",
//        "extra_user_info": null,
//        "extras_price_native": null,
//        "guests_included": 1,
//        "has_agreed_to_legal_terms": true,
//        "has_viewed_cleaning": null,
//        "has_viewed_ib_perf_dashboard_panel": null,
//        "has_viewed_terms": true,
//        "house_rules": "Clean and well-mannered.",
//        "instant_book_welcome_message": null,
//        "interaction": "The apartment is shared between a couple (us) and our flatmate who will be around and able to help out with any needs.",
//        "is_location_exact": true,
//        "jurisdiction_names": null,
//        "jurisdiction_rollout_names": null,
//        "language": "en",
//        "license": null,
//        "listing_cleaning_fee_native": null,
//        "listing_monthly_price_native": null,
//        "listing_price_for_extra_person_native": 10,
//        "listing_security_deposit_native": null,
//        "listing_weekend_price_native": null,
//        "listing_weekly_price_native": null,
//        "locale": "en",
//        "map_image_url": "https:\/\/maps.googleapis.com\/maps\/api\/staticmap?maptype=roadmap&markers=-33.\u2026e-airbnbinc&channel=monorail-prod&signature=uRtEngZhOX4s2wsaDH8vqA9fvb4%3D",
//        "max_nights": 1125,
//        "max_nights_input_value": null,
//        "min_nights_input_value": null,
//        "monthly_price_factor": 1,
//        "monthly_price_native": null,
//        "neighborhood_overview": "Very nice upper class neighborhood, quiet and considerate.",
//        "notes": "",
//        "photos": [
//            {
//                "id": 51501227,
//                "picture": "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//                "sort_order": 1,
//                "caption": "",
//                "thumbnail": "https:\/\/a2.muscache.com\/ac\/pictures\/93294463\/7934416f_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//                "xl_picture": "https:\/\/a2.muscache.com\/im\/pictures\/93294463\/7934416f_original.jpg?aki_policy=x_large"
//            },
//            {
//                "id": 51501228,
//                "picture": "https:\/\/a1.muscache.com\/ac\/pictures\/93294764\/5bdb9926_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//                "sort_order": 2,
//                "caption": "",
//                "thumbnail": "https:\/\/a1.muscache.com\/ac\/pictures\/93294764\/5bdb9926_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//                "xl_picture": "https:\/\/a1.muscache.com\/im\/pictures\/93294764\/5bdb9926_original.jpg?aki_policy=x_large"
//            },
//            {
//                "id": 89417974,
//                "picture": "https:\/\/a2.muscache.com\/ac\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jp\u2026polation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
//                "sort_order": 3,
//                "caption": "",
//                "thumbnail": "https:\/\/a2.muscache.com\/ac\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70",
//                "xl_picture": "https:\/\/a2.muscache.com\/im\/pictures\/a6b49c0b-79c4-41ec-82e8-2e9ab3786a16.jpg?aki_policy=x_large"
//            }
//        ],
//        "picture_captions": [
//            "",
//            "",
//            ""
//        ],
//        "price_for_extra_person_native": 7,
//        "property_type_id": 1,
//        "public_address": "Carter Street, Cammeray, NSW 2062, Australia",
//        "require_guest_phone_verification": false,
//        "requires_license": false,
//        "security_deposit_formatted": "",
//        "security_deposit_native": null,
//        "security_price_native": null,
//        "space": "Large bedroom with queen sized bed, comfortable living room with a great 180 degree view",
//        "square_feet": null,
//        "star_rating": 4.5,
//        "summary": "Nice and quiet upper class neighborhood that is just 15 minutes from the city. Comes with a parking space and would be ideal for travelers with a car coming to explore Sydney and surroundings for two weeks. Homely feeling with all amenities.",
//        "time_zone_name": "Australia\/Sydney",
//        "transit": "Under cover parking is included right at the entrance to the building. Public transport is available but not very frequent.",
//        "weekly_price_factor": 1,
//        "weekly_price_native": null,
//        "in_building": false,
//        "in_toto_area": false,
//        "recent_review": {
//            "review": {
//                "comments": "From the second we entered Martens home we felt EXTREMELY WELCOMED!!!!!! Marten and Julia are successful and intellectual people. You will definitely have great conversations with them and learn so much about Sydney and the surrounding area. They're travelers as well and will give you great advice if needed. There home is clean and welcoming, and the sight from there apartment is amazing especially if you enjoy wildlife. Its a very clean and peaceful town. We really enjoyed our stay and thank them very much.",
//                "created_at": "2015-11-13T14:28:41Z",
//                "id": 53868376,
//                "listing_id": 7352188,
//                "reviewee_id": 38525292,
//                "reviewer": {
//                    "user": {
//                        "first_name": "Ali",
//                        "has_profile_pic": true,
//                        "id": 28766544,
//                        "picture_url": "https:\/\/a2.muscache.com\/ac\/pictures\/8c19248e-c92c-41fa-9322-38ff27c5b591.jp\u2026crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70",
//                        "thumbnail_url": "https:\/\/a2.muscache.com\/ac\/pictures\/8c19248e-c92c-41fa-9322-38ff27c5b591.jp\u2026&crop=w:w;*,*&crop=h:h;*,*&resize=50:*&output-format=jpg&output-quality=70"
//                    }
//                },
//                "reviewer_id": 28766544
//            }
//        },
//        "toto_opt_in": null,
//        "wireless_info": null
//    }
//}




// Get calendar from June to Nov 2015 for hosting ID: 4639847
airbnb.getCalendar(4639847, {
    month: 6,
    year: 2015,
    count: 6
}).then(function (schedules) {
    console.log(schedules);
});

// Get reviews for user ID: 4586440
airbnb.getReviews(4586440, {
    role: 'host'
}).then(function (reviews) {
    console.log(reviews);
});

// Estimate income for hosting ID: 4569115 for Jan + Feb, 2015
airbnb.getCalendar(4569115, {
    currency: 'USD',
    month: 1,
    year: 2015,
    count: 2
}).then(function (schedules) {
    console.log(airbnb.getEstIncome(schedules));
});

