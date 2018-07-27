/* global store $ api */
'use strict';

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function(){
  $.fn.extend({
    serializeJson: function() {
      const formData = new FormData(this[0]);
      const o = {};
      formData.forEach((val, title) => o[title] = val);
      return JSON.stringify(o);
    }
  });

  function generateBookmarkElement(bookmark) {
    let bookmarkTitle = `<span class="bookmark bookmark__checked">${bookmark.tite}</span>`;
    if (!bookmark.checked) {
      bookmarkTitle = `
        <form class="js-edit-item">
          <input class="shopping-item type="text" value="${bookmark.title}" />
        </form>
      `;
    }
  
    return `
      <li class="js-item-element" data-item-id="${bookmark.id}">
        ${bookmarkTitle}
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
  }
  
  
  function generateBookmarkString(shoppingList) {
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  }
  
  
  function render() {
    // Filter item list if store prop is true by item.checked === false
    let bookmarks = store.items;
    // if (store.hideCheckedItems) {
    //   items = store.items.filter(item => !item.checked);
    // }
  
    // render the shopping list in the DOM
    console.log('`render` ran');
    const bookmarksString = generateBookmarkString(bookmarks);
  
    // insert that HTML into the DOM
    $('.js-shopping-list').html(bookmarksString);
  }
  
  
  function handleNewBookmarkSubmit() {
    $('#js-shopping-list-form').submit(function (event) {
      event.preventDefault();
      const newBookmarkTitle = $('.js-shopping-list-entry').val();
      $('.js-shopping-list-entry').val('');
      store.addItem(newBookmarkTitle);
      render();
    });
  }
  
  function getBookmarkIdFromElement(bookmark) {
    return $(bookmark)
      .closest('.js-item-element')
      .data('item-id');
  }
  
  function handleDeleteBookmarkClicked() {
    // like in `handleItemCheckClicked`, we use event delegation
    $('.js-shopping-list').on('click', '.js-item-delete', event => {
      // get the index of the item in store.items
      const id = getBookmarkIdFromElement(event.currentTarget);
      // delete the item
      store.findAndDelete(id);
      // render the updated shopping list
      render();
    });
  }
  
  function bindEventListeners() {
    handleNewBookmarkSubmit();
    handleDeleteBookmarkClicked();
  }

  // This object contains the only exposed methods from this module:
  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };
}());