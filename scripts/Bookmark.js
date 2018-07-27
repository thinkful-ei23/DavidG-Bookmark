'use strict';

const Bookmark = (function () {

//   function validateTitle(title) {
//     if (!title) {
//       throw new TypeError('Title does not exist');
//     }
//   }

  function create(title, url, detail, rating) {
    return {
      id : cuid(),
      title,
      url,
      detail,
      rating,
      expanded: false
    };
  }

  return {
    // validateTitle,
    create
  };

} () );