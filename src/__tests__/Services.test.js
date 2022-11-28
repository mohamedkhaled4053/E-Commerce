const { render } = require("@testing-library/react");
const { Services } = require("../components");

test('should have three services', () => {
    render(<Services/>)
    let services = document.getElementsByClassName('service')
    expect(services.length).toBe(3)
});
