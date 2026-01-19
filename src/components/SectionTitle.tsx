import { Reveal } from './Reveal';
import './SectionTitle.css';

type SectionTitleProps = {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Reveal>
      <h1 className="section-title">
        {title}
      </h1>
    </Reveal>
  );
}