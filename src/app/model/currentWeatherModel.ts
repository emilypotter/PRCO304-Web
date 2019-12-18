export class CurrentWeather {
    weather: Weather[];
    main: Main;
    wind: Wind;
}

export class Weather {
    description: string;
    icon: string;
    main: string;
}

export class Main {
    // tslint:disable-next-line:variable-name
    temp_max: number;
}

export class Wind {
    speed: number;
    deg: number;
}
