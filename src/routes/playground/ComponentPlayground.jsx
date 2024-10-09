import { render } from 'solid-js/web';
import { Dynamic } from 'solid-js/web';

const ComponentPlayground = (props) => {
  return (
    <div>
      <h1>{props.componentName}</h1>
      <Dynamic component={props.component} {...props.props} />
    </div>
  );
};

export function renderComponent(component, props = {}, elementId = 'root') {
  const ComponentToRender = () => (
    <ComponentPlayground 
      component={component}
      componentName={component.name}
      props={props}
    />
  );
  
  render(() => <ComponentToRender />, document.getElementById(elementId));
}