export interface Gps {
  label: string;
  latitude: string;
  longitude: string;
}

export interface GpsRecord extends Gps {
  id: string;
}
