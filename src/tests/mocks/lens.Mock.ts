
import ILens from '../../interfaces/Lens';


const lensMock:ILens = {
  degree: 2,
  blueLightFilter: true,
  antiGlare: true
};

const lensMockWithId:ILens & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 2,
  blueLightFilter: true,
  antiGlare: true
};

export { lensMock, lensMockWithId };