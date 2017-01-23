class LatLongSearcher {
    postcode = '';
    latitude = 0;
    longitude = 0;
    metId = 0;

    // This is the location according to the Met Office's nearest data source
    location = '';

    private PostcodesIOQuerier pq;
    private JSONProcessor jp;
    private LatLongSearcher lls;
}

module.exports = LatLongSearcher;
