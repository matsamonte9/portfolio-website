import { forwardRef } from "react";
import { Reveal } from "../../components/Reveal";
import { HomeBody } from "./HomeBody";

import './HomePage.css';

export const HomePage = forwardRef<HTMLElement, object>((_props, ref) => (
  <Reveal>
    <section ref={ref} className="home">
      <HomeBody />
    </section>
  </Reveal>
));
