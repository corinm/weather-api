import { MetOfficeQuerier } from './MetOfficeQuerier';

// TODO: Import KDTree
// TODO: Import LinkedList?

export class LatLongFinder {

    private mq: MetOfficeQuerier;

    LatLongSearcher() {

        this.mq = new MetOfficeQuerier();

    }

    public search = () => {
        this.mq.requestMetLocations();
    }

}
