import { CSSProperties } from 'react';
import './section.scss';
type SectionProps = {
  children: string | JSX.Element | JSX.Element[];
  extraClass?: string;
  style?: CSSProperties;
};
const Section = ({ children, extraClass, style }: SectionProps) => {
  return (
    <div style={style} className={`section-container ${extraClass ?? ''}`}>
      {children}
    </div>
  );
};

export default Section;
