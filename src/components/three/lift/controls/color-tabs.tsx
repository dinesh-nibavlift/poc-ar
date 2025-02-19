import Image from 'next/image';
import { FC } from 'react';

interface IColorTabsProps extends IComponentProps {
  tabs: any[];
  handleChangeTab: (tab: string) => void;
  selectedTab: string;
}

const ColorTabs: FC<IColorTabsProps> = (props) => {
  const { dataTestId, tabs, handleChangeTab, selectedTab } = props;

  return (
    <div data-testid={dataTestId} className="border-2 rounded-xl border-gray-100 p-5">
      <div className={`grid grid-cols-4 gap-2`}>
        {tabs?.map((option, index) => (
          <div
            key={index}
            onClick={() => handleChangeTab(option?.value)}
            className={`border-2 rounded-xl cursor-pointer w-12 h-12 p-1 ${selectedTab === option.value ? 'border-blue' : ''}`}
          >
            <Image width={1000} height={1000} src={option.src} alt="color-tab" className="w-full h-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorTabs;
