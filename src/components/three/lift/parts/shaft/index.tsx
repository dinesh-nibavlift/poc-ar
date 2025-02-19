import { FC } from 'react';

interface ILiftShaftProps extends IComponentProps {}

const LiftShaft: FC<ILiftShaftProps> = (props) => {
  const { dataTestId } = props;
  return <div data-testid={dataTestId}></div>;
};

export default LiftShaft;
