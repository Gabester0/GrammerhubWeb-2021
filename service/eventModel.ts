export class MeetupEvent {
  created?: number;
  duration?: number;
  id?: string;
  name?: string;
  date_in_series_pattern?: boolean;
  status?: string;
  time?: number;
  local_date?: string;
  local_time?: string;
  updated?: number;
  utc_offset?: number;
  waitlist_count?: number;
  yes_rsvp_count?: number;
  venue?: Venue;
  is_online_event?: boolean;
  group?: Group;
  link?: string;
  description?: string;
  how_to_find_us?: string;
  visibility?: string;
  member_pay_fee?: boolean;

  public constructor(init?: Partial<MeetupEvent>) {
    Object.assign(this, init);
  }
}

export interface Group {
  created: number;
  name: string;
  id: number;
  join_mode: string;
  lat: number;
  lon: number;
  urlname: string;
  who: string;
  localized_location: string;
  state: string;
  country: string;
  region: string;
  timezone: string;
}

export interface Venue {
  id: number;
  name: string;
  repinned: boolean;
  country: string;
  localized_country_name: string;
}

export interface Event {
  name: string;
  date: Date;
  time: string;
  url: string;
  location: Location;
}

interface Location {
  latitude: string;
  longitud: string;
}
