// eslint-disable-next-line import/prefer-default-export
export const bookTransformer = book => ({
  id: book.id,
  title: book.volumeInfo.title,
  authors: book.volumeInfo.authors || [],
  thumbnail:
    (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) ||
    'https://books.google.nl/googlebooks/images/no_cover_thumb.gif',
  publisher: book.volumeInfo.publisher || 'Unknown publisher',
  publishedDate:
    book.volumeInfo.publishedDate &&
    book.volumeInfo.publishedDate.substring(0, 4),
  pageCount: book.volumeInfo.pageCount,
  link: book.volumeInfo.canonicalVolumeLink,
});
