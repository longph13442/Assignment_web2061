const reRender = async (component, domElement) => {
    document.querySelector(domElement).innerHTML = await component.render();
    if (component.afterrender) component.afterrender();
};
export default reRender;
