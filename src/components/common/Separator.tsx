import './separator.scss';

type SeparatorProps = {
  children: string;
};
const Separator = ({ children }: SeparatorProps) => {
  return <div className="separator">{children}</div>;
};

export default Separator;
