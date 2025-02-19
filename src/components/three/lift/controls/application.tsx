import Image from 'next/image';
import { FC } from 'react';

import LiftControlTitle from './title';

interface ILiftControlApplicationProps extends IComponentProps {
  onClick: (value: string) => void;
  options: any[];
  selectedValue: string;
  title: string;
}

const LiftControlApplication: FC<ILiftControlApplicationProps> = (props) => {
  const { dataTestId, onClick, options, selectedValue, title } = props;
  return (
    <div data-testid={dataTestId}>
      <div className="flex flex-row text-center">
        <div className="w-full relative">
          <LiftControlTitle dataTestId="title" title={title} />
          <div className="grid grid-cols-2 justify-center mb-6 gap-2">
            {options?.map((option: any, index) => (
              <div
                className={`border-2 rounded-xl w-40 h-52 cursor-pointer  ${selectedValue === option.value ? 'border-blue ' : ''}`}
                key={index}
                onClick={() => onClick(option?.value)}
              >
                <div className="justify-center items-center">
                  <div className="m-2 rounded-lg h-36 w-36">
                    <Image
                      className="w-full h-full rounded-md"
                      src={option?.src}
                      alt="application"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <p className="nl-gmd-16 pt-2 px-2 text-dark-1 nl-gmd-16">{option?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiftControlApplication;
