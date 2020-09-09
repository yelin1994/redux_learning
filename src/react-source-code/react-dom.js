(function(global) {
    const render = (element, container) => {
        // const Component = element.type;
        // const inst = (new Component());
        // const vdomTree = inst.render();
        updateContainer(container);
    }
    global.ReactDOM = {
        render
    }
})(window)