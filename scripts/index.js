'use strict';
/* global bookmarkView, $, api, store */


$(document).ready(function(){
  bookmarkView.js.bindEventListeners();
  api.getBookmarks(bookmarks => {
    bookmarks.forEach(bookmark => store.addBookmark(bookmark));
    bookmarkView.render();
  });

});