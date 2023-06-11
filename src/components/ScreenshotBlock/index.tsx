import React from "react"

function ScreenshotBlock({ children, src }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, borderRadius: 6, background: '#282A3633' }}>
        {children}
      </div>
      <div style={{ marginLeft: 14 }}>
        <img src={src} width="160" />
      </div>
    </div>
  );
}

export default ScreenshotBlock