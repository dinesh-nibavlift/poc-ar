import React, { useMemo } from 'react';

import LiftVerticalShaft from './parts/shaft/vertical';
import LiftHorizontalShaft from './parts/shaft/horizontal';
import LiftTopShaft from './parts/shaft/top';
import LiftMachineModal from './parts/machine';
import LiftCabinModal from './parts/cabin';
import LiftTopDoorModal from './parts/door/top';
import LiftBottomDoorModal from './parts/door/bottom';
import LiftDoorShaftModal from './parts/common-mesh.model';
import LiftBottomShaftModal from './parts/shaft/bottom';

import { useEliteConfigContext } from '@/context/elite-config.context';
import { CAMERA_ANGLES } from '@/utils/constant/configurator';

const Lift = (props: any) => {
  const { config } = useEliteConfigContext();

  const position = useMemo(() => {
    if (config.cameraAngles === CAMERA_ANGLES.OUTER) {
      return [0, -3.3, 0];
    } else {
      return [0, -1, 0];
    }
  }, [config.cameraAngles]);

  return (
    <>
      <group {...props} dispose={null} position={position} scale={[1.5, 1.1, 1.5]}>
        <LiftBottomDoorModal />
        <LiftTopDoorModal />
        <LiftDoorShaftModal />
        <LiftCabinModal />
        <LiftMachineModal />
        <group position={[0.077, 6.397, 0.08]} rotation={[Math.PI, 0, Math.PI]} scale={0.985}>
          <LiftBottomShaftModal />
          <LiftTopShaft />
          <LiftHorizontalShaft />
        </group>
        <LiftVerticalShaft />
      </group>
    </>
  );
};

export default Lift;
