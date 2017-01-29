import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-evaluation.hbs', 'Integration | Component | list evaluation.hbs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-evaluation.hbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-evaluation.hbs}}
      template block text
    {{/list-evaluation.hbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
