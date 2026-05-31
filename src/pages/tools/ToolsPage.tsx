import { forwardRef } from "react";

import { Reveal } from "../../components/Reveal";
import { SectionTitle } from "../../components/SectionTitle";
import { ToolsGrid } from "./ToolsGrid";

import "./ToolsPage.css";

export const ToolsPage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="tools">
      <SectionTitle title="Tools" />
      <ToolsGrid />
    </section>
  </Reveal>
));
