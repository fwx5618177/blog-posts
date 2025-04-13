export interface EventItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  startDate: string; // ISO format date string
  endDate: string; // ISO format date string
  location: string;
  venue?: {
    name: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  imageUrl?: string;
  tags: string[];
  isFeatured?: boolean;
  isSponsored?: boolean;
  organizer?: string;
  attendees?: {
    current: number;
    capacity: number;
  };
  capacity?: number;
  registered?: number;
  price?: string | number;
  ticketUrl?: string;
  speakers?: Speaker[];
  agenda?: AgendaItem[];
  faqs?: FAQ[];
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  avatarUrl: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  speakers?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export type EventStatus = 'upcoming' | 'ongoing' | 'past';

export interface EventsFilterState {
  searchQuery: string;
  selectedTags: string[];
  selectedStatus: EventStatus | 'all';
}

export interface EventsFilterOptions {
  searchQuery?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  tags?: string[];
  locationQuery?: string;
  featuredOnly?: boolean;
  status?: 'all' | 'upcoming' | 'ongoing' | 'past';
  timeFrames: string[];
  categories: string[];
  formats: string[];
}

export interface EventsPageProps {
  initialEvents?: EventItem[];
  loading?: boolean;
}
