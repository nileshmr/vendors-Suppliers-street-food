import React from 'react';

const materialTypes = [
  'Vegetables',
  'Spices',
  'Dairy',
  'Grains',
  'Oils',
  'Other'
];

export default function MaterialTypeDropdown({ value, onChange, ...props }) {
  return (
    <select value={value} onChange={onChange} {...props} className="border rounded px-3 py-2">
      <option value="">Select Type</option>
      {materialTypes.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
}
