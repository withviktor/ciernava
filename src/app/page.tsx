"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-slate-200 tracking-tighter text-white">
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-2.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed left-0 top-0 flex w-full flex-col items-end gap-2 p-4">
        <div className="flex flex-wrap justify-end gap-2">
          <a href="https://github.com/withviktor" target="_blank">
            Github
          </a>
          <a href="https://youtube.com/@withviktor" target="_blank">
            Youtube
          </a>
          <a href="https://www.instagram.com/withviktor_" target="_blank">
            IG
          </a>
          <a href="https://linkedin.com/in/withviktor" target="_blank">
            Linkedin
          </a>
          <a href="https://www.x.com/vciernava" target="_blank">
            X
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex w-full items-end justify-between p-4">
        <h1>Viktor Čierňava</h1>

        <div className="flex flex-col items-end gap-2">
          <a href="mailto:business@withviktor.com">business@withviktor.com</a>
          <div className="flex gap-2">
            <h2>Junior Software Engineer</h2>
            <h2>·</h2>
            <h2>Ostrava, CZ</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
