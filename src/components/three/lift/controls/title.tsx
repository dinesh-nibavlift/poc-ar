import { FC } from 'react';

interface ILiftControlTitleProps extends IComponentProps {
  title: string;
}

const LiftControlTitle: FC<ILiftControlTitleProps> = (props) => {
  const { dataTestId, title } = props;
  return (
    <div data-testid={dataTestId} className="flex justify-center items-center">
      <h6 className="nl-gmd-24 pb-5">{title}</h6>
    </div>
  );
};

export default LiftControlTitle;
