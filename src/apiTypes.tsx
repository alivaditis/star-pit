export interface ApiBookVolume {
  kind: string;
  totalItems: number;
  items: ApiBookInfo[];
}

export interface BookVolume {
    kind: string;
    totalItems: number;
    items: BookInfo[];
}

export interface ApiBookInfo {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}

export interface BookInfo {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    images: {
      smallThumbnail: string;
      thumbnail: string;
    };
    status: string | null;
}
