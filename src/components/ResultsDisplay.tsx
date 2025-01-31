import React from 'react';
import { SavedResult } from '../types';

interface ResultsDisplayProps {
  phiMxx?: number;
  phiMxy?: number;
  phiVv?: number;
  phiVvy?: number;
  phiMs?: number;
  phiNs?: number;
  phiNt?: number;
  phiMz?: number;
  mass?: number;
  sectionType: string;
  savedResults: SavedResult[];
  onSaveResult: () => void;
}

export function ResultsDisplay({
  phiMxx,
  phiMxy,
  phiVv,
  phiVvy,
  phiMs,
  phiNs,
  phiNt,
  phiMz,
  mass,
  sectionType,
  savedResults,
  onSaveResult,
}: ResultsDisplayProps) {
  const isRHS = sectionType.includes('Rectangular');
  const formatNumber = (num?: number) => num?.toPrecision(3) ?? '-';

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Section Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-600" title="Mass per meter">Mass (kg/m)</div>
            <div className="text-2xl font-bold">{formatNumber(mass)}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-600" title="Design compression capacity">ΦNs (kN)</div>
            <div className="text-2xl font-bold">{formatNumber(phiNs)}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-600" title="Design tension capacity">ΦNt (kN)</div>
            <div className="text-2xl font-bold">{formatNumber(phiNt)}</div>
          </div>
          {isRHS ? (
            <>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design moment capacity about the x-x axis">ΦMxx (kNm)</div>
                <div className="text-2xl font-bold">{formatNumber(phiMxx)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design moment capacity about the y-y axis">ΦMxy (kNm)</div>
                <div className="text-2xl font-bold">{formatNumber(phiMxy)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design shear capacity in x direction">ΦVvx (kN)</div>
                <div className="text-2xl font-bold">{formatNumber(phiVv)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design shear capacity in y direction">ΦVvy (kN)</div>
                <div className="text-2xl font-bold">{formatNumber(phiVvy)}</div>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design moment capacity">ΦMs (kNm)</div>
                <div className="text-2xl font-bold">{formatNumber(phiMs)}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="text-sm text-gray-600" title="Design shear capacity">ΦVv (kN)</div>
                <div className="text-2xl font-bold">{formatNumber(phiVv)}</div>
              </div>
            </>
          )}
          <div className="p-4 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-600" title="Design torsion capacity">ΦMz (kNm)</div>
            <div className="text-2xl font-bold">{formatNumber(phiMz)}</div>
          </div>
        </div>
        <button
          onClick={onSaveResult}
          disabled={!phiVv || (!isRHS && !phiMs) || (isRHS && (!phiMxx || !phiMxy))}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save Result
        </button>
      </div>

      {savedResults.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Saved Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section Type
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Designation
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mass (kg/m)
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ΦNs (kN)
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ΦNt (kN)
                  </th>
                  {isRHS ? (
                    <>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦMxx (kNm)
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦMxy (kNm)
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦVvx (kN)
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦVvy (kN)
                      </th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦMs (kNm)
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ΦVv (kN)
                      </th>
                    </>
                  )}
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ΦMz (kNm)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {savedResults.map((result, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.sectionType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatNumber(result.mass)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatNumber(result.phiNs)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatNumber(result.phiNt)}
                    </td>
                    {isRHS ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiMxx)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiMxy)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiVvx)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiVvy)}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiMs)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatNumber(result.phiVv)}
                        </td>
                      </>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatNumber(result.phiMz)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}