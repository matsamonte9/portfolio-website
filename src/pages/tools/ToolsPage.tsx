import { forwardRef } from "react";

import { Reveal } from "../../components/Reveal";
import { SectionTitle } from "../../components/SectionTitle";
import { CoreToolLogo } from "./CoreToolLogo";
import { ExtraToolLogo } from "./ExtraToolLogo";

import './ToolsPage.css';

export const ToolsPage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="tools">
      <SectionTitle title={'Tech Stack'} />
      <CoreToolLogo />
      <ExtraToolLogo />
    </section>
  </Reveal>
));
