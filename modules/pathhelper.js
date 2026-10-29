import path from 'path';
export const getDirname=(file) =>    path.dirname(file);
export const getExtName = (file) => path.extname(file)
export const getBaseName = (file) => path.basename(file)