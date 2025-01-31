export interface SectionData {
  'Section Type': string;
  'Designation': string;
  'Mass per m (kg/m)'?: number;
  'Mass Per m (kg/m)'?: number;
  'Axial Compression Ns (kN)': number;
  'Axial Tension Nt (kN)': number;
  'Moment Ms (kNm)'?: number;
  'Moment Msx (kNm)'?: number;
  'Moment Msy (kNm)'?: number;
  'Shear Vv (kN)'?: number;
  'Shear Vvx (kN)'?: number;
  'Shear Vvy (kN)'?: number;
  'Torsion Mz (kNm)': number;
}

export interface SavedResult {
  sectionType: string;
  designation: string;
  mass: number;
  phiNs: number;
  phiNt: number;
  phiMxx: number;
  phiMxy: number;
  phiMs: number;
  phiVvx: number;
  phiVvy: number;
  phiVv: number;
  phiMz: number;
  timestamp: string;
}