export class Location {
    constructor(id, name, region, latitude, longitude) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    id: number;         // From Met Office e.g. 14
    name: string;       // From Met Office e.g. Carlisle Airport
    region: string;     // From Met Office e.g. Cumbria
    latitude: number;   // From Met Office e.g. 54.9375
    longitude: number;  // From Met Office e.g. -2.8092
}