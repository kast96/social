import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    /*test('status from props should be in state', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="@kast96" />);
        const testInstance = testRenderer.getInstance();
        expect(testInstance.state.status).toBe('@kast96');
    });

    test('after creation <span> should be displayed', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="@kast96" />);
        const testRoot = testRenderer.root;
        const span = testRoot.findAllByType('span');
        expect(span.length).toBe(1);
    });

    test('after creation <span> should contains correct status', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="@kast96" />);
        const testRoot = testRenderer.root;
        const span = testRoot.findByType('span');
        expect(span.children[0]).toBe("@kast96");
    });

    test('input should be displayed in EditMode insted of span', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="@kast96" />);
        const testRoot = testRenderer.root;
        const span = testRoot.findByType('span');
        span.props.onDoubleClick();
        const input = testRoot.findByType('input');
        expect(input.props.value).toBe("@kast96");
    });*/
});