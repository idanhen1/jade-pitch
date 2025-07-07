export default function MetricsDisplay({ metrics }) {
  return (
    <div className="flex justify-center items-center space-x-12">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="text-center"
        >
          <div className="mb-1">
             <span className="text-3xl font-extralight text-green-600 block leading-none">
              {metric.number}
            </span>
          </div>
          <div>
            <p className="text-gray-500 font-medium text-[9px] tracking-wider uppercase">
              {metric.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}