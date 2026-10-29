import os from 'os';
export const getOsPlatform = () => "Your os Platform is====>" +  os.platform()
export const getCpuArch = () => "Your Cpu Arch is ====>" + os.arch()