var ButtonToolbar = AMUIReact.ButtonToolbar;
var Button = AMUIReact.Button;
var buttonsInstance = (
  <ButtonToolbar>
    <Button amStyle="primary">Primary</Button>
    <Button amStyle="secondary">Secondary</Button>
    <Button amStyle="success">Success</Button>
    <Button amStyle="warning">Warning</Button>
    <Button amStyle="danger">Danger</Button>
  </ButtonToolbar>
);
 
 ReactDOM.render(
//  <h1>Hello, world!</h1>,
	buttonsInstance,
    document.getElementById('cv')
);