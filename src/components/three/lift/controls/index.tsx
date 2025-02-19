import { FC, useMemo } from 'react';

import LiftControlApplication from './application';
import LandingDoorOptions from './landing-door-color';
import CabinWall from './cabin-wall.tsx';

import { useEliteConfigContext } from '@/context/elite-config.context';
import {
  applicationOptions,
  cabinWallOptions,
  cameraAngleOptions,
  ceilingOptions,
  landingDoorOptions
} from '@/utils/constant/configurator';

interface ILiftControlsProps {}

const LiftControls: FC<ILiftControlsProps> = (props) => {
  const { config, setConfig } = useEliteConfigContext();

  const SideGCabinWallValue = useMemo(() => {
    const cabinSides = config.cabinSides || [];
    const sideGValues = cabinSides.find((cabinWall) => cabinWall.side === 'side-g');
    return sideGValues?.cabinWall || '';
  }, [config.cabinSides]);

  const handleChangeCabin = (cabinWall: string) => {
    const findIndex = config.cabinSides?.findIndex((cabinSide) => cabinSide.side === 'side-g');

    if (findIndex === -1) {
      const newCabinSides = [...config.cabinSides, { side: 'side-g', cabinWall }];
      setConfig({ cabinSides: newCabinSides });
    } else {
      const newCabinSides = [...config.cabinSides];
      newCabinSides[findIndex].cabinWall = cabinWall;
      setConfig({ cabinSides: newCabinSides });
    }
  };

  const handleCameraAngles = (cameraAngles: string) => {
    setConfig({ cameraAngles });
  };

  return (
    <div className="space-y-5">
      <LiftControlApplication
        dataTestId="controls"
        onClick={(value) => {
          setConfig({ application: value });
        }}
        options={applicationOptions}
        selectedValue={config.application}
        title="Application"
      />
      <LandingDoorOptions
        title="Shaft Color"
        options={landingDoorOptions}
        dataTestId="LandingDoorOptions"
        handleChangeTab={(tab) => setConfig({ shaft: tab })}
        selectedValue={config.shaft}
      />
      <LandingDoorOptions
        title="Landing Door Color"
        options={landingDoorOptions}
        dataTestId="LandingDoorOptions"
        handleChangeTab={(tab) => setConfig({ landingDoorColor: tab })}
        selectedValue={config.landingDoorColor}
      />
      <LandingDoorOptions
        title="Cabin Accent"
        options={landingDoorOptions}
        dataTestId="LandingDoorOptions"
        handleChangeTab={(tab) => setConfig({ cabinAccent: tab })}
        selectedValue={config.cabinAccent}
      />
      <LandingDoorOptions
        title="Ceiling"
        options={ceilingOptions}
        dataTestId="Ceiling"
        handleChangeTab={(tab) => setConfig({ ceiling: tab })}
        selectedValue={config.ceiling}
      />
      <CabinWall
        title="Cabin - Side G"
        options={cabinWallOptions}
        dataTestId="side-g"
        handleChangeTab={handleChangeCabin}
        selectedValue={SideGCabinWallValue}
      />

      <CabinWall
        title="Camera Angle"
        options={cameraAngleOptions}
        dataTestId="side-g"
        handleChangeTab={handleCameraAngles}
        selectedValue={config.cameraAngles}
      />
    </div>
  );
};

export default LiftControls;
