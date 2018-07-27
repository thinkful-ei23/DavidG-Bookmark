
'use strict';

const store = (function () {
    
  const findById = function(id) {
    return store.bookmarks.find(bookmark => bookmark.id === id);
  };

  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  const findAndDelete = function(id) {
    let foundBookmark = this.findById(id);
    this.bookmarks = store.bookmarks.filter(bookmark => bookmark !== foundBookmark);
  };

  return {bookmarks:[], findById, addBookmark, findAndDelete};
}() );