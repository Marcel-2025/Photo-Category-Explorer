
export interface Classification {
  app: string | null;
  topics: string[];
  confidence: {
    app: number;
    topics: { [key: string]: number };
  };
}

export interface Photo {
  id: string;
  baseUrl: string;
  mimeType: string;
  isScreenshot: boolean;
  width: number;
  height: number;
  classification?: Classification;
}

export interface FilterState {
  searchTerm: string;
  type: 'all' | 'image' | 'video';
  app: string;
  isScreenshot: boolean | null;
}
