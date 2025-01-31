import React, { useState } from 'react';
import { SectionSelector } from './components/SectionSelector';
import { ResultsDisplay } from './components/ResultsDisplay';
import { getSectionData } from './data';
import { SavedResult } from './types';
import { Table } from 'lucide-react';

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [savedResults, setSavedResults] = useState<SavedResult[]>([]);

  const sectionData = selectedType && selectedDesignation 
    ? getSectionData(selectedType, selectedDesignation)
    : null;

  const handleSaveResult = () => {
    if (sectionData) {
      const isRHS = selectedType.includes('Rectangular');
      const newResult: SavedResult = {
        sectionType: selectedType,
        designation: selectedDesignation,
        mass: sectionData["Mass per m (kg/m)"] || sectionData["Mass Per m (kg/m)"] || 0,
        phiNs: sectionData["Axial Compression Ns (kN)"] || 0,
        phiNt: sectionData["Axial Tension Nt (kN)"] || 0,
        phiMxx: isRHS ? sectionData["Moment Msx (kNm)"] || 0 : 0,
        phiMxy: isRHS ? sectionData["Moment Msy (kNm)"] || 0 : 0,
        phiMs: !isRHS ? sectionData["Moment Ms (kNm)"] || 0 : 0,
        phiVvx: isRHS ? sectionData["Shear Vvx (kN)"] || 0 : 0,
        phiVvy: isRHS ? sectionData["Shear Vvy (kN)"] || 0 : 0,
        phiVv: !isRHS ? sectionData["Shear Vv (kN)"] || 0 : 0,
        phiMz: sectionData["Torsion Mz (kNm)"] || 0,
        timestamp: new Date().toLocaleString(),
      };
      setSavedResults([...savedResults, newResult]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Table className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Steel Closed Section Capacities</h1>
          <p className="mt-2 text-gray-600">
            Select a section type and designation to view properties
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <SectionSelector
            selectedType={selectedType}
            selectedDesignation={selectedDesignation}
            onTypeChange={setSelectedType}
            onDesignationChange={setSelectedDesignation}
          />
        </div>

        <ResultsDisplay
          mass={sectionData?.["Mass per m (kg/m)"] || sectionData?.["Mass Per m (kg/m)"]}
          phiNs={sectionData?.["Axial Compression Ns (kN)"]}
          phiNt={sectionData?.["Axial Tension Nt (kN)"]}
          phiMxx={sectionData?.["Moment Msx (kNm)"]}
          phiMxy={sectionData?.["Moment Msy (kNm)"]}
          phiMs={sectionData?.["Moment Ms (kNm)"]}
          phiVv={
            selectedType.includes('Rectangular')
              ? sectionData?.["Shear Vvx (kN)"]
              : sectionData?.["Shear Vv (kN)"]
          }
          phiVvy={sectionData?.["Shear Vvy (kN)"]}
          phiMz={sectionData?.["Torsion Mz (kNm)"]}
          sectionType={selectedType}
          savedResults={savedResults}
          onSaveResult={handleSaveResult}
        />
      </div>
    </div>
  );
}

export default App;