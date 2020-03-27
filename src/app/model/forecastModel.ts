export class Forecast {
    data: Data;
    associated: Associated;
}

export class Associated {
    forecastLocation: ForecastLocation;
}

export class ForecastLocation {
    lon: number;
    lat: number;
}

export class Data {
    wave: Wave[];
}

export class Wave {
    timestamp: number;
    surf: Surf;
}

export class Surf {
    min: number;
    max: number;
}
