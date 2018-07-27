'use strict';

const Bookmark = (function () {

  function validateName(name) {
    if (!name) {
      throw new TypeError('Name does not exist');
    }
  }

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
    validateName,
    create
  };

} () );