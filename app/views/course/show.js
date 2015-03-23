import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function() {
    var controller = this.get('controller');

    this.$(".item-list").sortable({
      update: function(event, ui) {
        var indexes = {};

        $(this).find('li').each(function(index) {
          indexes[$(this).data('id')] = index;
        });

        controller.send('updateSortOrder', indexes);
      }
    })
  }
});
