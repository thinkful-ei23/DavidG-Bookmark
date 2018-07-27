/* global $*/
'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/davidg';

  const getBookmarks = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const creatBookmark = function(bookmark, callback){
    let newBookmark = JSON.stringify(bookmark);
    $.ajax({
      url : `${BASE_URL}/bookmarks`,
      method : 'POST',
      contentType : 'application/json',
      data : bookmark,
      success : callback
    });
  };

  function deleteBookmark(id, callback){
    $.ajax({
      url : `${BASE_URL}/bookmarks/${id}`,
      method : 'DELETE',
      contentType : 'application/json',
      data : 'json',
      success : callback
    });
  }


  return {
    getBookmarks,
    creatBookmark,
    deleteBookmark
  };



});