import Ember from 'ember';

export default Ember.ObjectController.extend({

  sortProperties: [ 'sortOrder' ],
  sortedItems: Ember.computed.sort('model.items', 'sortProperties'),

  actions: {
    updateSortOrder: function(indexes) {
      this.get('items').forEach(function(item) {
        var index = indexes[item.get('id')];
        item.set('sortOrder', index);
      });
    }
  }

});
