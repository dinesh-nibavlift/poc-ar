'use client';
import { ReactElement, createContext, useContext } from 'react';

import useSetState from '@/hooks/useSetState';
import { CAMERA_ANGLES } from '@/utils/constant/configurator';

interface IInitialContextValues {
  config: IConfigState;
  setConfig: (config: Partial<IConfigState>) => void;
  nodes: any;
  materials: any;
  textures: any;
}

interface ICabinSides {
  side: string;
  doorFinish?: string;
  cabinWall?: string;
}

interface IConfigState {
  application: string;
  landingDoorColor: string;
  cabinAccent: string;
  cabinDoorFinish: string;
  floorColor: string;
  ceiling: string;
  hasShaft: boolean;
  cabinSides: ICabinSides[];
  shaft: string;
  cameraAngles: string;
}

const initialConfigValues = {
  application: '',
  landingDoorColor: 'RAL-Cream white',
  cabinAccent: 'RAL-Cream white',
  cabinDoorFinish: 'RAL-Cream white',
  floorColor: '',
  ceiling: '',
  hasShaft: false,
  cabinSides: [
    {
      side: 'side-g',
      cabinWall: 'Mirror'
    }
  ],
  shaft: 'RAL-Cream white',
  cameraAngles: CAMERA_ANGLES.OUTER
};

const initialContextValues: IInitialContextValues = {
  config: initialConfigValues,
  setConfig: (config: Partial<IConfigState>) => {},
  nodes: {},
  materials: {},
  textures: {}
};

export const EliteConfigContext = createContext(initialContextValues);

interface IEliteConfigProvider extends ICommonLiftModalProps {
  children: ReactElement;
}
const EliteConfigProvider = ({ children, nodes, textures, materials }: IEliteConfigProvider) => {
  const [config, setConfig] = useSetState<IConfigState>(initialConfigValues);

  return (
    <EliteConfigContext.Provider
      value={{
        config,
        setConfig,
        nodes: nodes,
        materials: materials,
        textures: textures
      }}
    >
      {children}
    </EliteConfigContext.Provider>
  );
};

export const useEliteConfigContext = (): IInitialContextValues => {
  try {
    const data = useContext(EliteConfigContext);
    return data;
  } catch (error) {
    console.log(error);
    return initialContextValues;
  }
};

export default EliteConfigProvider;
