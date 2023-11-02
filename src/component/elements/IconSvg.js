import { useNode } from "@craftjs/core";
import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@material-ui/core";
import { IconReact, IconFlutter, IconLogoCss3 } from "../../svg/icons/IconSVG";

const IconSvg = ({ classname, color, icon }) => {
  console.log(icon);
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
  const [iconSvg, setIconSvg] = useState([]);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return icon.map((iconElement) => (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      className={classname}
      style={{ color }}>
      {iconElement === "IconReact" ? (
        <IconReact />
      ) : iconElement === "IconFlutter" ? (
        <IconFlutter />
      ) : (
        <IconLogoCss3 />
      )}
    </div>
  ));
};

export default IconSvg;

const IconSetting = () => {
  const {
    actions: { setProp },
    Icon,
  } = useNode((node) => ({
    Icon: node.data.props.icon,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
    setProp((props) => (props.icon = selectedOptions));
  };

  return (
    <>
      <FormControl>
        <RadioGroup defaultValue={Icon || <IconReact />}>
          <FormControlLabel
            label="React"
            value="IconReact"
            control={
              <Checkbox
                checked={selectedOptions.includes("IconReact")}
                onChange={handleCheckboxChange}
                value="IconReact"
              />
            }
          />
          <FormControlLabel
            label="Flutter"
            value="IconFlutter"
            control={
              <Checkbox
                checked={selectedOptions.includes("IconFlutter")}
                onChange={handleCheckboxChange}
                value="IconFlutter"
              />
            }
          />
          <FormControlLabel
            label="CSS"
            value="IconLogoCss3"
            control={
              <Checkbox
                checked={selectedOptions.includes("IconLogoCss3")}
                onChange={handleCheckboxChange}
                value="IconLogoCss3"
              />
            }
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
