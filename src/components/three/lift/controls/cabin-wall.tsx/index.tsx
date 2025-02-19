import { FC } from 'react';

import LiftControlTitle from '../title';

import CabinWallTabs from './tabs';

interface ICabinWallProps extends IComponentProps {
  selectedValue: string;
  options: any[];
  title: string;
  handleChangeTab: (tab: string) => void;
}

const CabinWall: FC<ICabinWallProps> = (props) => {
  const { dataTestId, selectedValue, options, title, handleChangeTab } = props;
  return (
    <div data-testid={dataTestId}>
      <LiftControlTitle dataTestId="" title={title} />
      <CabinWallTabs
        handleChangeTab={handleChangeTab}
        dataTestId="cabin-wall"
        tabs={options}
        selectedTab={selectedValue}
      />
    </div>
  );
};

export default CabinWall;
