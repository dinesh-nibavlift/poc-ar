import { FC } from 'react';

interface ICabinWallTabsProps extends IComponentProps {
  gridCols?: number;
  tabs: any[];
  selectedTab: string;
  handleChangeTab: (tab: string) => void;
}

const CabinWallTabs: FC<ICabinWallTabsProps> = (props) => {
  const { dataTestId, gridCols = 2, tabs, selectedTab, handleChangeTab } = props;
  return (
    <div data-testid={dataTestId}>
      <div className={`grid grid-cols-${gridCols} gap-5 `}>
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`border-2 rounded-xl cursor-pointer  p-2 flex justify-center items-center ${selectedTab === tab.value ? 'border-blue' : ''}`}
            onClick={() => handleChangeTab(tab.value)}
          >
            <div>{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabinWallTabs;
