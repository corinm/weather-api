import { Observable } from 'rxjs';
import { MetOfficeQuerier } from './MetOfficeQuerier';
import { Location } from './Location';
import * as kdt from 'kdt';

// TODO: Import KDTree
// TODO: Import LinkedList?

export class LatLongFinder {

    private metQuerier: MetOfficeQuerier;
    private metLocations: Location[];
    private tree: any = null;

    constructor() {
        this.metQuerier = new MetOfficeQuerier();
        this.metLocations = this.metQuerier.requestMetLocations(this.createTree);
    }

    /**
     * Returns K-Dimensional Tree made from Met Office locations
     */
    private createTree = (locations) => {
        let latLongs = [];
        const distance = (a, b) => Math.pow(a.lat - b.lat, 2) +  Math.pow(a.long - b.long, 2);
        const coords = locations
            .map(location => {
                return {
                    lat: location.latitude,
                    long: location.longitude
                }
            });

        console.log("Creating tree");
        return kdt.createKdTree(coords, distance, ['lat', 'long']);
    }

    public searchMetOfficeLocations = () => {
        console.log("Calling searchMetOfficeLocations()");
    }

}
