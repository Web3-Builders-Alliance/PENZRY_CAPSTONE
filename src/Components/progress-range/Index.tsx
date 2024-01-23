import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 10;
const MIN = 0;
const MAX = 100;

const Marks: React.FC<{ rtl: boolean; sendValue:any }> = ({
  rtl,
  sendValue,
}) => {
  const [values, setValues] = React.useState([50]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {setValues(values); sendValue(values);}}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "10px",
              borderRadius: "10000px",
              transform: "translateY(10%)",
              backgroundColor: index * STEP < values[0] ? "#4C3290" : "#ccc",
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values,
                  colors: ["#4C3290", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "32px",
              width: "32px",
              outline: "0px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "4px",
                backgroundColor: isDragged ? "#C4C4C4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "10px" }}>{values[0].toFixed(1)}</output>
    </div>
  );
};

export default Marks;
