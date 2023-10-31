import { useNode } from "@craftjs/core";
import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { IconReact, IconFlutter, IconLogoCss3 } from "../../svg/icons/IconSVG";

const IconSvg = ({ classname, color, icon }) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state._hydrationTimestamp.dragged > 0,
  }));

  const [editable, setEditable] = useState(false);
  const [iconSvg, setIconSvg] = useState(<IconReact />);
  console.log(icon);
  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);
  useEffect(() => {
    icon === "IconReact"
      ? setIconSvg(<IconReact />)
      : icon === "IconFlutter"
      ? setIconSvg(<IconFlutter />)
      : setIconSvg(<IconLogoCss3 />);
  }, [icon]);
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      className={classname}
      style={{ color }}>
      {iconSvg}
    </div>
  );
};

export default IconSvg;

const IconSetting = () => {
  const {
    actions: { setProp },
    Icon,
  } = useNode((node) => ({
    Icon: node.data.props.icon,
  }));

  console.log(Icon);
  return (
    <>
      <FormControl>
        <RadioGroup
          defaultValue={Icon || <IconReact />}
          onChange={(_, e) => setProp((props) => (props.icon = e))}>
          <FormControlLabel
            label="React"
            value="IconReact"
            control={<Radio value="IconReact" />}
          />
          <FormControlLabel
            label="Flutter"
            value="IconFlutter"
            control={<Radio value="IconFlutter" />}
          />
          <FormControlLabel
            label="CSS"
            value="IconLogoCss3"
            control={<Radio value="IconLogoCss3" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

IconSvg.craft = {
  related: {
    settings: IconSetting,
  },
};
