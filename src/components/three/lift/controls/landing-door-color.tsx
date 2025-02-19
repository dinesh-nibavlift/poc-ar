import { FC } from 'react';

import ColorTabs from './color-tabs';
import LiftControlTitle from './title';

interface ILandingDoorOptionsProps extends IComponentProps {
  options: any[];
  title: string;
  handleChangeTab: (tab: string) => void;
  selectedValue: string;
}

const LandingDoorOptions: FC<ILandingDoorOptionsProps> = (props) => {
  const { dataTestId, title, options, handleChangeTab, selectedValue } = props;
  return (
    <div data-testid={dataTestId}>
      <LiftControlTitle dataTestId="title" title={title} />
      <div>
        <ColorTabs
          tabs={options}
          dataTestId="color-tabs"
          handleChangeTab={handleChangeTab}
          selectedTab={selectedValue}
        />
      </div>
    </div>
  );
};

export default LandingDoorOptions;
