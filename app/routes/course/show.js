import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      id: 1,
      title: "Title",
      subtitle: "Subtitle",
      items: [
        Ember.Object.create({
          name: "Item 2",
          sortOrder: 2,
          id: 1
        }),
        Ember.Object.create({
          name: "Item 1",
          sortOrder: 1,
          id: 2
        }),
        Ember.Object.create({
          name: "Item 3",
          sortOrder: 3,
          id: 3
        })
      ]
    });
  }
});
