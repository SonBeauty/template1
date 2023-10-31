import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import {
  FormControl,
  FormLabel,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
export const Text = ({
  text,
  fontSize,
  textAlign,
  color,
  fontWeight,
  className,
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged.size > 0,
  }));
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);
  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        disabled={!editable}
        tagName="span"
        style={{ fontSize: `${fontSize}px`, textAlign, color, fontWeight }}
        className={className}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    color,
    fontWeight,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    color: node.data.props.color,
    fontWeight: node.data.props.fontWeight,
  }));
  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          defaultValue={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel component="legend">Color</FormLabel>
        <ColorPicker
          defaultValue={color || "#000"}
          onChange={(color) => {
            setProp((props) => (props.color = color));
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel component="legend">Font weight</FormLabel>
        <RadioGroup
          defaultValue={fontSize}
          onChange={(_, e) => setProp((props) => (props.fontWeight = e))}>
          <FormControlLabel
            label="Regular"
            value="400"
            control={<Radio value="400" />}
          />
          <FormControlLabel
            label="Medium"
            value="500"
            control={<Radio value="500" />}
          />
          <FormControlLabel
            label="Bold"
            value="700"
            control={<Radio value="700" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    text: "Hi",
    fontSize: 20,
  },
};
