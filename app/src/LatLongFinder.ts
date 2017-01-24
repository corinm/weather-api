import { MetOfficeQuerier } from './MetOfficeQuerier';
import { Observable } from 'rxjs';

// TODO: Import KDTree
// TODO: Import LinkedList?

export class LatLongFinder {

    private mq: MetOfficeQuerier;
    private metLocations: any;

    constructor() {
        this.mq = new MetOfficeQuerier();
    }

    public searchMetOfficeLocations() {

    }

}
