import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    workspace: DS.attr('string')
});
