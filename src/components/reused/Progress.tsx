interface Props {
  current: number;
  full: number;
}

export default function Progress({ current, full }: Props) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className={`bg-purple-600 h-2.5 rounded-full`}
        style={{ width: `${(current / full) * 100}%` }}
      ></div>
    </div>
  );
}
