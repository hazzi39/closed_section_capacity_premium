import React from 'react';
import { sectionTypes, getDesignationsForType } from '../data';

interface SectionSelectorProps {
  selectedType: string;
  selectedDesignation: string;
  onTypeChange: (type: string) => void;
  onDesignationChange: (designation: string) => void;
}

export function SectionSelector({
  selectedType,
  selectedDesignation,
  onTypeChange,
  onDesignationChange,
}: SectionSelectorProps) {
  const designations = getDesignationsForType(selectedType);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="sectionType" className="block text-sm font-medium text-gray-700">
          Section Type
        </label>
        <select
          id="sectionType"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select a section type...</option>
          {sectionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
          Designation
        </label>
        <select
          id="designation"
          value={selectedDesignation}
          onChange={(e) => onDesignationChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          disabled={!selectedType}
        >
          <option value="">Select a designation...</option>
          {designations.map((designation) => (
            <option key={designation} value={designation}>
              {designation}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}