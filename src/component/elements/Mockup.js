import React from "react";
import { useNode } from "@craftjs/core";
import { Button, styled, SvgIcon } from "@material-ui/core";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Mockup = ({ className, image }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state._hydrationTimestamp.dragged > 0,
  }));

  return (
    <div ref={(ref) => connect(drag(ref))} className={className}>
      {image && (
        <div className="img2">
          <img src={URL.createObjectURL(image)} alt=""></img>
        </div>
      )}
      <img src={process.env.PUBLIC_URL + "/iphone15.png"} alt="img" />
    </div>
  );
};

export default Mockup;

const MockupSetting = () => {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    image: node.data.props.image,
  }));
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProp((props) => (props.image = file));
  };
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }>
      Upload a file
      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    </Button>
  );
};

Mockup.craft = {
  related: {
    settings: MockupSetting,
  },
};
