import { test } from 'qunit';
import moduleForAcceptance from 'ottooctopus/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | workspaces');

test('visiting /workspaces', function(assert) {
    visit('/workspaces');

    andThen(function() {
        assert.equal(currentURL(), '/workspaces');
    });
});

test('navbar visible', function() {
    visit('/workspaces');

    andThen(function() {
        findWithAssert('.nav');
    });
});

test('new workspace name input possible', function() {
    visit('/workspaces');

    andThen(function() {
        findWithAssert('#newWorkspaceInput');
        fillIn('#newWorkspaceInput', 'workspace-acceptance-test');
        // Wait for asynchronous helpers above to complete
        andThen(function() {
            findWithAssert(':contains("workspace-acceptance-test")');
        });
        findWithAssert('#newWorkspaceInput');
    });
});
