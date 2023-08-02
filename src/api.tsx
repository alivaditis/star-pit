import { BookVolume, ApiBookInfo, BookInfo } from "./apiTypes"


function handleError(res: Response) {
  if(!res.ok) {
    throw new Error(`HTTP Error: ${res.status} -- Please try again later`)
  }
  return res.json()
}

const getBooks = (query: string, index: string): Promise<BookVolume> => {
  
  const spacedQuery:string = query.split(' ').join('+')

  return fetch(`https://www.googleapis.com/books/v1/volumes?q="${spacedQuery}"+subject:"fiction_science_fiction_general"&startIndex=${index === '0' ? 0 : parseInt(index)+10}&printType=books`)
    .then(res => handleError(res))
    .then(data => ({
      kind: data.kind,
      totalItems: data.totalItems,
      items: data.items ? cleanupBooks(data.items) : []
    }))
}

const cleanupBooks = (apiBooks: ApiBookInfo[]): BookInfo[] => {
  return apiBooks.map(book => {
    return ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      publisher: book.volumeInfo.publisher || "",
      publishedDate: book.volumeInfo.publishedDate || "",
      images: {
        smallThumbnail: book.volumeInfo.imageLinks?.smallThumbnail || "",
        thumbnail: book.volumeInfo.imageLinks?.thumbnail || ""
      },
      status: null
    })
  })
}

const getBookDetails = (id: string): Promise<ApiBookInfo> => {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => handleError(res))
  }

export { getBooks, getBookDetails }