export const getConfigMaterial = (selectedMaterial?: string, textures?: any, materials?: any) => {
  let newMaterial: any = {};
  if (textures) {
    Object.values(textures).forEach((value: any) => {
      if (value?.name === selectedMaterial) {
        newMaterial = value;
      }
    });
  }

  if (newMaterial === null) {
    Object.values(materials).forEach((value: any) => {
      if (value?.name === selectedMaterial) {
        newMaterial = value;
      }
    });
  }

  return newMaterial;
};
