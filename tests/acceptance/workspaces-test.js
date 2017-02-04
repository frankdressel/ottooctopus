import { test } from 'qunit';
import moduleForAcceptance from 'ottooctopus/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | workspaces');

test('visiting /workspaces', function(assert) {
    visit('/workspaces');

    andThen(function() {
        assert.equal(currentURL(), '/workspaces');
    });
});

test('navbar visible', function(assert) {
    visit('/workspaces');

    andThen(function() {
        var elem=find('.nav');
        assert.ok(elem.length!==0);
    });
});

test('new workspace name input possible', function(assert) {
    visit('/workspaces');

    andThen(function() {
        // There should be no element containing the test name.
        let elem2=find(":contains(workspace-acceptance-test)");
        assert.ok(elem2.length===0);

        // Find the workspace name input and enter the test name.
        let elem1 = find('#newWorkspaceInput');
        assert.ok(elem1.length!==0);
        fillIn('#newWorkspaceInput', 'workspace-acceptance-test');
        keyEvent('#newWorkspaceInput', 'keyup', 13);

        // There should be an element with the test name now.
        andThen(function() {
            let elem2=find(":contains(workspace-acceptance-test)");
            assert.ok(elem2.length!==0);
        });
    });
});
