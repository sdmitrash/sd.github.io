App.List = DS.Model.extend({
 listName: DS.attr('string'),
  cards: DS.hasMany('card', {
    async: true
  })
});

App.List.FIXTURES = [
  {
    id: "1",
    listName: "John Paley",
    comment: "It really works. Thank you for the service! And even with languages using the Latin alphabet, there may be minor problems.",
  },
  {
    id: "2",
    listName: "John Paley",
    comment: "It really works. Thank you for the service! And even with languages using the Latin alphabet, there may be minor problems.",
  },
  {
    id: "3",
    listName: "John Paley",
    comment: "It really works. Thank you for the service! And even with languages using the Latin alphabet, there may be minor problems.",
  }
];
