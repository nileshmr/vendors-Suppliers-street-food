import React from 'react';

export default function LoaderButton({ loading, children, ...props }) {
  return (
    <button {...props} disabled={loading || props.disabled} className={props.className + ' relative'}>
      {loading && (
        <span className="absolute left-2 top-1/2 -translate-y-1/2">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        </span>
      )}
      <span className={loading ? 'opacity-60' : ''}>{children}</span>
    </button>
  );
}
