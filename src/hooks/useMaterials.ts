import { useGLTF } from '@react-three/drei';

const prefixPath = '/elite-config/glb/textures';
export const useMaterials = () => {
  const {
    materials: { 'RAL-Cream white': ralCreamWhite }
  } = useGLTF(`${prefixPath}/RAL Cream white.glb`);

  const {
    materials: { 'RAL-Midnight black': ralMidNightBlack }
  } = useGLTF(`${prefixPath}/RAL Midnight black.glb`);
  const {
    materials: { 'RAL-Pure white': ralPureWhite }
  } = useGLTF(`${prefixPath}/RAL Pure white.glb`);
  const {
    materials: { 'RAL-Ashen grey': ralAshenGray }
  } = useGLTF(`${prefixPath}/RAL Ashen grey.glb`);

  console.log({ ralCreamWhite, ralPureWhite, ralMidNightBlack, ralAshenGray });
  return { ralCreamWhite, ralPureWhite, ralMidNightBlack, ralAshenGray };
};
