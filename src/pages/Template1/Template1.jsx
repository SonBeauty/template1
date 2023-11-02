import React, { useRef } from "react";
import "./template1.css";
import Elip2 from "../../svg/icons/elip2";
import Elip3 from "../../svg/icons/Elip3";
import Elip4 from "../../svg/icons/Elip4";
import Elip0 from "../../svg/icons/Elip0";
import Group from "../../svg/icons/Group";
import { Button, Paper } from "@material-ui/core";
import { Toolbox } from "../../component/elements/Toolbox";
import { Editor, Frame, Element } from "@craftjs/core";
import { Card, CardBottom, CardTop } from "../../component/elements/Card";
import { Container } from "../../component/elements/Container";
import { Text } from "../../component/elements/Text";
import { SettingsPanel } from "../../component/elements/SettingsPanel";
import IconSvg from "../../component/elements/IconSvg";
import { handleExport } from "../../ultils/handleExport";
import Mockup from "../../component/elements/Mockup";

const Template1 = () => {
  const componentRef = useRef(null);
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
          Mockup,
        }}>
        <div className="flex gap-4">
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
                    <Mockup className="iphone-pro-mockup" />
                    <Mockup className="main-wrapper" />
                    <Mockup className="img-wrapper" />
                    <Element
                      is={Container}
                      background="rgba(153, 153, 153, 0)"
                      canvas>
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
                            <div class="rectangle"></div>{" "}
                            <Text
                              size="small"
                              text="BUILT FOR FLUTTER"
                              className="text-wrapper-8"
                            />
                          </div>
                        </div>
                      </div>
                      <Element is={Container} canvas>
                        <IconSvg
                          classname="group-wrapper"
                          color="#46c7fb"
                          icon={["IconReact"]}
                        />
                      </Element>
                    </Element>
                  </div>
                </Frame>
              </div>
            </div>
          </div>
          <div className="w-[400px]">
            <div className="center">
              <Paper>
                <Toolbox />
                <SettingsPanel />
              </Paper>
            </div>
          </div>
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
