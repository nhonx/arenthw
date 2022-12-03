import React from "react";

interface IProgressRingProps {
  amount: number;
  targetAmount: number;
  unit?: string;
}

export const ProgressRing = (props: IProgressRingProps) => {
  const [amount, setAmount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setAmount(props.amount);
    }, 0);
  }, []);
  let gaugePerimeter = 67 * Math.PI * 2;
  let currentPercentage = (amount * 100) / props.targetAmount;
  let newStrokedashOffset =
    gaugePerimeter - (gaugePerimeter * currentPercentage) / 100;
  let showAmountPercent = true;
  if (
    isNaN(newStrokedashOffset) ||
    props.targetAmount === 0 ||
    currentPercentage < 0
  ) {
    showAmountPercent = false;
    if (isNaN(newStrokedashOffset)) newStrokedashOffset = 0;
  }
  return (
    <div className="gauge-container">
      <svg
        className="gauge"
        viewBox="0 0 150 150"
        preserveAspectRatio="xMinYMin Meet"
      >
        <circle
          className="rail"
          r="67"
          cx="75"
          cy="75"
          strokeDashoffset={gaugePerimeter}
        />
        <circle
          className={"progress" + (showAmountPercent ? "" : " is-hidden")}
          r="67"
          data-target="50"
          transform="rotate(-180 75 75)"
          cx="75"
          cy="75"
          strokeDashoffset={newStrokedashOffset}
          strokeDasharray={gaugePerimeter + " " + gaugePerimeter}
        />
      </svg>
      <span className="center number-amount">
        <p>{amount}</p>
        <span>{props.unit}</span>
      </span>
    </div>
  );
};
