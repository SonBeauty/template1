import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../component/elements/Toolbox";
import { SettingsPanel } from "../component/elements/SettingsPanel";
import { Topbar } from "../component/elements/Topbar";

import { Container } from "../component/elements/Container";
import { Button } from "../component/elements/Button";
import { Card, CardBottom, CardTop } from "../component/elements/Card";
import { Text } from "../component/elements/Text";
import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  return (
    <div className="container">
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container }}>
        <Topbar />
        <Grid
          container
          spacing={3}
          style={{ paddingTop: "10px" }}
          className="w-4/5">
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined" color="primary">
                  Click
                </Button>
                <Text size="small" text="Hi word" />
                <Element is={Container} padding={6} background="#999" canvas>
                  <Text size="small" text="It's me again" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Paper>
            <Toolbox />
            <SettingsPanel />
          </Paper>
        </Grid>
      </Editor>
    </div>
  );
}
