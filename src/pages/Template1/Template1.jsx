import React, { useCallback, useRef, useState } from "react";
import "./template1.css";
import Elip2 from "../../svg/icons/elip2";
import Elip3 from "../../svg/icons/Elip3";
import Elip4 from "../../svg/icons/Elip4";
import Elip0 from "../../svg/icons/Elip0";
import Group from "../../svg/icons/Group";
import {
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { Toolbox } from "../../component/elements/Toolbox";
import { Editor, Frame, Element } from "@craftjs/core";
import { Card, CardBottom, CardTop } from "../../component/elements/Card";
import { Container } from "../../component/elements/Container";
import { Text } from "../../component/elements/Text";
import { SettingsPanel } from "../../component/elements/SettingsPanel";
import IconSvg from "../../component/elements/IconSvg";
import { handleExport } from "../../ultils/handleExport";
const Template1 = () => {
  const componentRef = useRef(null);
  const [select, setSelect] = useState(false);
  return (
    <>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          CardTop,
          CardBottom,
          Container,
          Elip0,
          Elip2,
          Elip3,
          Elip4,
          Group,
          IconSvg,
        }}>
        <div className="flex">
          <div class="frame" ref={componentRef}>
            <div class="overlap-wrapper">
              <div class="overlap">
                <Frame>
                  <div class="overlap-group">
                    <div class="ellipse"></div>
                    <div class="group">
                      <div class="div">
                        <Elip0 />
                        <Elip2 />
                        <Elip3 />
                        <Elip4 />
                      </div>
                    </div>
                    <div class="iphone-pro-mockup">{/* <Elip0 /> */}</div>
                    <div class="main-wrapper">
                      <img src="../../shadow.png" alt="" srcset="" />
                    </div>
                    <div class="img-wrapper"></div>
                    <Element is="div" background="rgba(153, 153, 153, 0)">
                      <div class="group-2">
                        <div class="overlap-2">
                          <Text
                            size="small"
                            text="eCommerceGo"
                            className="ecommercego-saas"
                          />
                          <Text
                            size="small"
                            text="eCommerceGo"
                            className="span"
                          />
                          <Text
                            size="small"
                            text="Saas"
                            className="text-wrapper-2"
                          />
                        </div>
                        <Text
                          className="text-wrapper-3"
                          size="small"
                          text="Seller App"></Text>
                        <div class="ellipse-5"></div>
                        <div class="ellipse-6"></div>
                        <div class="ellipse-7"></div>
                        <div class="ellipse-8"></div>
                        <Text
                          size="small"
                          text="Text"
                          className="text-wrapper-4"
                        />
                        <Text
                          size="small"
                          text="Text"
                          className="text-wrapper-5"
                        />
                        <Text
                          size="small"
                          text="Text"
                          className="text-wrapper-6"
                        />
                        <Text
                          size="small"
                          text="Text"
                          className="text-wrapper-7"
                        />
                        <div class="overlap-group-wrapper">
                          <div class="overlap-group-2">
                            <div class="rectangle"></div>
                            <div class="text-wrapper-8">BUILT FOR FLUTTER</div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="group-wrapper">
                      <IconReact />
                    </div> */}
                      <IconSvg
                        classname="group-wrapper"
                        color="#46c7fb"
                        icon="IconReact"
                      />
                    </Element>
                  </div>
                </Frame>
              </div>
            </div>
          </div>
          <Paper>
            <Toolbox />
            <SettingsPanel />
          </Paper>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleExport(componentRef)}>
          export png
        </Button>
      </Editor>
    </>
  );
};

export default Template1;
